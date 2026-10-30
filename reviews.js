'use strict';
(()=>{
 // Excerpts transcribed from the user-supplied Facebook screenshots. Names intentionally omitted.
 const track=document.querySelector('#reviews-track');
 track.innerHTML=[1,2,3].map((n)=>`<figure class="review-card review-screenshot"><a href="assets/images/reviews/facebook-comments-${n}.webp" target="_blank" rel="noopener" aria-label="تكبير صورة التعليقات ${n}"><img src="assets/images/reviews/facebook-comments-${n}.webp" alt="تعليقات التلاميذ على فيسبوك ${n}" loading="lazy" width="844" height="925"><span class="review-zoom">تكبير الصورة ↗</span></a></figure>`).join('');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let hovered=false,touching=false,lastManual=0;
 function move(direction,manual=false){
  if(manual)lastManual=Date.now();
  const step=track.querySelector('.review-card').getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);
  const max=track.scrollWidth-track.clientWidth;
  let next=Math.round(track.scrollLeft/step)*step+direction*step;
  if(next>max+2)next=0;else if(next<0)next=max;
  track.scrollTo({left:Math.min(max,next),behavior:reduced.matches?'instant':'smooth'});
 }
 document.querySelector('#reviews-next').addEventListener('click',()=>move(1,true));
 document.querySelector('#reviews-prev').addEventListener('click',()=>move(-1,true));
 track.addEventListener('pointerenter',()=>{hovered=true;});track.addEventListener('pointerleave',()=>{hovered=false;});
 track.addEventListener('pointerdown',()=>{touching=true;lastManual=Date.now();});
 window.addEventListener('pointerup',()=>{touching=false;});
 track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();move(e.key==='ArrowRight'?1:-1,true);}});
 setInterval(()=>{if(reduced.matches||hovered||touching||document.hidden||track.contains(document.activeElement)||Date.now()-lastManual<10000)return;const r=track.getBoundingClientRect();if(r.bottom>0&&r.top<window.innerHeight)move(1);},6500);
})();
