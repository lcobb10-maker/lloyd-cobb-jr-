from pathlib import Path
root=Path(__file__).resolve().parent
text=(root/'template.html').read_text()
app=(root/'app.js').read_text()
assert app.count('/*INJECT_UPGRADE*/')==1
app=app.replace('/*INJECT_UPGRADE*/',(root/'upgrade_runtime.js').read_text())
css=(root/'style.css').read_text()+'\n'+(root/'upgrade.css').read_text()
visual=(root/'visual-engine.js').read_text()
visual=visual.replace('/*BUILD_FRAGMENT*/',__import__('json').dumps((root/'studio.frag').read_text()))
for anchor,content in [('/*BUILD_CSS*/',css),('/*BUILD_GSAP*/',(root/'gsap.min.js').read_text()),('/*BUILD_APP*/',app),('/*BUILD_VISUAL*/',visual)]:
 assert text.count(anchor)==1,(anchor,text.count(anchor))
 text=text.replace(anchor,content)
assert '/*BUILD' not in text and '/*INJECT_UPGRADE*/' not in text
(root/'index.html').write_text(text)
print('built public-safe interactive demo:',len(text),'characters, no external JS dependency')