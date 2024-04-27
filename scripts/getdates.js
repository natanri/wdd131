const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`; 

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.textContent = `${today.toLocaleString()}`