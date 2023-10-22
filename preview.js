console.log("preview.js")
const btns = document.getElementsByClassName('preview');
for (const btn of btns){
  btn.addEventListener("click", function onClick(){
    const main = document.getElementsByClassName('explorer');
    main.classList.add('active');
    console.log("preview.js: actived")
  });
}
