document.addEventListener("DOMContentLoaded", function(){
    const year = document.getElementById("currentyear");
    const today = new Date();
    year.innerHTML = `${today.getFullYear()}`; 

    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = `${today.toLocaleString()}`
        

    const menuToggle = document.querySelector( '.menu-toggle' );
    const menuCheckbox = document.getElementById('menu-toggle-checkbox');
        

    function toggleMenuButton(){
        if(window.innerWidth <= 650) {
            menuToggle.style.display = "block";
            
        }else{
            menuToggle.style.display = "none";
            menuCheckbox.checked = false;
        }
    }

    toggleMenuButton();
    window.addEventListener('resize', toggleMenuButton);
    



    const temples = [
        {
        templeName:"Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add more temple objects here...
    ];


    function createTemplateCard(temples){
        const container = document.querySelector(".container")
        container.innerHTML = "";
        temples.forEach(temple =>{
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedicated = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(img);

            document.querySelector(".container").appendChild(card)
        });    
    }

  
    createTemplateCard(temples);

    const oldtemples = document.querySelector("#old");
    const newtemples = document.querySelector("#new");
    const largetemples = document.querySelector("#large");
    const smalltemples = document.querySelector("#small");
    const xclose = document.querySelector('#x-close');

    let currentFilter = null;

    oldtemples.addEventListener('click', () => {
        event.preventDefault();
        currentFilter = "old";
        const oldTemplesList = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0].trim());
            return year < 1900;
        });
        createTemplateCard(oldTemplesList);
    });

    newtemples.addEventListener('click', () => {
        event.preventDefault();
        currentFilter = "new";
        const newTemplesList = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(",")[0].trim());
            return year >= 2000;
        });
        createTemplateCard(newTemplesList);
    });

    largetemples.addEventListener('click', () => {
        event.preventDefault();
        currentFilter = "large";
        const largeTemplesList = temples.filter(temple => temple.area > 90000);
        createTemplateCard(largeTemplesList);
    }); 
    smalltemples.addEventListener('click', () => {
        event.preventDefault();
        currentFilter = "small";
        const smallTemplesList = temples.filter(temple => temple.area < 10000);
        createTemplateCard(smallTemplesList);
    });

    xclose.addEventListener('click', (event) => {
        event.preventDefault();
        menuCheckbox.checked = false;
        if (currentFilter) {
            switch (currentFilter) {
                case "old":
                    oldtemples.click();
                    break;

                case "new":
                    newtemples.click();
                    break;

                case "large":
                    largetemples.click();
                    break;

                case "small":
                    smalltemples.click();
                    break;
            }
        }else{
            createTemplateCard(temples)
        }
    });
});




