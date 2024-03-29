let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('.cursor-scale'); 
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function(){
    gsap.to(cursor, 0.001, { // Adjust the duration here (e.g., 0.2 seconds)
      x: mouseX,
      y: mouseY,
      ease: 'power4.out',
    });
  }
});

window.addEventListener('mousemove', (e)=> {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach(link => {
  link.addEventListener('mouseenter', ()=> {
    cursor.classList.add('grow'); 
    if (link.classList.contains('small')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
  
  link.addEventListener('mouseleave', ()=> {
    cursor.classList.remove('grow');
    cursor.classList.remove('grow-small');
  });
});

