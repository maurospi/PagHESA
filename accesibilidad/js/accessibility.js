(function(){'use strict';
const KEY='hesa_a11y_preferences_v2';
const DEFAULTS={font:100,contrast:false,grayscale:false,links:false,cursor:false,spacing:false,lineHeight:false,reading:false,dyslexia:false,reduceMotion:window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches,pauseAnimations:false,voiceURI:'',rate:1,pitch:1};
let prefs=load();let synth=window.speechSynthesis||null;let voices=[];let chunks=[];let chunkIndex=0;let current=null;let highlighted=null;let status='finalizado';
function load(){try{return Object.assign({},DEFAULTS,JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(e){return Object.assign({},DEFAULTS);}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(prefs));}catch(e){}}
function $(id){return document.getElementById(id);}function announce(msg){let n=$('hesa-a11y-live');if(n){n.textContent='';setTimeout(()=>{n.textContent=msg;},40);}}
function icon(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4" r="2.4"/><path d="M5 8.5h14v2H14.5V22h-5V10.5H5z"/><path d="M7 14h3v2H7zm7 0h3v2h-3z"/></svg>';}
function ensureDom(){document.querySelectorAll('#accessibility-kit-container,#a11yBtn,#a11yPanel,#a11yOverlay').forEach(el=>el.remove());let root=document.createElement('div');root.id='hesa-a11y-root';root.innerHTML=`<button id="hesa-a11y-button" type="button" aria-label="Abrir panel de accesibilidad" aria-expanded="false" aria-controls="hesa-a11y-panel">${icon()}</button><aside id="hesa-a11y-panel" role="dialog" aria-modal="true" aria-labelledby="hesa-a11y-title" aria-hidden="true"><div class="hesa-a11y-header"><h2 id="hesa-a11y-title" class="hesa-a11y-title">Accesibilidad</h2><button id="hesa-a11y-close" class="hesa-a11y-close" type="button" aria-label="Cerrar panel">×</button></div>
<div class="hesa-a11y-body"><section class="hesa-a11y-section">
<section class="hesa-a11y-section"><h3>Contraste</h3><div class="hesa-a11y-grid"><button class="hesa-a11y-control" data-toggle="contrast">Alto contraste</button><button class="hesa-a11y-control" data-action="contrast-normal">Contraste normal</button></div></section>
<section class="hesa-a11y-section"><h3>Visualización</h3><div class="hesa-a11y-grid"><button class="hesa-a11y-control" data-toggle="grayscale">Escala de grises</button><button class="hesa-a11y-control" data-toggle="links">Resaltar enlaces</button><button class="hesa-a11y-control wide" data-toggle="cursor">Cursor grande</button></div></section>
<section class="hesa-a11y-section"><h3>Lectura</h3><div class="hesa-a11y-grid"><button class="hesa-a11y-control" data-toggle="spacing">Espaciado de texto</button><button class="hesa-a11y-control" data-toggle="lineHeight">Interlineado</button></div></section>
<!--<section class="hesa-a11y-section"><h3>Movimiento</h3><div class="hesa-a11y-grid"><button class="hesa-a11y-control" data-toggle="reduceMotion">Reducir movimiento</button><button class="hesa-a11y-control" data-toggle="pauseAnimations">Pausar animaciones</button></div></section>
--><section class="hesa-a11y-section"><h3>Lector de contenido</h3><div class="hesa-a11y-grid"><button class="hesa-a11y-control" data-speech="all">Leer página completa</button><button class="hesa-a11y-control" data-speech="section">Leer sección actual</button><button class="hesa-a11y-control" data-speech="pause">Pausar</button><button class="hesa-a11y-control" data-speech="resume">Reanudar</button><button class="hesa-a11y-control wide" data-speech="stop">Detener</button></div>
<div class="hesa-a11y-field"><label for="hesa-a11y-voice">Selección de voz</label><select id="hesa-a11y-voice" class="hesa-a11y-select"></select></div><div class="hesa-a11y-field"><label for="hesa-a11y-rate">Velocidad: <span id="hesa-a11y-rate-value"></span></label><input id="hesa-a11y-rate" class="hesa-a11y-range" type="range" min="0.5" max="2" step="0.1"></div><div class="hesa-a11y-field"><label for="hesa-a11y-pitch">Tono: <span id="hesa-a11y-pitch-value"></span></label><input id="hesa-a11y-pitch" class="hesa-a11y-range" type="range" min="0.5" max="2" step="0.1"></div><div id="hesa-a11y-status" class="hesa-a11y-status" role="status" aria-live="polite">Estado: finalizado</div></section><section class="hesa-a11y-section"><h3>Restablecer</h3><button class="hesa-a11y-control wide" data-action="reset">Restablecer todas las preferencias</button></section></div></aside><div id="hesa-a11y-live" class="hesa-a11y-sr" aria-live="polite" aria-atomic="true"></div>`;document.body.appendChild(root);}
function openPanel(){let p=$('hesa-a11y-panel'),b=$('hesa-a11y-button');p.setAttribute('aria-hidden','false');b.setAttribute('aria-expanded','true');b.style.opacity='0';b.style.pointerEvents='none';b.style.transform='scale(0.8)';setTimeout(()=>$('hesa-a11y-close').focus(),50);}
function closePanel(){let p=$('hesa-a11y-panel'),b=$('hesa-a11y-button');p.setAttribute('aria-hidden','true');b.setAttribute('aria-expanded','false');b.style.opacity='1';b.style.pointerEvents='auto';b.style.transform='scale(1)';b.focus();}
function setClass(name,on){document.documentElement.classList.toggle(name,!!on);}
function apply(){
  ['90','100','110','120','130','140'].forEach(v=>document.documentElement.classList.remove('hesa-a11y-font-'+v));
  let f=Math.max(90,Math.min(140,Math.round(prefs.font/10)*10));
  document.documentElement.classList.add('hesa-a11y-font-'+f);
  setClass('hesa-a11y-high-contrast',prefs.contrast);
  setClass('hesa-a11y-grayscale',prefs.grayscale);
  setClass('hesa-a11y-highlight-links',prefs.links);
  setClass('hesa-a11y-large-cursor',prefs.cursor);
  setClass('hesa-a11y-spacing',prefs.spacing);
  setClass('hesa-a11y-line-height',prefs.lineHeight);
  setClass('hesa-a11y-reading-mode',prefs.reading);
  setClass('hesa-a11y-dyslexia',prefs.dyslexia);
  setClass('hesa-a11y-reduce-motion',prefs.reduceMotion);
  setClass('hesa-a11y-pause-animations',prefs.pauseAnimations);
  if(prefs.reduceMotion || prefs.pauseAnimations){
    document.querySelectorAll('.wow').forEach(el=>{
      el.style.animationName='none';
      el.style.visibility='visible';
    });
  }
  document.querySelectorAll('[data-toggle]').forEach(btn=>{
    let k=btn.getAttribute('data-toggle');
    btn.setAttribute('aria-pressed',prefs[k]?'true':'false');
  });
  let rate=$('hesa-a11y-rate'),pitch=$('hesa-a11y-pitch');
  if(rate){rate.value=prefs.rate;$('hesa-a11y-rate-value').textContent=prefs.rate;}
  if(pitch){pitch.value=prefs.pitch;$('hesa-a11y-pitch-value').textContent=prefs.pitch;}
}
function bind(){document.addEventListener('click',e=>{let t=e.target.closest('#hesa-a11y-button,#hesa-a11y-close,[data-action],[data-toggle],[data-speech]');if(!t)return;if(t.id==='hesa-a11y-button'){openPanel();return;}if(t.id==='hesa-a11y-close'){closePanel();return;}let toggle=t.getAttribute('data-toggle');if(toggle){prefs[toggle]=!prefs[toggle];apply();save();announce(t.textContent.trim()+(prefs[toggle]?' activado':' desactivado'));return;}let action=t.getAttribute('data-action');if(action)handleAction(action);let speech=t.getAttribute('data-speech');if(speech)handleSpeech(speech);});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('hesa-a11y-panel')&&$('hesa-a11y-panel').getAttribute('aria-hidden')==='false')closePanel();if(e.altKey&&e.key.toLowerCase()==='a'){e.preventDefault();openPanel();}});}
function handleAction(a){if(a==='font-plus')prefs.font=Math.min(140,prefs.font+10);if(a==='font-minus')prefs.font=Math.max(90,prefs.font-10);if(a==='font-reset')prefs.font=100;if(a==='contrast-normal')prefs.contrast=false;if(a==='reset'){stopSpeech();prefs=Object.assign({},DEFAULTS,{reduceMotion:false});}apply();save();announce('Preferencia actualizada');}
function initVoices(){if(!synth)return;voices=synth.getVoices().sort((a,b)=>(b.lang.startsWith('es')?1:0)-(a.lang.startsWith('es')?1:0));let sel=$('hesa-a11y-voice');if(!sel)return;sel.innerHTML='';voices.forEach((v,i)=>{let o=document.createElement('option');o.value=v.voiceURI;o.textContent=`${v.name} (${v.lang})`;sel.appendChild(o);});if(prefs.voiceURI)sel.value=prefs.voiceURI;else if(voices[0])prefs.voiceURI=voices[0].voiceURI;}
function speechTextNodes(scope){let base=scope||document.body;let skip='script,style,noscript,iframe,svg,#hesa-a11y-root,#accessibility-kit-container,nav[aria-hidden="true"],[hidden]';return Array.from(base.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,td,th,button,a')).filter(el=>!el.closest(skip)&&el.innerText&&el.innerText.trim().length>1).map(el=>({el,text:el.innerText.trim().replace(/\s+/g,' ')}));}
function currentSection(){let list=Array.from(document.querySelectorAll('main section, section, article, main, body')).filter(el=>!el.closest('#hesa-a11y-root'));let y=window.scrollY+Math.round(window.innerHeight/3),best=null;list.forEach(el=>{let r=el.getBoundingClientRect(),top=r.top+window.scrollY;if(y>=top&&y<=top+r.height)best=el;});return best||document.body;}
function clearHighlight(){if(highlighted){highlighted.classList.remove('hesa-a11y-reading-highlight');highlighted=null;}}
function updateStatus(s){status=s;let el=$('hesa-a11y-status');if(el)el.textContent='Estado: '+s;announce('Estado del lector: '+s);}
function speakNext(){clearHighlight();if(chunkIndex>=chunks.length){updateStatus('finalizado');current=null;return;}let item=chunks[chunkIndex++];highlighted=item.el;highlighted.classList.add('hesa-a11y-reading-highlight');try{highlighted.scrollIntoView({block:'center',behavior:prefs.reduceMotion?'auto':'smooth'});}catch(e){}current=new SpeechSynthesisUtterance(item.text);let v=voices.find(x=>x.voiceURI===prefs.voiceURI);if(v)current.voice=v;current.lang=(v&&v.lang)||'es-CO';current.rate=parseFloat(prefs.rate)||1;current.pitch=parseFloat(prefs.pitch)||1;current.onend=speakNext;current.onerror=function(){speakNext();};synth.speak(current);updateStatus('leyendo');}
function startSpeech(scope){if(!synth){updateStatus('lector no disponible');return;}stopSpeech(false);chunks=speechTextNodes(scope);chunkIndex=0;if(!chunks.length){updateStatus('sin contenido legible');return;}speakNext();}
function stopSpeech(show=true){if(synth)synth.cancel();clearHighlight();current=null;chunks=[];chunkIndex=0;if(show)updateStatus('finalizado');}
function handleSpeech(a){if(a==='all')startSpeech(document.body);if(a==='section')startSpeech(currentSection());if(a==='pause'&&synth){synth.pause();updateStatus('pausado');}if(a==='resume'&&synth){synth.resume();updateStatus('leyendo');}if(a==='stop')stopSpeech();}
function bindSpeechControls(){let v=$('hesa-a11y-voice'),r=$('hesa-a11y-rate'),p=$('hesa-a11y-pitch');if(v)v.addEventListener('change',()=>{prefs.voiceURI=v.value;save();});if(r)r.addEventListener('input',()=>{prefs.rate=r.value;$('hesa-a11y-rate-value').textContent=r.value;save();});if(p)p.addEventListener('input',()=>{prefs.pitch=p.value;$('hesa-a11y-pitch-value').textContent=p.value;save();});if(synth){initVoices();synth.onvoiceschanged=initVoices;}}
function init(){ensureDom();bind();bindSpeechControls();apply();updateStatus(status);window.HESAAccessibility={open:openPanel,close:closePanel,apply:apply,stopSpeech:stopSpeech};}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
