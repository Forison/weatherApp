import searcher from './searches';
import dom from './homepage';
const myWeather = (async () => {
	const userLocation = await searcher.byLocDefault();
	dom.homepage(await searcher.byLoc(userLocation));
	console.log(process.env.APP_ID)
});
export { myWeather as default };