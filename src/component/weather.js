import searcher from './searches';
const myWeather = async () => {
	const data = await searcher.byLoc('Germany');
	console.log(data)
};
export { myWeather as default };