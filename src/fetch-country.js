function fetchCountries (countryName) {
    const url = `https://restcountries.com/v3.1/name/`;
    const searchFilter = '?fields=name,capital,population,flags,languages';
    return fetch(`${url}${countryName}${searchFilter}`).then(r => {return r.json();})
}

export {fetchCountries};