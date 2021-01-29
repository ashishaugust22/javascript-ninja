const apikey = "167580af3d9dd661e5ca303bf3c5123e";
const searchApi = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}`; // &q=${cityName}
const getWeatherApi = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}`; // &id=${cityName}

let foundCity = {};
let weather = {};

const typeAheadSelector = '.type-ahead';
const weatherPlaceholderSelector = '.weather-placeholder';
const typeAheadPlaceholderSelector = '.type-ahead-suggestion';
const typeAheadSuggestionSelector = '.type-ahead-suggestion';


let debounceId;


(function init () {
    bindFocusLost();
    bindInputKeyPress();
    bindInputFocused();
})();

function getCachedCities () {
    const cachedCities = localStorage.getItem('cachedCities') || '[]';
    return JSON.parse(cachedCities);
}


function bindInputKeyPress () {
    const typeAheadNode = document.querySelector(typeAheadSelector);
    bindEvent(typeAheadNode, 'keyup', function (e) {
        const searchTerm = e.target.value;
        getCities(searchTerm);
    });
}

function bindInputFocused () {
    const typeAheadNode = document.querySelector(typeAheadSelector);
    bindEvent(typeAheadNode, 'focus', function () {
        renderCachedCities(getCachedCities());
    });
}


function getCities (cityName) {
    if (debounceId) {
        clearTimeout(debounceId);
    }
    debounceId = setTimeout(() => {
        debounceId = null;
        const url = `${searchApi}&q=${cityName}`;
        fetch(url)
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                } else {
                    throw Error;
                }
            })
            .then(data => {
                foundCity = { name: data.name, id: data.id };
                renderSuggest();
            })
            .catch(err => console.log('Not Found'));
    }, 700);
}

function bindClickOnSuggestion (suggestionsNode) {
    bindEvent(suggestionsNode, 'click', getWeatherByCityId);
}

function getWeatherByCityId () {
    const url = `${getWeatherApi}&id=${foundCity.id}`;
    fetch(url)
        .then(res => {
            if (res.status == 200) {
                return res.json();
            } else {
                throw Error;
            }
        })
        .then(data => {
            weather = data;
            cacheCityNames();
            renderWeather();
        })
        .catch(err => console.log('Not Found'));
}

function appendChild (parent, child) {
    parent.appendChild(child);
}


function cacheCityNames () {
    let cachedCities = localStorage.getItem('cachedCities') || `[]`;
    cachedCities = JSON.parse(cachedCities);
    if (!cachedCities.filter(city => city.id === foundCity.id).length) {
        cachedCities.push(foundCity);
    }
    localStorage.setItem('cachedCities', JSON.stringify(cachedCities));
    renderCachedCities(cachedCities);
}

function bindFocusLost () {
    const typeAheadNode = document.querySelector(typeAheadSelector);
    bindEvent(typeAheadNode, 'blur', function () {
        setTimeout(() => {
            renderCachedCities([]);
        }, 1000);
    });
}

function bindEvent (node, eventType, callback) {
    node.addEventListener(eventType, callback);
}


function renderSuggest () {
    const typeAheadPlaceholder = document.querySelector(typeAheadPlaceholderSelector);
    typeAheadPlaceholder.innerHTML = '';
    const suggestions = document.createElement('div');
    suggestions.classList.add('suggestions');
    suggestions.innerHTML = foundCity.name;
    appendChild(typeAheadPlaceholder, suggestions);
    bindClickOnSuggestion(suggestions);
}

function renderWeather () {
    const weatherPlaceholder = document.querySelector(weatherPlaceholderSelector);
    weatherPlaceholder.innerHTML = JSON.stringify(weather);
    console.log(weather);
}

function renderCachedCities (cachedCities) {
    const typeAheadPlaceholder = document.querySelector(typeAheadPlaceholderSelector);
    typeAheadPlaceholder.innerHTML = '';
    const suggestions = document.createElement('div');
    suggestions.classList.add('suggestions');
    cachedCities.forEach(city => {
        const citySuggestionDiv = document.createElement('div');
        citySuggestionDiv.innerHTML = city.name;
        appendChild(typeAheadPlaceholder, citySuggestionDiv);
        bindEvent(citySuggestionDiv, 'click', function () {
            console.log('here');
            foundCity = city;
            getWeatherByCityId();
        });
    });
}