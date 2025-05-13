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
      myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)    
      var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        preset: 'islands#violetDotIcon'
      } 
      myMap.geoObjects.add(myPlacemark);
    }