const close = document.querySelector('#close');
const navbar = document.querySelector('.navBarShown');
let counter = 0;
//meet link de @subhro https://meet.google.com/emk-mdyb-yvy
// console.log(close);
// close.addEventListener("click",(e)=>{
// 	console.log(e.target);
// 	e.stopPropagation();
// })
let deg=0;
let closeNav = function(close) {
	console.log(close.children[0]);
	deg+=180;
	close.children[0].style.transition= "all 0.4s ease-in-out -0.2s";
    close.children[0].style.transform = `rotate(${deg}deg)`; 
	close.children[0].innerText="menu";	
}
let openNav = function(close) {
	console.log(close.children[0]);
	deg-=180;
	close.children[0].style.transition= "all 0.4s ease-in-out -0.2s";
	close.children[0].style.transform = `rotate(${deg}deg)`; 
	close.children[0].innerText="close";
}

close.addEventListener("click",function(){	
	navbar.classList.toggle('navBarHidden');
	if(counter++ & 1)
	{
		openNav(this);
	}
		
	else
	{
		closeNav(this);
	}
		
})