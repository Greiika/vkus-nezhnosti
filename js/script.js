// menu-burger

let menuBurger = document.querySelector('.header_menu-burger');
let menu = document.querySelector('.header_menu');

if (menuBurger) {
    menuBurger.addEventListener('click', () => {
        menuBurger.classList.toggle('active');
        menu.classList.toggle('active')
    })
}

// filter

let filter = document.querySelector('.catalog_filter-items');

let filterItems;
let filterArr;

if (filter) {
    filterItems = filter.querySelectorAll('.catalog_filter-item');
    filterArr = Array.from(filterItems);
    
    filterArr.forEach(filterItem => {
        filterItem.addEventListener('click', sortCard);
    })
    
    function sortCard(e) {
        for (let elem of filterArr) {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active');
            }
        }
        let clikedCard = e.target;
        clikedCard.classList.add('active');
    }
}

