var timeElement = document.getElementById('currentTime');
        function updateTime() {
            var currentTime = new Date();
            timeElement.textContent = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        setInterval(updateTime, 1000);
        updateTime();