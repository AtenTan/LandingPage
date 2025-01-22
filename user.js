const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault();
    const href = menuItem.getAttribute('href');
    setTimeout(() => {
      window.open(href, '_blank');
    }, 60000);
  });
});