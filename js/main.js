document.addEventListener('click', (event) => {
  if (event.target.matches('.mobile-nav-opener')) {
    let nav = document.querySelector('.collapsed');
    if (!nav.style.display || nav.style.display === 'none') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
  }
  if (event.target.matches('.open-sidebar')) {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
  }
  if (event.target.matches('.close-sidebar')) {
    let sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
});