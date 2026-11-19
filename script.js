/* Progressive enhancement: section anchors remain usable without JavaScript. */
const filters = document.querySelector('.filters');
const buttons = Array.from(document.querySelectorAll('.filters [data-filter]'));
const projects = Array.from(document.querySelectorAll('.project[data-category]'));
const status = document.getElementById('filter-status');

if (filters && buttons.length && projects.length) {
  buttons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visible = 0;
    buttons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    projects.forEach(project => {
      const matches = filter === 'all' || project.dataset.category.split(/\s+/).includes(filter);
      project.hidden = !matches;
      if (matches) visible += 1;
    });
    if (status) status.textContent = `Đang hiển thị ${visible} dự án.`;
  }));
  filters.hidden = false;
}
