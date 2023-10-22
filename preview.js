console.log("preview.js 1")
const btns = document.getElementsByClassName('preview-btn');
console.log("preview.js 2")
for (const btn of btns){
  console.log("preview.js 3")
  btn.addEventListener("click", function onClick(){
    console.log("preview.js 4")
    const main = document.querySelector('.explorer');
    main.classList.add('active');
    console.log("preview.js 5")
  });
}
