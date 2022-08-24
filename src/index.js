import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('input'),
    list: document.querySelector('ul'),
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event){
    event.preventDefault();

    console.log(event.currentTarget);

    const searchCountry = event.currentTarget.elements.query.value;
    const url = 'https://restcountries.com/v3.1/name/' + searchCountry;
    //const options = {} ?

    const countryFetch = fetch(url)
    .then( r => {return r.json()})
    .then(console.log)
    .catch( error => console.log(error));
}