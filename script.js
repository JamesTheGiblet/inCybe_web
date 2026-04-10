const io = new IntersectionObserver(entries =>
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("in"); })
, {threshold:0.1});
document.querySelectorAll(".vcell,.pri,.phrow,.classified,.inverted").forEach(el => io.observe(el));

// Video scroll trigger logic
const videoIO = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('video').forEach(vid => videoIO.observe(vid));

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

// Modal logic
document.querySelectorAll('.modal-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const modalId = trigger.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
  });
});
document.querySelectorAll('.close-button').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').style.display = 'none';
  });
});
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});