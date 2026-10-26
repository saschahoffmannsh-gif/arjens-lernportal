/* ===================== TRAINING-SEITE: Probe-Klassenarbeit + Spiele (nutzt die gemeinsame Engine) ===================== */
(function(){
'use strict';
const W=window,$=(s,r=document)=>r.querySelector(s);
const V=W.V;
const HUB={views:{},E:null};W.HUB=HUB;
const M=()=>document.getElementById('main');
const howBox=(t,x,open)=>`<details class="intro howto"${open?' open':''}><summary><span class="in-ic">📖</span><span>${t}</span><span class="in-tg" aria-hidden="true"></span></summary><div class="intro-body">${V.explain(x)}</div></details>`;
HUB.howBox=howBox;
function setTitle(t){const h=$('#hubTitle');if(h)h.textContent=t;document.title=t+' – Französisch · Arjens Lernportal';}
HUB.views.home=function(){setTitle('Training');
 M().innerHTML=`<section class="hubhero"><h1>🎯 Training</h1><p>Zusätzlich zu den Lektionen: Probe-Arbeit und Spiele.</p></section>
 <div class="hubgrid"><button class="hubtile" data-hub="probe"><span class="ht-ic">📝</span><b>Probe-Klassenarbeit</b><small>wie die echte Arbeit · 45 Min.</small></button>
 <button class="hubtile" data-hub="spiele"><span class="ht-ic">🎮</span><b>Spiele</b><small>être-Blitz · Artikel · Lego</small></button></div>
 <div class="toolbar center"><a class="btn ghost" href="${window.PKG_BACK||'../'}">← Zurück zum Paket</a></div>`;};
HUB.init=E=>{HUB.E=E;if(W.TR&&W.TR.sync)W.TR.sync();
 /* zentraler Stand (Probe/Spiele anderer Geräte) angekommen → Übersichtsseiten neu zeichnen, nie mitten in einer Übung */
 if(W.SYNC)W.SYNC.on(()=>{try{const v=E.cur();if(v==='probe'||v==='spiele'||v==='home'){const y=W.scrollY;E.go(v,null,true);W.scrollTo(0,y);}}catch(e){}});
 /* alte Daten von Fehlerkiste/Tagesmission (entfernt) still aufräumen */
 try{['fr_kiste_v1'].forEach(k=>localStorage.removeItem(k));}catch(e){}};
HUB.initial=()=>{const h=(location.hash||'').slice(1);if(h!=='home'&&HUB.views[h])return [h];const m=h.match(/^spiel-(\w+)$/);if(m&&HUB.views.game)return ['game',m[1]];const mi=h.match(/^mini-([\w-]+)$/);if(mi&&HUB.views.mini)return ['mini',mi[1]];return null;};
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-hub]');if(!b)return;ev.preventDefault();const v=b.dataset.hub;const m=v.match(/^spiel-(\w+)$/);if(m)HUB.E.go('game',m[1]);else HUB.E.go(v);});
})();
