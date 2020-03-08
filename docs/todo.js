(() => {
  const ui = {
    el: tag('div', 'todo-list')
  }

  const items = [
    'Wybrać zdjęcia',
    'Paszport',
    'Zmienić pościel',
    'Fartuch szklany',
    'Nocnik',
    'Ubezpieczenie',
    'Tesco',
    'Butelki'
  ];

  items.forEach(item => {
    const el = tag('div', 'todo-item')
    el.textContent = item;
    ui.el.append(el);
  });

  document.querySelector('.js-right').append(ui.el);
})()
