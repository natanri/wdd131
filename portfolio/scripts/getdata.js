document.addEventListener("DOMContentLoaded", function(){
    const year = document.getElementById("currentyear");
    const today = new Date();
    year.innerHTML = `${today.getFullYear()}`; 

    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = `${today.toLocaleString()}`
});
