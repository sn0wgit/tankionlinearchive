console.log("preview.js")
const btn = document.getElementsByClassName('preview');
function active(){
  const main = document.getElementsByClassName('explorer');
  main.classList.add('active');
  console.log("preview.js: actived")
}
btn.addEventListener("click", active);
