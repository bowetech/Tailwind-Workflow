const allSections = document.querySelectorAll('.card');

const revealSection = function (entries, observer) {
	const [entry] = entries;
	console.log(entry);

	if (!entry.isIntersecting) return

	entry.target.classList.remove('animate')
	observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});

allSections.forEach((section) => {
	sectionObserver.observe(section)
	section.classList.add('animate')
})