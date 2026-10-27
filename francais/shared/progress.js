/* Fortschritt aus localStorage (+ zentraler Stand über sync.js) – gemeinsam für Startseite und Fachseite.
   Nachholbedarf: jedes Kapitel mit Flag nh:true in data.js (→ lessons.js extras[].nh) erscheint automatisch. */
(function(){
'use strict';
const get=k=>{try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}};
/* lokaler Stand ODER zentraler Stand (window.SYNC, nur gelesen – wird hier nie gespeichert) */
const raw=m=>{const p=get('fr_lekt_'+m.slug+'_v2')||get('fr_lekt_'+m.slug+'_v1')||{ch:{},test:{}};const S=window.SYNC;let r=null;try{r=S?S.lesson(m.slug):null;}catch(e){}return r?S.mergeP(p,r):p;};
const isDone=c=>!!c.done||(c.best||0)>=70&&(c.runs||0)>0;
const ST={offen:{t:'offen',ic:'○',cls:'st-open'},arbeit:{t:'in Arbeit',ic:'✏️',cls:'st-work'},fertig:{t:'geschafft',ic:'✓',cls:'st-done'}};
function chStatus(p,id){const c=(p.ch||{})[id]||{};const started=(c.runs||0)>0||!!c.seen||Object.keys(c.solved||{}).length>0;
 const k=isDone(c)?'fertig':started?'arbeit':'offen';return Object.assign({key:k,best:c.best||0,runs:c.runs||0},ST[k]);}
function lesson(m){const p=raw(m);let done=0,started=0;
 m.chapters.forEach(id=>{const c=(p.ch||{})[id]||{};if(isDone(c))done++;if((c.runs||0)>0||c.seen)started++;});
 const t=p.test||{};
 return {done,started,total:m.chapters.length,pct:Math.round(done/Math.max(1,m.chapters.length)*100),test:t.best!=null?t.best:null,stars:t.stars||0,
  xs:(m.extras||[]).map(x=>Object.assign({id:x.id,title:x.title,nh:!!x.nh,take:x.take},chStatus(p,x.id)))};}
function nh(LS){const out=[];(LS||[]).forEach((m,i)=>{const p=raw(m);(m.extras||[]).filter(x=>x.nh).forEach(x=>out.push(Object.assign({slug:m.slug,lesson:m.title,icon:m.icon,color:m.color,n:i+1,id:x.id,title:x.title,take:x.take,lbl:x.lbl,href:m.slug+'/#k='+x.id},chStatus(p,x.id))));});return out;}
function subject(LS){let done=0,total=0,any=false;(LS||[]).forEach(m=>{const l=lesson(m);done+=l.done;total+=l.total;if(l.started||l.test!=null)any=true;});
 const n=nh(LS);return {done,total,pct:Math.round(done/Math.max(1,total)*100),any,nhOpen:n.filter(x=>x.key!=='fertig').length,nh:n};}
window.PROG={lesson,nh,subject,ST};
})();
