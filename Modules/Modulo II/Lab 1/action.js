function rotate()
{
	//alert('rotate');

	var dvP1 = document.getElementsByClassName("left");
	var dvP2 = document.getElementsByClassName("right");
	var dvP3 = document.getElementsByClassName("footer");

	var text1 = dvP1[0].innerText;
	var text2 = dvP2[0].innerText;
	var text3 = dvP3[0].innerText;
	
	dvP1[0].innerText = text3;
	dvP2[0].innerText = text1;
	dvP3[0].innerText = text2;

}