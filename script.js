//Array.from - to transform navigation-button list to an array
//forEach - look through the array items and attached to them onClick event handler
Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
  //attaching onClick event
  item.onclick = () => {
    //DOM navigation
    item.parentElement.parentElement.classList.toggle('active');
  }
})