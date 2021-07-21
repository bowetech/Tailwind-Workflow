const section = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

const options = {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`
}

const stickNav = function (entries) {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
}

const navObserve = new IntersectionObserver(stickNav, options);
navObserve.observe(section);


