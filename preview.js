console.log("preview.js")
document.getElementsByClassName('preview').addEventListener('click', () => {
  document.getElementsByClassName('explorer').classList.add('active');
  console.log("preview.js: active")
}); 
