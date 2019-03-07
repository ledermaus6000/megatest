// specify targets i.e. the content of the dropdown buttons
const targets = {
  first: 'dropdown1',
  second: 'dropdown2',
  third: 'dropdown3'
}

const showElements = id => {
  hideAllDropdowns();
  const target = targets[id];
  document.querySelector('#'.concat(target)).classList.toggle('show');
}

const hideAllDropdowns = () => {
  buttons.forEach(button => {
    if(button.classList.contains('hover')){
      button.classList.remove('hover');
    }
  });
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
    if(!button.classList.contains('.hover')){
      button.classList.toggle('hover');
    }
  });
  
})


// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) {
  if (!event.target.matches('.drop-button')) {
    hideAllDropdowns();
  }
} 

