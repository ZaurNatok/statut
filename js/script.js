const chooseCity = document.querySelector('.information__link_city');
const chooseCityModal = document.querySelector('.modal_city');
const closeModal = document.querySelector('.close-button');
const citiesContainer = document.querySelector('.cities');
const cityChosen = document.querySelector('.information__link_city');

chooseCity.addEventListener('click', function() {
    chooseCityModal.classList.add('visible');

    const formCity = document.forms.city;
    const cityTitle = document.querySelector('.modal-city__search');

    formCity.addEventListener('submit', function(event){
        event.preventDefault();
        
        findCity(cityTitle.value);
    })
});

function findCity(city) {
   
    cities.forEach(element => {
        if(city === element) {
            citiesContainer.textContent = '';
            createCity(city);
        } 
    });
};

closeModal.addEventListener('click', function() {
    chooseCityModal.classList.remove('visible');
});

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 27 && chooseCityModal.classList.contains('visible')) {
        chooseCityModal.classList.remove('visible');
    }
})

chooseCityModal.addEventListener('click', function(event) {
    if(event.target.classList.contains('city__link')) {

        const elements = citiesContainer.childNodes;

        elements.forEach(element => {
            if(element.querySelector('a').classList.contains('cities__city_active')) {
                element.querySelector('a').classList.remove('cities__city_active');
            }
        })
        event.target.classList.toggle('cities__city_active');
        cityChosen.textContent = event.target.textContent;
        chooseCityModal.classList.remove('visible');
    }
});

function loadCities(cities) {
    cities.forEach(element => {
        createCity(element);
    });
}

function createCity(city) {
    const cityElement = document.createElement('li');
    const cityLink = document.createElement('a');

    cityElement.classList.add('cities__city');
    cityLink.classList.add('city__link');

    cityLink.setAttribute('href', '#');
    cityLink.textContent = city;

    cityElement.appendChild(cityLink);
    citiesContainer.appendChild(cityElement);
}

loadCities(cities);