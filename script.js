const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.navlinks');

if(toggle&&nav){
  toggle.setAttribute('aria-expanded','false');
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open?'true':'false');
  });
  nav.querySelectorAll('a').forEach(link=>{
    link.addEventListener('click',()=>{
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    });
  });
}
