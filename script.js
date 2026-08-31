const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
toggle?.addEventListener('click',()=>{const open=header.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));document.querySelector('.mobile-nav')?.setAttribute('aria-hidden',String(!open));});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
