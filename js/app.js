//warn
console.log(
    "%cWait!",
    "color: rgb(255, 218, 56); font-size: 50px; -webkit-text-stroke: black 1px;"
  );
  console.log(
    "%cPasting here anything might ruin your experience in this website!",
    "color: rgb(255, 218, 56); font-size: 20px; -webkit-text-stroke: black 1px;"
  );





const texts = ['Student' , 'Developer' , 'Programmer' , 'Hacker'];

let count = 0;
let index = 0;
let currenText = '';

let letter = '';



(function type() {

    if(count === texts.length) {
        count = 0;
    }
    currenText = texts[count];
    letter = currenText.slice(0, ++index);

    document.querySelector(".dynamic-text").textContent = letter;
    if(letter.length === currenText.length) {
        count++;
        index = 0;
    }
    
    setTimeout(type, 200);
}());



function fill() {

  var fillh = document.querySelector('.fillh');
  fillh.classList.add('animh');

 setInterval(() => {
    fillh.classList.remove('animh')
  }, 4100);

  var fillc = document.querySelector('.fillc');
  fillc.classList.add('animc');

 setInterval(() => {
    fillc.classList.remove('animc')
  }, 4100);

  var fillp = document.querySelector('.fillp');
  fillp.classList.add('animp');

 setInterval(() => {
    fillp.classList.remove('animp')
  }, 4100);

  var fillcs = document.querySelector('.fillCS');
  fillcs.classList.add('animCss');

 setInterval(() => {
    fillcs.classList.remove('animCss')
  }, 4100);
}