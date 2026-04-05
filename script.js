const bg = document.querySelector('.bg');

if (bg) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 25 - 12.5;
    const y = (e.clientY / window.innerHeight) * 25 - 12.5;
    bg.style.transform = `translate(${x}px, ${y}px)`;
  });

  document.addEventListener('mouseleave', () => {
    bg.style.transform = 'translate(0, 0)';
  });
}