//My
/*console.log("preview.js 1");
const btns = document.getElementsByClassName('preview-btn');
console.log("preview.js 2");
for (var i = 0 ; i < btns.length; i++){
  console.log("preview.js 3");
  btns[i].addEventListener("click", function onClick(){
    console.log("preview.js 4");
    const main = document.querySelector('.explorer');
    main.classList.add('active');
    console.log("preview.js 5");
  });
}*/
//ChatGPT (1)
/*const btns = document.getElementsByClassName('preview-btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (function(index) {
    return function onClick() {
      const main = document.querySelector('.explorer');
      main.classList.add('active');
      console.log("Button " + index + " clicked");
    };
  })(i));
}*/
//ChatGPT (1) + me
/*const btns = document.getElementsByClassName('preview-btn');
console.log("preview.js 1");
for (let i = 0; i < btns.length; i++) {
  console.log("preview.js 1 [" + i + "]");
  btns[i].addEventListener("click", (function(i) {
    return function makeActive() {
      const main = document.querySelector('.explorer');
      console.log("Button " + i + " clicked");
      main.classList.add('active');
    };
  })(i));
}*/
//ChatGPT (2)
/*const btns = document.getElementsByClassName('preview-btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function onClick() {
    const main = document.querySelector('.explorer');
    main.classList.add('active');
  });
}*/
//ChatGPT (2) + me
console.log("preview.js 1");
const btns = document.getElementsByClassName('preview-btn');
console.log("preview.js 2");
console.log(btns.length);
if (btns.length == 0){
  console.log("preview.js IF");
  console.log("preview.js 3");
  btns.addEventListener("click", function onClick() {
    const main = document.querySelector('.explorer');
    main.classList.add('active');
    console.log("preview.js 4");
  });
  console.log("preview.js 5");
}
else{
  console.log("preview.js ELSE");
  for (let i = 0; i < btns.length; i++) {
    console.log("preview.js 3E [" + i + "]");
    btns[i].addEventListener("click", function onClick() {
      const main = document.querySelector('.explorer');
      main.classList.add('active');
      console.log("preview.js 4E (" + i + ")");
    });
    console.log("preview.js 5E [" + i + "]");
  }
}
