// Vedas site — nav toggle + image lightbox
(function () {
  // mobile nav
  var t = document.getElementById('navToggle'),
      l = document.getElementById('navLinks');
  if (t && l) {
    t.addEventListener('click', function () { l.classList.toggle('open'); });
    l.addEventListener('click', function (e) { if (e.target.tagName === 'A') l.classList.remove('open'); });
  }

  // lightbox for any [data-zoom] image
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<span class="close" aria-label="Fermer">&times;</span><img alt="">';
  document.body.appendChild(box);
  var bimg = box.querySelector('img');

  document.addEventListener('click', function (e) {
    var img = e.target.closest('[data-zoom]');
    if (img) {
      bimg.src = img.getAttribute('data-zoom') || img.src;
      bimg.alt = img.alt || '';
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else if (e.target.closest('.lightbox')) {
      box.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { box.classList.remove('open'); document.body.style.overflow = ''; }
  });
})();
