// JavaScript source code
//alert("Date & Time");

//alert(current_time);
/*Date() 

*/
	let current_time = new Date();
	let date_and_time = document.getElementById("date-and-time");
	date_and_time.innerHTML = `getDate() ${current_time.getDate()};<br>`;
	date_and_time.append(`getTime() ${current_time.getTime()};<br>`);
	//date_and_time.append(`getDay() ${current_time.getTime().toLocaleString("default", {weekday:"long"})};<br>`);
	//const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	
function tick_timer() {

	let current_time = new Date();
	if (document.getElementById("show-date").checked == true) {
		let yyyy = current_time.getFullYear();
		let MM = checkNumber(current_time.getMonth() + 1);
		let dd = checkNumber(current_time.getDate());

		let date_string = `${yyyy}.${MM}.${dd}`;
		let date = document.getElementById("date");
		date.innerHTML = date_string;
	}
	else { document.getElementById("date").innerHTML = "" }

	//document.getElementById("weekday").innerHTML = document.getElementById("show-weekday").checked ? current_time.toLocaleString("default", { weekday: "long" }) :"";

	document.getElementById("weekday").innerHTML = 	document.getElementById("show-weekday").checked ? current_time.toLocaleString("default", { weekday: "long" }) : ""; 

	let hh = checkNumber(current_time.getHours());
	let mm = checkNumber(current_time.getMinutes());
	let ss = checkNumber(current_time.getSeconds());


	let time_string = `${hh}:${mm}:${ss};<br>`;
	let time = document.getElementById("time");
	time.innerHTML = time_string;
	setTimeout(tick_timer, 1000); 
	//setTimeout(tick_timer,100);
}

function checkNumber(i) {
	return i < 10 ? "0" + i : i;
}

