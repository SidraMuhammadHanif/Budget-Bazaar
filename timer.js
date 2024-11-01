
	
	
		// <!-- Adding JavaScript code -->
		
		
			// Getting formated date from date string
			let deadline = new Date(
				"nov 31, 2024 15:37:25"
			).getTime();

			// Calling defined function at certain interval
			let x = setInterval(function () {

				// Getting current date and time in required format
				let now = new Date().getTime();

				// Calculating difference
				let t = deadline - now;

				// Getting values of days,hours,minutes, seconds
				let days = Math.floor(
					t / (1000 * 60 * 60 * 24)
				);
				let hours = Math.floor(
					(t % (1000 * 60 * 60 * 24)) /
						(1000 * 60 * 60)
				);
				let minutes = Math.floor(
					(t % (1000 * 60 * 60)) / (1000 * 60)
				);
				let seconds = Math.floor(
					(t % (1000 * 60)) / 1000
				);

				// Show the output time
				document.getElementById("day")
						.innerHTML = days;
				document.getElementById("hour")
						.innerHTML = hours;
				document.getElementById("minute")
						.innerHTML = minutes;
				document.getElementById("second")
						.innerHTML = seconds;

				// Show overtime output
				if (t < 0) {
					clearInterval(x);
					document.getElementById(
						"demo"
					).innerHTML = "TIME UP";
					document.getElementById(
						"day"
					).innerHTML = "20";
					document.getElementById(
						"hour"
					).innerHTML = "5";
					document.getElementById(
						"minute"
					).innerHTML = "300";
					document.getElementById(
						"second"
					).innerHTML = "60";
				}
			}, 500);
	
			
	
	
		// <!-- Adding JavaScript code -->
		
		
			// Getting formated date from date string
			let timer = new Date(
				"nov 31, 2024 15:37:25"
			).getTime();

			// Calling defined function at certain interval
			let y= setInterval(function () {

				// Getting current date and time in required format
				let now = new Date().getTime();

				// Calculating difference
				let t = deadline - now;

				// Getting values of days,hours,minutes, seconds
				let days = Math.floor(
					t / (1000 * 60 * 60 * 24)
				);
				let hours = Math.floor(
					(t % (1000 * 60 * 60 * 24)) /
						(1000 * 60 * 60)
				);
				let minutes = Math.floor(
					(t % (1000 * 60 * 60)) / (1000 * 60)
				);
				let seconds = Math.floor(
					(t % (1000 * 60)) / 1000
				);

				// Show the output time
				document.getElementById("day1")
						.innerHTML = days;
				document.getElementById("hour1")
						.innerHTML = hours;
				document.getElementById("minute1")
						.innerHTML = minutes;
				document.getElementById("second1")
						.innerHTML = seconds;

				// Show overtime output
				if (t < 0) {
					clearInterval(y);
					document.getElementById(
						"demo1"
					).innerHTML = "TIME UP";
					document.getElementById(
						"day1"
					).innerHTML = "20";
					document.getElementById(
						"hour1"
					).innerHTML = "5";
					document.getElementById(
						"minute1"
					).innerHTML = "300";
					document.getElementById(
						"second1"
					).innerHTML = "60";
				}
			}, 500);
	