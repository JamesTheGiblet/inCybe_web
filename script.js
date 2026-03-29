const io = new IntersectionObserver(entries =>
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("in"); })
, {threshold:0.1});
document.querySelectorAll(".vcell,.pri,.phrow").forEach(el => io.observe(el));

// Smooth scroll for all anchor links starting with #
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = targetId === '#' ? document.body : document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});