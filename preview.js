function addActive() {
  console.log("preview.js 4S");
  const main = document.querySelector('.explorer');
  main.classList.add('active');
  console.log("preview.js 4E");
}
const btns = document.getElementsByClassName('preview-btn');
if (btns.length == 0){
  console.log("preview.js IF");
  console.log(btns);
  /*btns.onclick = function() {
    console.log("preview.js 3");
    addActive();
  };*/
  btns.addEventListener("onmouseover", addActive);
  console.log("preview.js 5");
}
else{
  console.log("preview.js ELSE");
//for (let i = 0; i < btns.length; i++) {
  for (var i in btns) {
    console.log(btns[i]);
    console.log("preview.js 3 [" + i + "]");
    btns[i].addEventListener("mousedown", addActive);
    console.log("preview.js 5 [" + i + "]");
  }
}
