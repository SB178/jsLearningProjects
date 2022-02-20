const body = document.querySelector('#body');
let randColor = () => { 
	let r = Math.random()*255;
	let g = Math.random()*255;
	let b = Math.random()*255;
	const h1 = document.querySelector('h1');
	const h4 = document.querySelector('h4');
	if(r<150 || g <150 || b <150 ) { 
		h1.style.color = 'white';
		h4.style.color = 'white';
	}
	else { 
		h1.style.color = 'black';
		h4.style.color = 'black';
	}
	return `rgb(${r},${g},${b})`;
}

window.addEventListener('click',()=>(body.style.backgroundColor = randColor()));
