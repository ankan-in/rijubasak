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
