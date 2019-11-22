import anime from 'animejs';

const animator = () => {
	return anime({
		targets: '.mainTop',
		translateX: 250,
		rotate: '1turn',
		backgroundColor: '#FFF',
		duration: 800
	});
};

export { animator as default };