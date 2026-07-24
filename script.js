const form = document.getElementById('messageForm');
const content = document.getElementById('content');
const posts = document.getElementById('Confes');
const toggleButton = document.getElementById('PostButton');
const composer = document.querySelector('.elemento-centro');

function updateToggleIcon() {
  if (!toggleButton || !composer) return;
  if (composer.classList.contains('show')) {
    toggleButton.textContent = '−';
    toggleButton.setAttribute('aria-expanded', 'true');
  } else {
    toggleButton.textContent = '+';
    toggleButton.setAttribute('aria-expanded', 'false');
  }
}

if (toggleButton && composer) {
  // ensure accessible role/state
  toggleButton.setAttribute('aria-controls', 'messageForm');
  updateToggleIcon();
  toggleButton.addEventListener('click', () => {
    composer.classList.toggle('show');
    updateToggleIcon();
    if (composer.classList.contains('show')) {
      content?.focus();
    }
  });
}

if (form && content && posts) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = content.value.trim();
    if (!text) return;

    const Confesion = document.createElement('div');
    Confesion.className = 'Confesion';
    posts.prepend(Confesion);

    const User = document.createElement('h3');
    User.className = 'User';
    User.textContent = 'Confesión Anónima';
    Confesion.appendChild(User);

    const Mensaje = document.createElement('p');
    Mensaje.className = 'Mensaje';
    Mensaje.textContent = text;
    Confesion.appendChild(Mensaje);

    content.value = '';
    content.focus();
    composer?.classList.remove('show');
    updateToggleIcon();
  });
}
