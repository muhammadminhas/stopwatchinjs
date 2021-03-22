var ms = 0, s = 0, m = 0;
		var timer;

		var stopwatchEl = document.querySelector('.stopwatch');
		

		function start() {
			if(!timer) {
				timer = setInterval(run, 10);
			}
		}

		function run() {
			stopwatchEl.textContent = getTimer();
			ms++;
			if(ms == 100) {
				ms = 0;
				s++;
			}
			if(s == 60) {
				s = 0;
				m++;
			}
		}

		function pause() {
			stopTimer();
		}

		function stop() {
			stopTimer();
			ms = 0;
			s = 0;
			m = 0;
			stopwatchEl.textContent = getTimer();
		}

		function stopTimer() {
			clearInterval(timer);
			timer = false;
		}

		function getTimer() {
			return m+" : "+s+" : "+ms+" ";
		}

		function restart() {
			stop();
			start();
		}