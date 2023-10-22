console.log("preview.js")
const main = document.getElementsByClassName('explorer');
const btn = document.getElementsByClassName('preview');
function active{
  main.classList.add('active');
  console.log("preview.js: actived")
}
btn.addEventListener('click', active);
