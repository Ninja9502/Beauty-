function toggleMenu() {
  const header = document.querySelector('.header');
  header.classList.toggle('opened');
  const menu = document.querySelector('.mainMenu');
  const burgerIcon = document.querySelector('.menu');
  const closeMenuIcon = document.querySelector('.closeMenu i');
  
  if (header.classList.contains('opened')) {
    menu.style.display = 'block';
    burgerIcon.classList.add('opened');
    closeMenuIcon.addEventListener('click', toggleMenu);
  } else {
    menu.style.display = 'none';
    burgerIcon.classList.remove('opened');
    closeMenuIcon.removeEventListener('click', toggleMenu);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.menu');
  burgerIcon.addEventListener('animationend', () => {
    if (!burgerIcon.classList.contains('opened')) {
      const menu = document.querySelector('.mainMenu');
      menu.style.display = 'none';
    }
  });
});