(() => {
  const TAB_TITLE = 'Khloe Minji Kim';
  document.title = TAB_TITLE;

  const title = document.querySelector('title');
  if (title) {
    title.textContent = TAB_TITLE;
  }
})();
