// import functions and grab DOM elements
const button = document.getElementById('generate');
const result = document.getElementById('random-num');

//function getRandomIntInclusive(min, max) {
//min = Math.ceil(min);
//max = Math.floor(max);
//return Math.floor(Math.random() * (max - min + 1) + min);
//}; didnt work, not sure why
//console.log(getRandomIntInclusive);

const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

//I know the Build is asking us to generate a random number inclusive but I cant figure that out so I am going to move on and make my button work!

button.addEventListener('click', () => {
    //console.log('button was clicked');
    result.textContent = randomNumber;
});