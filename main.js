// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});


window.addEventListener('DOMContentLoaded', function(event) {
  const hamburgerEl = this.document.getElementById('hamburger')
  const navlinkEl = this.document.getElementById('navlink')
  const closeEl = this.document.getElementById('closeNav')

  hamburgerEl.addEventListener('click', function() {
    navlinkEl.classList.add('show')
  })

  closeEl.addEventListener('click', function() {
    navlinkEl.classList.remove('show')
  })
})
