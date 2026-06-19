// Smooth scrolling for in-page nav
document.addEventListener('click', function(e){
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const href = a.getAttribute('href');
  if(href === '#') return;
  const target = document.querySelector(href);
  if(target){
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
  }
});

// Simple keyboard shortcut: press 't' to toggle reduced motion (for demo)
let reduced = false;
document.addEventListener('keydown', (e)=>{
  if(e.key.toLowerCase() === 't'){
    reduced = !reduced;
    document.documentElement.style.scrollBehavior = reduced ? 'auto' : 'smooth';
  }
});
