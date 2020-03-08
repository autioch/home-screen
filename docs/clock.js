(() => {


  const ui = {
    el: tag('div', 'clock'),
    hour: tag(),
    minuteColon: tag(),
    minute: tag(),
    secondColon: tag(),
    second: tag(),
  };

  ui.el.append(ui.hour, ui.minuteColon, ui.minute, ui.secondColon, ui.second);
  ui.minuteColon.textContent = ':';
  ui.secondColon.textContent = ':';

  function updateTime(){
    const time = new Date();
    ui.hour.textContent = time.getHours().toString().padStart(2,'0');
    ui.minute.textContent = time.getMinutes().toString().padStart(2,'0');
    ui.second.textContent = time.getSeconds().toString().padStart(2,'0');
  }

  updateTime();

  setInterval(updateTime, 1000);

  document.querySelector('.js-left').prepend(ui.el);
})();
