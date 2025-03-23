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
document.addEventListener('change', (event) => {
  if (event.target.matches('.language-selector-locale')) {
    const selectedOption = event.target.options[event.target.selectedIndex];
    const languageUrl = selectedOption.getAttribute('data-language-url');
    if (languageUrl) {
      const currentPath = window.location.pathname;
      const queryParams = window.location.search;
      const pathSegments = currentPath.split('/');
      if (pathSegments.length > 1) {
        pathSegments[1] = languageUrl.replace('/', '');
      }
      const newPath = pathSegments.join('/');
      const fullUrl = newPath + queryParams;
      window.location.href = fullUrl;
    }
  }
});
