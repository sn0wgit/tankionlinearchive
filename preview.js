console.log("preview.js")
function active(){
  const main = document.getElementsByClassName('explorer');
  main.classList.add('active');
  console.log("preview.js: actived")
}
const btn = document.getElementsByClassName('preview');
btn.addEventListener('click', active);
