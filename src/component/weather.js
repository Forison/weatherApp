import searcher from './searches';
import dom from './homepage';
const myWeather = async () => {
	const user = await searcher.byLocDefault();
	let location = user.name;
	dom.homepage(await searcher.byLoc(location));
};
export { myWeather as default };