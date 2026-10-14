lucide.createIcons();

  //     Full Name: Santos Johnzelle L.
  //     Section: WD-202
  //     FANTEASY FIGMA CODE

// mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});

// menu tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.classList.toggle('active', t === tab));
  const show = tab.dataset.show;
  document.querySelectorAll('.group').forEach(g => {
    g.hidden = show !== 'all' && g.dataset.group !== show;
  });
}));

// reservation form
const form = document.getElementById('res-form');
if (form) {
  const msg = document.getElementById('msg');
  const date = document.getElementById('date');
  date.min = new Date().toISOString().split('T')[0];

  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(f => {
      const bad = !f.value.trim() || !f.checkValidity();
      f.classList.toggle('bad', bad);
      if (bad) ok = false;
    });
    msg.className = 'msg ' + (ok ? 'ok' : 'err');
    msg.textContent = ok
      ? `Thank you, ${form.name.value.split(' ')[0]}! Your table is requested. We'll confirm by email.`
      : 'Please fill in the highlighted fields.';
    if (ok) form.reset();
  });
  form.addEventListener('reset', () => {
    form.querySelectorAll('.bad').forEach(f => f.classList.remove('bad'));
    msg.textContent = '';
  });
}

// privacy policy / terms popup
const modal = document.getElementById('modal');
document.querySelectorAll('[data-modal]').forEach(b => b.addEventListener('click', () => {
  document.getElementById('modal-title').textContent = b.dataset.modal;
  modal.showModal();
}));
document.getElementById('modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
