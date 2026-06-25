document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); }, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const search = document.getElementById('search');
const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.writeup');
let active = 'all';
function applyFilter(){
  const q = search.value.toLowerCase();
  cards.forEach(card => {
    const category = card.dataset.category;
    const text = card.innerText.toLowerCase();
    const okCategory = active === 'all' || category === active;
    const okSearch = !q || text.includes(q);
    card.style.display = okCategory && okSearch ? '' : 'none';
  });
}
buttons.forEach(btn => btn.addEventListener('click', () => {
  active = btn.dataset.filter;
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilter();
}));
search.addEventListener('input', applyFilter);
buttons[0].classList.add('active');
