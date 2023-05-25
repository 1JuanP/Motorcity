var slideIndex = 0;
var timer;

function mostrarSlide() {
	var slides = document.getElementsByClassName("slide");
	var botones = document.getElementsByClassName("boton");
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove("activo");
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex-1].classList.add("activo");
	timer = setTimeout(mostrarSlide, 5000);
}

function avanzarSlide(n) {
	clearTimeout(timer);
	slideIndex += n;
	mostrarSlide();
}

function cambiarSlide(n) {
	clearTimeout(timer);
	slideIndex = n;
	mostrarSlide();
}

function mostrarFecha() {
	var fechaActual = new Date();
	var dia = fechaActual.getDate();
	var mes = fechaActual.getMonth() + 1;
	var anio = fechaActual.getFullYear();
	var fechaCompleta = dia + '/' + mes + '/' + anio;

	document.getElementById('fecha').textContent = fechaCompleta;
}

window.onload = function() {
	mostrarSlide();
	mostrarFecha();
};
