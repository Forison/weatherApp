import searcher from './searches';
const dom = (() => {
	const homepage = (data) => {
		const bodyWrap = document.createElement('div');
		bodyWrap.classList.add('container-fluid');

		const bodyRow = document.createElement('div');
		bodyWrap.appendChild(bodyRow);
		bodyRow.classList.add('row');

		const mainCont = document.createElement('main');
		mainCont.classList.add('col-md-4', 'mx-auto', 'shadow-lg', 'mt-3');
		bodyRow.appendChild(mainCont);

		const mainTop = document.createElement('div');
		mainTop.classList.add('mainTop');
		mainCont.appendChild(mainTop);
		const mainTopLeft = document.createElement('div');
		const mainTopRight = document.createElement('div');
		mainTopLeft.classList.add('ml-auto', 'left');
		mainTopRight.classList.add('mr-auto', 'right');
		mainTop.appendChild(mainTopLeft);
		mainTop.appendChild(mainTopRight);

		const topTitle = document.createElement('h1');
		topTitle.classList.add('text-center');
		const topTitle2 = document.createElement('h2');
		topTitle2.classList.add('text-center');
		const topTitle3 = document.createElement('h2');
		topTitle3.classList.add('text-center');

		topTitle.innerHTML = "Icon";
		topTitle2.innerHTML = `${data.main.temp}`;
		topTitle3.innerHTML = `${data.weather[0].description}`;
		mainTopRight.appendChild(topTitle);
		mainTopRight.appendChild(topTitle2);
		mainTopRight.appendChild(topTitle3);

		const leftTitle = document.createElement('h3');
		leftTitle.classList.add('text-center');
		const leftTitle2 = document.createElement('h4');
		leftTitle2.classList.add('text-center');
		const leftTitle3 = document.createElement('h5');
		leftTitle3.classList.add('text-center');

		const today = new Date();
		const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		const day = today.getUTCDay();
		const mm = today.getDate();
		const dd = today.getMonth();
		const yyyy = today.getFullYear();

		leftTitle.innerHTML = `${dayOfWeek[day]}`;
		leftTitle2.innerHTML = `${mm}-${dd}-${yyyy}`;
		leftTitle3.innerHTML = `${data.name},${data.name.slice(0, 3)}`;
		mainTopLeft.appendChild(leftTitle);
		mainTopLeft.appendChild(leftTitle2);
		mainTopLeft.appendChild(leftTitle3);

		const mainMid = document.createElement('div');
		const rainProb = document.createElement('h3');
		const humidity = document.createElement('h3');
		const wind = document.createElement('h3');
		let rP;
		data.main.humidity ? rP = 'High' : rP = 'Low';
		rainProb.innerHTML = `RAIN PROBABILITY: ${rP}`;
		wind.innerHTML = `WIND: ${data.wind.speed}`;
		humidity.innerHTML = `HUMIDITY: ${data.main.humidity}`;

		mainMid.appendChild(rainProb);
		mainMid.appendChild(humidity);
		mainMid.appendChild(wind);
		mainMid.classList.add('mainMid', 'pl-4', 'pt-1');

		mainCont.appendChild(mainMid);
		const mainBot = document.createElement('div');
		mainBot.classList.add('mainBot');
		mainCont.appendChild(mainBot);

		const cloudCont = document.createElement('div');
		cloudCont.classList.add('container', 'cont-width');
		mainBot.appendChild(cloudCont);

		const cloudRow = document.createElement('div');
		cloudRow.classList.add('row', 'mt-2', 'mb-2');
		cloudCont.appendChild(cloudRow);

		const colOne = document.createElement('div');
		colOne.classList.add('col-3', 'p-0', 'shadow-lg', 'section');
		cloudRow.appendChild(colOne);
		const colTwo = document.createElement('div');
		colTwo.classList.add('col-3', 'p-0', 'shadow-lg', 'section');
		cloudRow.appendChild(colTwo);
		const colThree = document.createElement('div');
		colThree.classList.add('col-3', 'p-0', 'shadow-lg', 'section');
		cloudRow.appendChild(colThree);
		const colFour = document.createElement('div');
		colFour.classList.add('col-3', 'p-0', 'shadow-lg', 'section');
		cloudRow.appendChild(colFour);

		const input = document.createElement('input');
		input.classList.add('form-control', 'input-width', 'mx-auto');
		mainBot.appendChild(input);

		input.addEventListener("keyup", async (e) => {
			if (event.keyCode === 13) {
				e.preventDefault();
				let location = input.value;
				console.log(`hello: ${location}`);
				// showToggle();
				bodyWrap.style.display = 'none';
				homepage(await searcher.byLoc(location));
			}

		});

		document.body.appendChild(bodyWrap);
		return bodyWrap;
	};


	return { homepage }

})();

export { dom as default };