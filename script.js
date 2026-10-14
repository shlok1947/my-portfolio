document.querySelectorAll('.portfolio-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Bhai, index.html me is link ka href="#" replace karke apna deployed portfolio URL add kar dena.');
  });
});
