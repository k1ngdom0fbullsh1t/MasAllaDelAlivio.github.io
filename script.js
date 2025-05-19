function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }
  

/*document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Evita el cambio inmediato de página
    const href = this.getAttribute('href');
    document.getElementById('loading-overlay').style.display = 'flex';

    setTimeout(() => {
      window.location.href = href;
    }, 500); // Espera 0.5 segundos antes de ir a la página
  });
});*/
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

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});