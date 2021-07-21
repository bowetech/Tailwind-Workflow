
const slider = function () {
	const slides = document.querySelectorAll('.slide');
	const controlLeft = document.querySelector('.slider__btn--left')
	const controlRight = document.querySelector('.slider__btn--right')
	const dotIndicators = document.querySelector('.dots')

	let currentSlide = 0;
	const maxSlide = slides.length;

	// Hide container overflow
	//const slider = document.querySelector('.slider');
	//slider.style.overflow = 'hidden';

	const makeDots = () => {
		slides.forEach((s, i) => {
			dotIndicators.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
		})
	}

	const goToSlide = (slide) => {
		slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);

		console.log(currentSlide)
	}

	const activeDot = (slide) => {
		document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))

		document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
	}

	const nextSlide = () => {
		if (currentSlide === maxSlide - 1) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}
		goToSlide(currentSlide);
		activeDot(currentSlide);
	}

	const prevSlide = () => {
		if (currentSlide === 0) {
			currentSlide = maxSlide - 1;
		} else {
			currentSlide--;
		}
		goToSlide(currentSlide);
		activeDot(currentSlide);
	}

	const keyboardCtr = (e) => {
		if (e.key === 'ArrowLeft') prevSlide();
		if (e.key === 'ArrowRight') nextSlide();
	}

	const dotClicked = (e) => {
		if (e.target.classList.contains('dots__dot')) {
			const { slide } = e.target.dataset;
			goToSlide(slide)
			activeDot(slide);
		}
	}

	const init = function () {
		goToSlide(0);
		makeDots();
		activeDot(0);
	}

	init();

	controlRight.addEventListener('click', nextSlide);
	controlLeft.addEventListener('click', prevSlide);
	document.addEventListener('keydown', keyboardCtr)
	dotIndicators.addEventListener('click', dotClicked)

};
slider();