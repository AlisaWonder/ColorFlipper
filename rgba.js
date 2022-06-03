const button = document.querySelector('.button');
str = ['RGB','(', ')'];


getRandomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
}

getRGBColor = () => {
  for (let i = 0; i < 3; i++) {
    str.push(getRandomNumber(255));
    console.log(str)
   }
   newColor = str[0] + str[1] + str[3] + ', ' + str[4] + ', ' + str[5] + str[2];
   console.log(newColor);
   return(newColor)

}

button.addEventListener('click', () => {
  newColor = getRGBColor();
  document.querySelector('.container').style.backgroundColor = newColor;
  str = ['RGB','(', ')'];
  document.querySelector('.color').innerHTML = newColor;
  
  })