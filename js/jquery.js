//Función Para el scrool bar indicator
window.onscroll = function() {myFunction()};

function myFunction() {
 var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
 var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 var scrolled = (winScroll / height) * 100;
 document.getElementById("myBar").style.width = scrolled + "%";
}

//Función de Preloader de Página
window.onload = function(){
  var contenedor = document.getElementById('contenedor_carga');
  
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = '0';
}