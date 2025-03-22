document.querySelector(".mobile-nav-opener").addEventListener('click', () => {
  let nav = document.querySelector('.collapsed');
  if (!nav.style.display || nav.style.display === 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let sidebarOpener = document.querySelector(".open-sidebar");
  let sidebarCloser = document.querySelector(".close-sidebar");
  let sidebar = document.querySelector('.sidebar');

  if (sidebarOpener && sidebarCloser && sidebar) {
    sidebarOpener.addEventListener('click', () => {
      sidebar.style.display = 'block';
    });
    sidebarCloser.addEventListener('click', () => {
      sidebar.style.display = 'none';
    });
  }
});
