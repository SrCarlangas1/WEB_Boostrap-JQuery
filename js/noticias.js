//Función Para el scrool bar indicator
window.onscroll = function () { myFunction() };

//Funcion que sirve para cargar objetos JSON con el evento scroll
function myFunction() {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    $($('.news')[$('.news:visible').length]).css('display', 'block');
  }
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
  $.ajax({
    datatype: "jsonp",
    type: "GET",
    data: {},
    url: "https://tennis-warehouse.firebaseio.com/News/.json",
    success: function (data) {
      console.log(data);
      var html = "";
      var contador = 1;
      $.each(data, function (idx, item) {
        var contador = 1;
        //Añadimos las etiquetas para cada 2 objetos que pasen
        if (idx % 2 == 0) {
          html += '</br><div style="display:none" class="news row">';
        }
        html += '<div class="col-md-4">' +
          '<a href="pagina' + contador + '.html"></a>' +
          '<div class="thumbnail">' +
          '<div class="caption">' +
          '<div class="ribbon">' +
          '<span>' +
          '<span>' + item.Title + '</span>' +
          '</span>' +
          '</div>' +
          '<h3 class="text-align: center">' +
          '<b>' + item.Subtitle + '</b>' +
          '</h3>' +
          '<img src="' + item.Image + '" class="img-responsive">' +
          '</div>' +
          '<div class="caption">' +
          '<p class="text-justify">' + item.Description + '</p>' +
          '<p class="text-right">' +
          '<em>' + item.Date + '</em>' +
          '</p>' +
          '</div>' +
          '</div>' +
          '</div>';
        //Cerramos la etiqueta del div al final de cada 2 objetos en el JSON
        contador++;
        if (idx % 2 != 0) {
          html += '</div>';
        }
        
      });

      if (data.length % 2 != 0) {
        html += '</div>';
      }

      $('#container').append(html);

      for (var i = 0; i <= 2; i++) {
        $($('.news')[i]).css('display', 'block');
      }
    }
  });
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