function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }
  

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    document.getElementById('loading-card').style.display = 'flex';

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});

var menuToggle = document.getElementById('menu-toggle');
var sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});