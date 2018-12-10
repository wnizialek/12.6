var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');
var capitalList = document.getElementById('capitals');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);

    function showCountriesList(resp) {
        countriesList.innerHTML = '';
        capitalList.innerHTML = '';
        resp.forEach(function(item){
            var liEl = document.createElement('li');
            var liCap = document.createElement('li');
            liEl.innerText = item.name;
            liCap.innerText = item.capital;
            countriesList.appendChild(liEl);
            capitalList.appendChild(liCap);
        });
    }
}

