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
