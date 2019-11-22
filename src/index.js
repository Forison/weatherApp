import './style.css';

const main = () => {
	let element = document.createElement('h1');
	element.innerHTML = 'hello world';
	return element;
}
document.body.appendChild(main());