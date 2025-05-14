var timeElement = document.getElementById('currentTime');
    function updateTime() {
        var currentTime = new Date();
        timeElement.textContent = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    setInterval(updateTime, 1000);
    updateTime();

ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [59.539611, 30.881228],
      zoom: 16,
      controls: ['zoomControl']
    });
    myMap.setType('yandex#map');
    myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      preset: 'islands#violetDotIcon'
    } 
    myMap.geoObjects.add(myPlacemark);
  }

document.addEventListener('DOMContentLoaded', function() {
document.querySelector('.btn:nth-of-type(1)').addEventListener('click', function() {
  alert('Открывается трейлер фильма');
});
  
document.querySelector('.btn:nth-of-type(2)').addEventListener('click', function() {
  alert('Переход к покупке билета');
});

const timeSlots = document.querySelectorAll('.time-slot');
timeSlots.forEach(slot => {
  slot.addEventListener('click', function() {
    timeSlots.forEach(s => s.classList.remove('active'));
    this.classList.add('active');
    alert('Выбрано время: ' + this.textContent);
  });
});
});