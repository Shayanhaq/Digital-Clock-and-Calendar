setInterval(() => {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	
	document.getElementById("hour").innerText = hour.toString().padStart(2, '0');
	document.getElementById("minute").innerText = minute.toString().padStart(2, '0');
	document.getElementById("second").innerText = second.toString().padStart(2, '0');
	document.getElementById("date").innerText = day;
	document.getElementById("month").innerText = month;
	document.getElementById("year").innerText = year;
}, 1000);