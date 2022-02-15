let num = parseInt(prompt("Enter number the maximum no. :"));
let random = Math.floor(Math.random()*num)+1;
let guess = parseInt(prompt("Enter yout 1st guess :"));
let attempts=1;
while(parseInt(guess) !== random)
{
	attempts++;
	if(parseInt(guess)>random)
		guess = prompt("Too high! Enter new guess : ");
	else
		guess = prompt("Too low! Enter new guess : ");
	
	if(guess === 'quit') break;
}
	if(guess === 'quit')
	{
		alert(`U quit!`)
	}
	else
		{
			alert(`Total attempts u took to guess: ${attempts}`);
		}
