const hamburgerMenuToggle = () => {
  const btn = document.querySelector('.mobile-menu-button');
  const menu = document.querySelector('.mobile-menu');
  const hamburger = document.querySelector('.hamburger');

  btn.addEventListener('click', () => {
    hamburger.classList.toggle('text-sky-600');
    menu.classList.toggle('hidden');
  });
};
