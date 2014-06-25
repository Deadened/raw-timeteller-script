// Date & Time
function addZero(i) {
	if (i<10) {
		i="0" + i;
	}
    return i;
}
function clock() {
	var today = new Date();
	var year=today.getFullYear();
	var month=addZero(today.getMonth());
	var day=addZero(today.getDate());
	var hour=addZero(today.getHours());
	var minute=addZero(today.getMinutes());
	var second=addZero(today.getSeconds());
	var offset=today.getTimezoneOffset();
	document.getElementById("date").innerHTML = month + "." + day + "." + year;
	document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second + "  _(" + offset + ")";
	t=setInterval(function(){clock()},1000);
}
