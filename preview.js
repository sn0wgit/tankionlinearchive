document.addEventListener("DOMContentLoaded", function() {
  function addActive() {
    const main = document.querySelector('.explorer');
    main.classList.add('active');
    console.log("preview.js: .preview-btn pressed");
  }
  const btns = document.getElementsByClassName('preview-btn');
  for (var i in btns) {
      btns[i].addEventListener("click", addActive);
    }
});
