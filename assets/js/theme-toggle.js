/* ==========================================================================
   Theme toggle (light/dark)
   Adapted from upstream academicpages.github.io
   ========================================================================== */

(function () {
  var browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  function setTheme(theme) {
    var use_theme = theme || localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme') || browserPref;
    var icon = document.getElementById('theme-icon');
    if (use_theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); }
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  setTheme();

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light');
  });

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.addEventListener('click', toggleTheme);
    setTheme();
  });
})();
