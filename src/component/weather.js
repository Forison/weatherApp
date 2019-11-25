import fetchData from './fetchMain'
const myWeather = async () => {
	const url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=ccf997c34097cddfadc5cdaead93a77a";
	const data = await fetchData(url);
	console.log(data.main)
};
export { myWeather as default };