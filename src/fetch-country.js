function fetchCountries (countryName) {

    //Якщо бекенд повернув від 2-х до 10-и країн, під тестовим полем відображається 
    //список знайдених країн. Кожен елемент списку складається з прапора та назви країни.

    //Якщо результат запиту - це масив з однією країною, в інтерфейсі відображається 
    //розмітка картки з даними про країну: прапор, назва, столиця, населення і мови.

    const url = `https://restcountries.com/v3.1/name/`;
    const searchFilter = '?fields=name,capital,population,flags,languages';
    return fetch(`${url}${countryName}${searchFilter}`).then(r => {return r.json();})
}

export {fetchCountries};