const navbar = document.querySelector('.navBarShown');
const nonNavBar = document.querySelector('.nonNavBar');
const allMaterialIcons = document.querySelectorAll('.material-icons');
document.querySelectorAll(".material-icons")[2].classList.add('navBarActive');
document.querySelectorAll(".navBarContentText")[2].classList.add('navBarActive');
document.querySelectorAll(".navBarContent")[2].classList.add('navBarActiveWrapper');
for(let materialicons of allMaterialIcons)
{
	materialicons.style.fontSize=('1.5vw');
}
let navBarCounter = 0;
let navBardeg=0;
document.querySelector("#nonNavBarSortDropper").style.fontSize="1.2vw";
let closeNav = function(close) {

	navBardeg+=180;
	close.children[0].style.transition= "all 0.4s ease-in-out ";
    close.children[0].style.transform = `rotate(${navBardeg}deg)`; 
	close.children[0].innerText="menu";	
	navbar.style.width = "3.9vw";
	nonNavBar.style.width = "96.1vw";
	nonNavBar.style.transition= "all 0.4s ease-in-out ";
}
let openNav = function(close) {
	navBardeg-=180;
	close.children[0].style.transition= "all 0.4s ease-in-out ";
	close.children[0].style.transform = `rotate(${navBardeg}deg)`; 
	close.children[0].innerText="close";
	navbar.style.width = "16vw";
	nonNavBar.style.width = "84vw";
	nonNavBar.style.transition= "all 0.4s ease-in-out ";

}
const close = document.querySelector('#close');
close.addEventListener("click",function(){	
	navbar.classList.toggle('navBarHidden');
	if(navBarCounter++ & 1)
	{
		openNav(this);
	}
		
	else
	{
		closeNav(this);
	}
		
})
let generateReportCounter = 0;
let generateReportDeg=0;
let allOption=document.querySelectorAll(".nonNavBarContentSmallDataTypeOption");

let generateReportOptionCounter = -1;

const generateReportControl = (e) => 
{	generateReportOptionCounter=e;
	if(parseInt(generateReportOptionCounter) != -1)
	{
		document.querySelector("#generateReportLabel").innerText = document.querySelectorAll(".nonNavBarContentSmallDataTypeOption")[generateReportOptionCounter].innerText;
		closeGenerateReport();
	}
}

const openGenerateReport = function()
{

	document.querySelectorAll('.nonNavBarContentSmallBackground')[2].style.height = "10vw";
	
	generateReportDeg+=180;
	
	document.querySelector('#generateReport').style.transform = `rotate(${generateReportDeg}deg)`; 
	document.querySelector('#generateReport').style.marginTop = `2vw`;
	
	document.querySelector(".nonNavBarContentSmallDataTypeOptionWrapper").style.opacity="1";
	document.querySelector(".nonNavBarContentSmallDataTypeOptionWrapper").style.transition= "all 0.4s ease-in-out";
	
	document.querySelectorAll('.nonNavBarContentSmallBackground')[2].style.transition= "all 0.4s ease-in-out ";
	
	for(let option of allOption)
	{
		option.style.pointerEvents = "auto";
	}

	document.querySelector("#lastMonth").addEventListener("click", function(){

		if(generateReportOptionCounter != 0)
		{
			generateReportOptionCounter = 0;
			generateReportControl(0);
		}
	})
	
	
	document.querySelector("#lastYear").addEventListener("click", function(){
		if(generateReportOptionCounter != 1)
		{
			generateReportControl(1);
		}
		
	})
	

	document.querySelector("#Custom").addEventListener("click", function(){
		if(generateReportOptionCounter != 2)
		{
			generateReportControl(2);
		}
		
	})
	generateReportCounter++;
}

 const closeGenerateReport = function()																	//closeGenerateReport
{
	document.querySelectorAll('.nonNavBarContentSmallBackground')[2].style.height = "5.5vw";
	generateReportDeg-=180;
	document.querySelector('#generateReport').style.transform = `rotate(${generateReportDeg}deg)`;
	document.querySelector('#generateReport').style.marginTop = `2vw`;
	document.querySelector(".nonNavBarContentSmallDataTypeOptionWrapper").style.opacity="0";
	document.querySelector(".nonNavBarContentSmallDataTypeOptionWrapper").style.transition= "all 0.4s ease-in-out";
	document.querySelectorAll('.nonNavBarContentSmallBackground')[2].style.transition= "all 0.4s ease-in-out ";
	document.querySelector(".nonNavBarContentSmallDataTypeOption").style.pointerEvents = "none";

	for(let option of allOption)
	{
		option.style.pointerEvents = "none";
	}
	generateReportCounter++;
	// console.log(generateReportCounter);
}

let generateReport = document.querySelector("#generateReport");

generateReport.addEventListener('click',function(){
	if(generateReportCounter & 1){
			closeGenerateReport();
		}

	else{
			openGenerateReport();
	}
})

