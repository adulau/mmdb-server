// Applies the saved theme before the first paint (loaded in <head>, not deferred).
(function () {
  try {
    var theme = localStorage.getItem('mmdb-theme');
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch (e) { /* storage blocked: follow the system */ }
})();
