const fetchData = async (url) => {
	try {
		const response = await fetch(url, { mode: 'cors' });
		const dataObj = await response.json();
		return dataObj;
	} catch (error) {
		throw (error);
	}
};
export { fetchData as default };