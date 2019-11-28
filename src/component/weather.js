import searcher from './searches';
import dom from './homepage';
const myWeather = (async () => {
	const userLocation = await searcher.byLocDefault();
	dom.homepage(await searcher.byLoc(userLocation));
});
export { myWeather as default };