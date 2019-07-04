var btnLeft = document.querySelector('#btnLeft');
var btnRight = document.querySelector('#btnRight');
var cont = 0;
var actualSlide = 0;
var container = document.querySelector('.container');
var quantSlides = container.children.length -1;
var slideCont;
var voltar = false;


function sliderRight() {
	cont -= 100;
	actualSlide += 1;
	if (actualSlide <= quantSlides) {
		slideCont = 'translateX(' + cont + 'vw)';
		for(var i = 0; i <= quantSlides; i++) {
			container.children[i].style.transform = slideCont;
		};
		console.log(actualSlide);
	} else {
		console.log('fim do slider');
		cont = parseInt('-' + quantSlides + 0 + 0);
		actualSlide = quantSlides;
		console.log(actualSlide);
		console.log(cont);
	}
};

function sliderLeft() {
	cont += 100;
	actualSlide -= 1;
	if (actualSlide >= 0) {
		slideCont = 'translateX(' + cont + 'vw)';
		for(var i = 0; i <= quantSlides; i++) {
			container.children[i].style.transform = slideCont;
		};
		console.log(actualSlide);
	} else {
		console.log('início do slider');
		cont = 0;
		actualSlide = 0;
		console.log(actualSlide);
	}
};


btnRight.addEventListener('click', sliderRight);
btnLeft.addEventListener('click', sliderLeft);


function automateSlides() {
	if (actualSlide === 0) {
		voltar = false;
	};

	if (voltar !== false) {
		sliderLeft();
		console.log('voltar = ' + voltar + ' - sliderLeft');
	} else {
		sliderRight();
		console.log('voltar = ' + voltar + ' - sliderRight');

		if (actualSlide >= quantSlides) {
			voltar = true;
		};
	};
}

setInterval(automateSlides, 5000);