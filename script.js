const links = document.querySelectorAll('[data-tab]');
const navLinks = document.querySelectorAll('.tabs [data-tab]');
const panels = document.querySelectorAll('.panel');
function showPanel(id, focus = false) {
  const target = document.getElementById(id) || document.getElementById('gioi-thieu');
  panels.forEach(panel => { const active = panel === target; panel.hidden = !active; panel.classList.toggle('active', active); });
  navLinks.forEach(link => { const active = link.dataset.tab === target.id; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
  if (focus) target.focus({ preventScroll: true });
}
links.forEach(link => link.addEventListener('click', () => showPanel(link.dataset.tab, true)));
window.addEventListener('hashchange', () => showPanel(location.hash.slice(1)));
showPanel(location.hash.slice(1));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => { const selected = item === button; item.classList.toggle('selected', selected); item.setAttribute('aria-pressed', String(selected)); });
  document.querySelectorAll('.project[data-category]').forEach(project => { project.hidden = filter !== 'all' && !project.dataset.category.split(' ').includes(filter); });
}));
