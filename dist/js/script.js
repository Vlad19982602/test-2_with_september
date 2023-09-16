import scrolling from './modules/pageup.js';


window.addEventListener('DOMContentLoaded', () => {

	scrolling('.pageup');
	const menu = document.querySelector('.header__wrapper'),
	menuItem = document.querySelectorAll('.header__wrapper-item'),
	hamburger = document.querySelector('.hamburger');

	if(hamburger) {
		hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger__active');
			menu.classList.toggle('header__active');
		});
	}

	if(menuItem) {
		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				hamburger.classList.toggle('hamburger__active');
				menu.classList.toggle('header__active');
			})
		})
	}
});

