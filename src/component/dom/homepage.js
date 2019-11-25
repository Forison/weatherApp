const homepage = () => {
	const bodyWrap = document.createElement('div');
	bodyWrap.classList.add('container-fluid');

	const bodyRow = document.createElement('div');
	bodyWrap.appendChild(bodyRow);
	bodyRow.classList.add('row');

	const main = document.createElement('main');
	main.classList.add('col-md-4', 'mx-auto', 'shadow-lg', 'mt-3');
	bodyRow.appendChild(main);

	const mainTop = document.createElement('div');
	mainTop.classList.add('mainTop');
	main.appendChild(mainTop);
	const mainTopLeft = document.createElement('div');
	const mainTopRight = document.createElement('div');
	mainTopLeft.classList.add('ml-auto', 'left');
	mainTopRight.classList.add('mr-auto', 'right');
	mainTop.appendChild(mainTopLeft);
	mainTop.appendChild(mainTopRight);

	const mainMid = document.createElement('div');
	mainMid.classList.add('mainMid');
	main.appendChild(mainMid);
	const mainBot = document.createElement('div');
	mainBot.classList.add('mainBot');
	main.appendChild(mainBot);

	const cloudCont = document.createElement('div');
	cloudCont.classList.add('container', 'cont-width');
	mainBot.appendChild(cloudCont);

	const cloudRow = document.createElement('div');
	cloudRow.classList.add('row', 'mt-2', 'mb-2');
	cloudCont.appendChild(cloudRow);

	const colOne = document.createElement('div');
	colOne.classList.add('col-md-3', 'p-0', 'shadow-lg', 'section');
	cloudRow.appendChild(colOne);
	const colTwo = document.createElement('div');
	colTwo.classList.add('col-md-3', 'p-0', 'shadow-lg', 'section');
	cloudRow.appendChild(colTwo);
	const colThree = document.createElement('div');
	colThree.classList.add('col-md-3', 'p-0', 'shadow-lg', 'section');
	cloudRow.appendChild(colThree);
	const colFour = document.createElement('div');
	colFour.classList.add('col-md-3', 'p-0', 'shadow-lg', 'section');
	cloudRow.appendChild(colFour);

	const input = document.createElement('input');
	input.classList.add('form-control', 'input-width', 'mx-auto');
	mainBot.appendChild(input);

	return bodyWrap;
};
document.body.appendChild(homepage());
export { homepage as default };