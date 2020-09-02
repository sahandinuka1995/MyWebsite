var dot = document.getElementsByClassName("dot");
document.onmousemove = function(){
	var x = event.clientX * 100 / window.innerWidth + "%";
	var y = event.clientY * 100 / window.innerHeight + "%";

	for (var i = 0; i < 2; i++) {
		dot[i].style.left = x;
		dot[i].style.top = y;
		dot[i].style.transform = "translate(-"+x+",-"+y+")";
	}
}