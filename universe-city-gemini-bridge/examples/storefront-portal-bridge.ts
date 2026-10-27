/**
 * Public-safe example: storefront-side bridge to an embedded game.
 * DESIGN REFERENCE ONLY, not deployed, not yet integrated with Shopify.
 * NEVER grant cart, payment or admin privileges merely because this packet passed.
 */
export type PortalAction =
  | 'HELLO'
  | 'ENTER_WORLD'
  | 'SHOW_DEALER'
  | 'TRANSFER_ROOM';

type Packet = {
  contractVersion: 'uc-portal-v1';
  requestId: string;
  type: string;
  payload: Record<string, unknown>;
  replyTo?: string;
};

type Pending = {
  resolve: (value: Packet) => void;
  reject: (error: Error) => void;
  timer: ReturnType<typeof setTimeout>;
};

function isPacket(value: unknown): value is Packet {
  if (typeof value !== 'object' || value === null) return false;
  const p = value as Record<string, unknown>;
  return p.contractVersion === 'uc-portal-v1'
    && typeof p.requestId === 'string' && p.requestId.length >= 8
    && typeof p.type === 'string'
    && typeof p.payload === 'object' && p.payload !== null
    && !Array.isArray(p.payload)
    && (p.replyTo === undefined || typeof p.replyTo === 'string');
}

/** Parent page must define exactly which world origin it trusts. */
export function createStorefrontPortalBridge(
  frame: HTMLIFrameElement,
  allowedWorldOrigin: string,
  timeoutMs = 8_000,
) {
  const trustedOrigin = new URL(allowedWorldOrigin).origin;
  const waiting = new Map<string, Pending>();
  let closed = false;

  function onMessage(event: MessageEvent<unknown>) {
    if (closed || event.origin !== trustedOrigin) return;
    if (!frame.contentWindow || event.source !== frame.contentWindow) return;
    if (!isPacket(event.data)) return;
    const msg = event.data;
    const key = msg.replyTo;
    if (!key) return;
    const entry = waiting.get(key);
    if (!entry) return;
    if (msg.type !== 'ERROR' && !msg.type.endsWith('_ACK')) return;
    waiting.delete(key);
    clearTimeout(entry.timer);
    if (msg.type === 'ERROR') {
      const code = typeof msg.payload.code === 'string' ? msg.payload.code : 'UNKNOWN';
      entry.reject(new Error('World request failed: ' + code));
    } else {
      entry.resolve(msg);
    }
  }

  window.addEventListener('message', onMessage);

  async function send(
    type: PortalAction,
    payload: Record<string, unknown> = {},
  ): Promise<Packet> {
    if (closed) throw new Error('bridge-closed');
    const target = frame.contentWindow;
    if (!target) throw new Error('world-frame-unavailable');
    const requestId = crypto.randomUUID();
    const msg: Packet = { contractVersion: 'uc-portal-v1', requestId, type, payload };
    return new Promise<Packet>((resolve, reject) => {
      const timer = setTimeout(() => {
        waiting.delete(requestId);
        reject(new Error('world-response-timeout'));
      }, timeoutMs);
      waiting.set(requestId, { resolve, reject, timer });
      try {
        target.postMessage(msg, trustedOrigin);
      } catch (err) {
        clearTimeout(timer);
        waiting.delete(requestId);
        reject(err instanceof Error ? err : new Error('postmessage-failed'));
      }
    });
  }

  function dispose() {
    if (closed) return;
    closed = true;
    window.removeEventListener('message', onMessage);
    for (const [key, entry] of waiting) {
      clearTimeout(entry.timer);
      entry.reject(new Error('bridge-disposed'));
      waiting.delete(key);
    }
  }

  return { send, dispose };
}

/**
 * IMPORTANT integration TODOs:
 * 1) World iframe MUST implement reciprocal strict parent-origin/source checks.
 * 2) Server MUST independently authenticate resident/session/action authorization.
 * 3) Shopify cart addition MUST happen only from the trusted storefront shell,
 *    with variants checked against the canonical catalog and anti-duplication.
 * 4) This sample is NOT a secure bearer-token protocol. Do not put secrets in payloads.
 * 5) Add request allowlist, runtime payload validation, tests and session revocation.
 * 6) Test Safari iframe behavior and fallback to branded full-page navigation.
 */
