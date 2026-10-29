const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  navigation.classList.toggle('is-open', !isExpanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

const portraitTrigger = document.querySelector('.portrait-trigger');
const portraitDialog = document.querySelector('#portrait-dialog');
const portraitClose = document.querySelector('.dialog-close');

if (portraitTrigger && portraitDialog && portraitClose) {
  portraitTrigger.addEventListener('click', () => portraitDialog.showModal());
  portraitClose.addEventListener('click', () => portraitDialog.close());
  portraitDialog.addEventListener('click', (event) => {
    if (event.target === portraitDialog) portraitDialog.close();
  });
}