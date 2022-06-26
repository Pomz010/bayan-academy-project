// SEARCH BAR
const magnify = document.querySelector(".bi");
const searchBarContainer = document.querySelector("#search-bar-container");
const searchBar = document.querySelector("#search-bar");

//Hamburger UI
const hamburgerContainer = document.querySelector(".burger-container");
const line = document.querySelector(".lines");
const navToggle = document.querySelector(".nav__menu-container");
const displayToggle = document.querySelector(".display-toggle");

//CAROUSEL ELEMENTS
const selector = Array.from(document.querySelectorAll(".selector"));
const images = Array.from(document.querySelectorAll(".carousel .image-container"));
const firstImage = document.querySelector('.carousel div:first-child');
const carousel = document.querySelector('.carousel');
let lastImage = images[images.length - 1];
let left = -100;
let counter = 0;
let dotIndicator = 0;
const reset = setInterval(slideLeft, 3000);
const lastDotIndicator = selector.indexOf(selector[dotIndicator]);

// NEWS AND EVENTS TABS
const eventsTab = Array.from(document.querySelectorAll('.events__tab'));
const news_Tab = Array.from(document.querySelectorAll('.news__tab'));
const tabs = Array.from(document.querySelectorAll('.__tabs'));
const eventContainer = Array.from(document.querySelectorAll('.event__tab-container'));
const newsContainer = Array.from(document.querySelectorAll('.news__tab-container'));

// EVENT LISTENER FOR SEARCH BAR 
magnify.addEventListener("click", showBar);
searchBar.addEventListener("focusout", hideSearchBar);

// DISPLAY THE SEARCH BAR WHEN MAGNIFYING GLASS ICON IS CLICKED
function showBar() {
    searchBarContainer.classList.toggle("search-bar");
    searchBar.style.display = "inline-block";
    searchBar.focus();
}

// HIDE THE SEARCH BAR WHEN YOU CLICK OUTSIDE THE SEARCH BAR
function hideSearchBar() {
    searchBarContainer.classList.remove("search-bar");
    searchBar.style.display = "none";
}

//HAMBURGER MENU
//Animates hamburger menu when clicked
hamburgerContainer.addEventListener("click", animate);

//Function that will toggle classes to animate hamburger menu
function animate() {
    hamburgerContainer.classList.toggle("active");
    line.classList.toggle('burger');
    navToggle.classList.toggle('nav__menu-toggle');
}

// CAROUSEL    
function slideLeft(){
    //DOT INDICATOR 
    ++dotIndicator;
    // MOVES THE IMAGE TO THE LEFT EVERY INTERVAL TIME
    carousel.style.left = `${(left -= 100) + 100}vw`;

    // ADDS image-selected class TO dotIndicator TO IDENTIFY
    // WHICH IMAGE IS CURRENTLY ON DISPLAY
    selector[dotIndicator].classList.add('image-selected');

    // REMOVES dotIndicator class 'image-selected' on other dots
    for(let i = 0; i < selector.length; i++) {
        if(selector[i] != selector[dotIndicator]){
            selector[i].classList.remove('image-selected');
        }
    }

    // MOVES THE IMAGE FROM LAST IMAGE TO FIRST IMAGE
    if(selector.indexOf(selector[dotIndicator]) === 8 || selector.indexOf(selector[dotIndicator]) === 9){
        setTimeout(function(){
            left = 0;
            dotIndicator = -1;
        }, 3000);
    }
    counter++;
}

// ADDS CLICK EVENT FOR EACH TAB IN 'EVENTS SECTION'
eventsTab.forEach(eventTab);
function eventTab(active){
    active.addEventListener('click', selectEvent);
}

//DISPLAY EVENT ARTICLES WHEN EVENT TAB IS CLICKED
function selectEvent(e){
    const tabIndex = eventsTab.indexOf(e.target);
    console.log(e.target.classList.toggle('active-tab'));
    console.log(e.target);

    eventContainer[tabIndex].classList.toggle('display-tab');

    for(let i = 0; i < eventContainer.length; i++) {
        selectActive(i, tabIndex);
        showActive(i, tabIndex);
    }

    // FUNCTION THAT WILL REPLACE ACTIVE TAB WHEN CLICKED
    function selectActive(index, tabI){
        if(eventsTab.indexOf(eventsTab[index]) != tabI){
            eventsTab[index].classList.remove('active-tab');
        }
    }

    // FUNCTION THAT WILL REPLACE DISPLAYED EVENTS DEPENDING ON THE CATEGORY SELECTED
    function showActive(index, tabI){
        if(eventContainer.indexOf(eventContainer[index]) != tabI) {
            eventContainer[index].classList.remove('display-tab');
        }
    }
}

// ADDS CLICK EVENT FOR EACH TAB IN 'NEWS SECTION'
news_Tab.forEach(newsTab);
function newsTab(active){
    active.addEventListener('click', selectNews);
}

// DISPLAY NEWS NEWS ARTICLES WHEN NEWS TABS ARE CLICKED
function selectNews(e){
    const tabIndex = news_Tab.indexOf(e.target);
    e.target.classList.toggle('active-tab');

    newsContainer[tabIndex].classList.toggle('display__grid-tab');

    for(let i = 0; i < newsContainer.length; i++) {
        selectActive(i, tabIndex);
        showActive(i, tabIndex);
    }

    // FUNCTION THAT WILL REPLACE ACTIVE TAB WHEN CLICKED
    function selectActive(index, tabI){
        if(news_Tab.indexOf(news_Tab[index]) != tabI){
            news_Tab[index].classList.remove('active-tab');
        }
    }

    // FUNCTION THAT WILL REPLACE DISPLAYED NEWS DEPENDING ON THE CATEGORY SELECTED
    function showActive(index, tabI){
        if(newsContainer.indexOf(newsContainer[index]) != tabI) {
            newsContainer[index].classList.remove('display__grid-tab');
        }
    }
}