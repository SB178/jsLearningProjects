const body = document.querySelector('#body');
const randColor = () => { 
	let r = Math.random()*255;
	let g = Math.random()*255;
	let b = Math.random()*255;
	const allText = document.querySelectorAll('.text');
	if(r<150 || g <150 || b <150 ) { 
		for(let text of allText)
		{
			text.style.color = 'white';
		}
	}
	
	else { 
		for(let text of allText)
		{
			text.style.color = 'black';
		}
	}
	return `rgb(${r},${g},${b})`;
}

window.addEventListener('click',()=>(body.style.backgroundColor = randColor()));
