import fetchData from './fetchMain';

const searcher = (() => {
	const byLoc = async (location) => {
		try {
			const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=ccf997c34097cddfadc5cdaead93a77a`;
			const data = await fetchData(url);
			if (data.cod === '404') {
				alert("info not available at the moment");
				window.location.reload();
			}
			return data;
		} catch (error) {
			throw (error);
		}
	};
	const byLocDefault = async () => {
		try {
			let locator = 'https://extreme-ip-lookup.com/json/';
			const userData = await fetchData(locator);
			return userData.country;
		} catch (error) {
			throw (error);
		}
	};
	return { byLoc, byLocDefault };
})();
export { searcher as default };