function start_timer() {


	let user_date_input = document.getElementById("user-date");
	let user_time_input = document.getElementById("user-time");
	let user_datetime_local_input = document.getElementById("user-datetime-local");

	let start_timer_button = document.getElementById("start-timer");

	let user_date = user_date_input.valueAsDate;
	let user_time = user_time_input.valueAsDate;
	//let user_datetime_local = user_datetime_local_input.valueAsDate;

	//document.getElementById("user-values-date").innerHTML = user_date;
	//document.getElementById("user-values-time").innerHTML = user_time;
	document.getElementById("user-values-datetime-local").innerHTML = user_datetime_local_input.value;
	document.getElementById("user-values-datetime-timestamp").innerHTML = user_datetime_local_input.valueAsNumber;
	//document.getElementById("user-datetime-local-values").innerHTML = user_datetime_local.value;
//document.getElementById("user-datetime-local-timestamp").innerHTML = new Date(user_datetime_local.value);
	//document.getElementById("user-datetime-local-timestamp").innerHTML = Math.trunc(user_datetime_local.valueAsNumber / 1000);

	if (start_timer_button.value === "Start" && user_date_input.value !== "" && user_time_input.value !== "") {

		start_timer_button.value = "Stop";
		user_date_input.disabled = user_time_input.disabled = user_datetime_local_input.disabled = true;
		countdown_timer();
	}
	else {
		start_timer_button.value = "Start";
		user_date_input.disabled = user_time_input.disabled = user_datetime_local_input.disabled = false;
	}
}

	function countdown_timer() {
		const SECONDS_IN_MINUTE = 60;
		const SECONDS_IN_HOUR = 3600;
		const SECONDS_IN_DAY = 86400;
		const SECONDS_IN_WEEK = 86400 * 7;
		const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365 + SECONDS_IN_HOUR * 6;
		const DAYS_IN_MONTH = 365 / 12;
		const SECONDS_IN_MONTH = DAYS_IN_MONTH * SECONDS_IN_DAY;

		let time_units = new Array(0, 0, 0, 0, 0, 0, 0);
		const time_unit_names = Array("years", "months", "week", "days", "hours", "minutes", "seconds");

		//let user_datetime = document.getElementById("user-datetime-local").valueAsNumber;
		//let current_time = new Date();
		//let timestamp = user_datetime - current_time; 
		//timestamp = Math.trunc(timestamp / 1000);

		//document.getElementById("differens").innerHTML = timestamp;//current_time.getMilliseconds();

		let user_datetime = +new Date(document.getElementById("user-datetime-local").value);
		let current_time = +new Date();
		let timezone_offset = new Date().getTimezoneOffset() / 60;
		//current_time += (timezone_offset * 3600000);
		//	console.log(`${current_time} ------ ${timezone_offset * 3600000}`);

		document.getElementById("current-timezone").innerHTML = `Current timezone: ${timezone_offset}`
		document.getElementById("user-timezone").innerHTML = `User timezone: ${document.getElementById("user-datetime-local").valueAsDate}`
		current_time = Math.floor(current_time / 1000);
		user_datetime = Math.floor(user_datetime / 1000);
		document.getElementById("current-timestamp").innerHTML = current_time;
		let timestamp = user_datetime - current_time;
		//timestamp = 
		let time_of_day = timestamp % SECONDS_IN_DAY;

		//timestamp = Math.trunc(timestamp / 1000);
		document.getElementById("differens").innerHTML = timestamp;
		////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////

		let years = time_units[0] = Math.floor(timestamp / SECONDS_IN_YEAR);
		console.log(`years:${years}-${time_units[0]}`);
		let display = document.getElementById("display");
		if (years != 0) {
			timestamp = (timestamp % (years * SECONDS_IN_YEAR));
			let years_unit = document.getElementById("years-unit");
			if (years_unit == null)
				display.prepend(createTimeBlock("years", years));
		}
		else removeTimeBlock("years");

		let months = time_units[1] = Math.floor(timestamp / SECONDS_IN_MONTH);
		if (months != 0) {
			timestamp = (timestamp % (months * SECONDS_IN_MONTH));
			let months_unit = document.getElementById("months-unit");
			if (months_unit == null) {
				let years_unit = document.getElementById("years-unit");
				//if(years_unit == null)display.app
			}
		}
		else removeTimeBlock("months");

		let weeks = time_units[2] = Math.floor(timestamp / SECONDS_IN_WEEK);
		if (weeks > 0) {
			timestamp = (timestamp % (weeks * SECONDS_IN_WEEK));
		}

		let days = time_units[3] = Math.floor(timestamp / SECONDS_IN_DAY);
		if (days > 0) {
			timestamp = (timestamp % (days * SECONDS_IN_DAY));
		}

		let hours = time_units[4] = Math.floor(time_of_day / SECONDS_IN_HOUR);
		if (hours > 0) {
			time_of_day = (time_of_day % (hours * SECONDS_IN_HOUR));
		}

		let minutes = time_units[5] = Math.floor(time_of_day / SECONDS_IN_MINUTE);
		if (minutes > 0) {
			time_of_day = (time_of_day % (minutes * SECONDS_IN_MINUTE));
		}

		let seconds = Math.floor(time_of_day);

		let debug_display = document.getElementById("display");
		console.log(debug_display.children.length);

		//for (let i = time_units - 3; i > 0; i--) {
		/*for (let i = 1; i <time_units.length - 2; i--) {
			if (document.getElementById(`${time_unit_names[i]}-unit`) == null)
			{
				let prev;

				for (let j = i; j > 0; j--)
				{
					prev = document.getElementById(`${time_unit_names[i]}-unit`);
					if (prev != null) break;
				}
				if (prev === null) {
					display.prepend(createTimeBlock(time_unit_names[i], time_units[i]))
				}
				else {
					//prev.parentElement.after(createTimeBlock(time_unit_names[i], time_units[i]));
				}
			}
		}*/
		for (let i = 1; i < time_units.length - 2; i++) {
			if (document.getElementById(`${time_unit_names[i]}-unit`) == null) {
				if (time_units[i - 1] === 0) {
					display.prepend(createTimeBlock(time_unit_names[i], time_units[i]));
				}
				else {
					let unit = document.getElementById(`${time_unit_names[i - 1]}-unit`);
					unit.parentElement.after(createTimeBlock(time_unit_names[i], time_units[i]));
				}
			}
			else {
				document.getElementById(`${time_unit_names[i]}-unit`).innerHTML = time_units[i];
			}
		}

		document.getElementById("hours-unit").innerHTML = hours;
		document.getElementById("minutes-unit").innerHTML = minutes;
		document.getElementById("seconds-unit").innerHTML = seconds;

		document.getElementById("time-units").innerHTML =
			`${years} years, ${months} monthes, ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

		if (document.getElementById("start-timer").value === 'Stop')
			setTimeout(countdown_timer, 1000);


		//setTimeout(countdown_timer, 1000);

	}

function createTimeBlock(name, value) {
	let time_block = document.createElement("div");
	time_block.className = "time-block";

	let unit = document.createElement("div");
	unit.id = `${name}-unit`;
	unit.className = "time-unit";
	unit.innerHTML = checkNumber(value);

	let marker = document.createElement("div");
	marker.id = `${name}-marker`;
	marker.className = "time-marker";
	marker.innerHTML = name;

	time_block.append(unit);
	time_block.append(marker);

	return time_block;
}
function removeTimeBlock(name) {
	let unit = document.getElementById(`${name}-unit`);
	if (unit != null) {
		let block = unit.parentElement;
		let display = block.parentElement;
		display.removeChild(block);
	}
}// JavaScript source code