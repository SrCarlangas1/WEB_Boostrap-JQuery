//Función Para el scrool bar indicator
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Función de Preloader de Página
window.onload = function () {
  var contenedor = document.getElementById('contenedor_carga');

  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
}

//Funcion Para cambiar de imagen cada 3s
var timer = setInterval(Funcion,2000)
var counter = 0;
var a = [];
a [0] = "img/anuncio1.jpg";
a [1] = "img/anuncio2.jpg"
a [2] = "img/anuncio3.jpg"

function Funcion(){
	$("#imagen").attr("src",a[counter]);
	counter++;
	if (counter==3) {
		counter=0;
	}
}