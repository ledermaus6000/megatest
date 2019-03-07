// specify targets i.e. the content of the dropdown buttons
const targets = {
  first: 'dropdown1',
  second: 'dropdown2'
}

const showElements = id => {
  hideAllDropdowns();
  const target = targets[id];
  document.querySelector('#'.concat(target)).classList.toggle('show');
}

const hideAllDropdowns = () => {
  const dropdowns = document.querySelectorAll('.drop-content');
    dropdowns.forEach(dropdown => {
      if(dropdown.classList.contains('show')){
        dropdown.classList.remove('show');
      }
    });
}

const buttons = document.querySelectorAll('.drop-button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', function(){
    showElements(button.id);
  });
})


// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
  if (!event.target.matches('.drop-button')) {
    hideAllDropdowns();
  }
} 

