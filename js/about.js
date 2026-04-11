window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>40);
},{passive:true});

function toggleMobileNav(){
  document.getElementById('mobileNav').classList.toggle('open');
}

const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function animateCounter(el, target, duration=1800){
  const start = performance.now();
  function update(now){
    const progress = Math.min((now-start)/duration,1);
    const eased = 1-Math.pow(1-progress,3);
    const current = Math.round(eased*target);
    el.textContent = current.toLocaleString();
    if(progress<1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(update);
}

const counterIO = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el = e.target;
      const target = parseInt(el.dataset.target)||0;
      animateCounter(el, target);
      counterIO.unobserve(el);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.counter').forEach(el=>counterIO.observe(el));

const spIO = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.sp-fill').forEach(bar=>{
        const w = bar.style.width;
        bar.style.width='0%';
        setTimeout(()=>{
          bar.style.transition='width 1.2s ease';
          bar.style.width=w;
        },200);
      });
      spIO.unobserve(e.target);
    }
  });
},{threshold:0.3});
document.querySelectorAll('.sustain-big-card').forEach(el=>spIO.observe(el));

document.addEventListener('keydown',e=>{
  if(e.key==='Escape') document.getElementById('mobileNav').classList.remove('open');
});
