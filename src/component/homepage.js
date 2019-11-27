import Globe from './images/globe2.gif';
import ClearSky from './images/clear.gif';
import FewClouds from './images/fewClouds.gif';
import Overcast from './images/overcast.gif';
import Rainy from './images/rainy.gif';
import Broken from './images/broken.gif';
import Thunder from './images/thunder.gif';
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

		topTitle.innerHTML = `${data.name}`;
		topTitle2.innerHTML = `${data.main.temp} &#8451`;
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
		leftTitle3.innerHTML = `${data.name.slice(0, 3)}`;
		mainTopLeft.appendChild(leftTitle);
		mainTopLeft.appendChild(leftTitle2);
		mainTopLeft.appendChild(leftTitle3);

		const mainMid = document.createElement('div');
		const wrap1 = document.createElement('div');
		const wrap2 = document.createElement('div');
		const rainProb = document.createElement('h3');
		rainProb.classList.add('pt-1');
		const humidity = document.createElement('h3');
		humidity.classList.add('pt-1');
		const wind = document.createElement('h3');
		wind.classList.add('pt-1');
		let rP;
		data.main.humidity > 50 ? rP = 'High' : rP = 'Low';
		rainProb.innerHTML = `RAIN PROBABILITY: ${rP}`;
		wind.innerHTML = `WIND: ${data.wind.speed}`;
		humidity.innerHTML = `HUMIDITY: ${data.main.humidity}`;

		wrap1.appendChild(wind);
		wrap1.appendChild(humidity);
		wrap1.appendChild(rainProb);
		mainMid.appendChild(wrap1);
		mainMid.appendChild(wrap2);
		mainMid.classList.add('mainMid', 'pl-4', 'pt-1', 'shadow-lg');

		mainCont.appendChild(mainMid);
		const mainBot = document.createElement('div');
		mainBot.classList.add('mainBot');
		mainCont.appendChild(mainBot);

		const cloudCont = new Image();
		cloudCont.classList.add('container', 'cont-width');
		if (data.weather[0].description === 'clear sky') {
			cloudCont.src = ClearSky;
		} else if (data.weather[0].description === 'broken clouds') {
			cloudCont.src = Broken;
		} else if (data.weather[0].description === 'overcast clouds') {
			cloudCont.src = Overcast;
		} else if (data.weather[0].description === 'light intensity shower') {
			cloudCont.src = Globe;
		} else if (data.weather[0].description === 'light intensity shower rain') {
			cloudCont.src = Rainy;
		} else if (data.weather[0].description === 'scattered clouds') {
			cloudCont.src = FewClouds;
		} else {
			cloudCont.src = Globe;
		}

		mainBot.appendChild(cloudCont);

		const cloudRow = document.createElement('div');
		cloudRow.classList.add('row', 'mt-2', 'mb-2');
		cloudCont.appendChild(cloudRow);

		const colOne = document.createElement('div');
		const bottomImage = document.createElement('img');

		colOne.appendChild(bottomImage);
		colOne.classList.add('col-8', 'p-0', 'shadow-lg', 'section','mx-auto');
		cloudRow.appendChild(colOne);

		const input = document.createElement('input');
		input.classList.add('form-control', 'input-width', 'mx-auto');
		input.setAttribute('placeholder', 'Search By Country');
		mainBot.appendChild(input);

		input.addEventListener("keyup", async (e) => {
			if (event.keyCode === 13) {
				e.preventDefault();
				let location = input.value;
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