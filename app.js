/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown1() {
    document.querySelector('#myDropdown1').classList.toggle('show');
}
  
function dropdown2() {
    document.querySelector('#myDropdown2').classList.toggle('show');
}
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.drop-button')) {
      var dropdowns = document.getElementsByClassName("drop-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
