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

	const mainMid = document.createElement('div');
	mainMid.classList.add('mainMid');
	main.appendChild(mainMid);
	const mainBot = document.createElement('div');
	mainBot.classList.add('mainBot');
	main.appendChild(mainBot);

	return bodyWrap;
};
document.body.appendChild(homepage());
export { homepage as default };