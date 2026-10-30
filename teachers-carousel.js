'use strict';
(()=>{
 const track=document.querySelector('#teacher-cards');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let paused=reduced.matches,hovering=false,touching=false,lastManual=0;
 const move=(direction,manual=false)=>{
  if(manual)lastManual=Date.now();
  const card=track.querySelector('.teacher');if(!card)return;
  const step=card.getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);
  const max=track.scrollWidth-track.clientWidth;
  const at=Math.round(track.scrollLeft/step)*step;
  let next=at+direction*step;
  if(next>max+2)next=0;else if(next<0)next=max;
  track.scrollTo({left:Math.min(max,next),behavior:reduced.matches?'instant':'smooth'});
 };
 document.querySelector('#teacher-next').addEventListener('click',()=>move(1,true));
 document.querySelector('#teacher-prev').addEventListener('click',()=>move(-1,true));
 track.addEventListener('pointerenter',()=>{hovering=true;});
 track.addEventListener('pointerleave',()=>{hovering=false;});
 track.addEventListener('pointerdown',()=>{touching=true;lastManual=Date.now();});
 window.addEventListener('pointerup',()=>{touching=false;lastManual=Date.now();});
 track.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();move(event.key==='ArrowRight'?1:-1,true);}});
 reduced.addEventListener('change',()=>{if(reduced.matches){paused=true;}});
 setInterval(()=>{if(paused||hovering||touching||document.hidden||Date.now()-lastManual<8000||track.contains(document.activeElement))return;const rect=track.getBoundingClientRect();if(rect.bottom>0&&rect.top<window.innerHeight)move(1);},4000);
})();
