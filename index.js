// const colors = ["green", "red", "blue", "rgba(255, 0, 0, 0.2)", "rgb(255, 165, 0)", "#7BFFE1"]
const hex = [0, 1, 2, 3, 4, 5, 6,7, 8, 9, "A", "B", "C", "D", "E", "F"];
let str = ['#'];



const button = document.querySelector('.button');
const color = document.querySelector('.color')




getRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
}

getHexColor = () => {
  for (let i = 0; i < 6; i++) {
   str.push(hex[getRandomNumber(hex.length - 1)]);
  }
  newColor = str.join("")
  return(newColor);
 
}



button.addEventListener('click', () => {
newColor = getHexColor();
document.querySelector('.container').style.backgroundColor = newColor;
str = ["#"];
document.querySelector('.color').innerHTML = newColor;

})