const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`; 

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `${today.toLocaleString()}`



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector( '.menu-toggle' );
    const menuCheckbox = document.getElementById('menu-toggle-checkbox');
    

    function toggleMenuButton(){
        if(window.innerWidth <= 500) {
            menuToggle.style.display = "block";
            
        }else{
            menuToggle.style.display = "none";
            menuCheckbox.checked = false;
        }
    }

    toggleMenuButton();
    window.addEventListener('resize', toggleMenuButton);
});



