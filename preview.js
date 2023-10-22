console.log("preview.js")
function active(){
  const main = document.getElementsByClassName('explorer');
  const btn = document.getElementsByClassName('preview');
  main.classList.add('active');
  console.log("preview.js: actived")
}
btn.addEventListener('click', active);
