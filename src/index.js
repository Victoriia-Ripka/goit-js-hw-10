import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetch-country';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('input'),
  list: document.querySelector('ul'),
  info: document.querySelector('div'),
};

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

//функія обробки інпуту та пошуку країни
function onInput(event) {
  event.preventDefault();
  const searchCountry = event.target.value.trim();

  //очищення форми, якщо користувач видлив пошуковий запис
  if(searchCountry == '') {
    refs.info.innerHTML = '';
  } else {
  //виведення даних
    fetchCountries(searchCountry)
    .then(renderCountryCard)
    .catch(onFetchError)
    // .finally(() => refs.info.reset())  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  
  }
}

//функція обробки непрвильного вводу назви країни
function onFetchError() {
  Notiflix.Notify.failure('Ooops, there is no contry with that name');
}

//створення нової карочки для країни
function renderCountryCard(country) {
  const markup = country.map(({name, capital, population, flags, languages}) => {
    return `<p>
    <img src="${flags.svg}" alt="${name}" class="info__img"> <span class="info__title">${name.official}</span>
  </p>
  <p class="info__text"><span>Capital:</span> ${capital}</p>
  <p class="info__text"><span>Population:</span> ${population}</p>
  <p class="info__text"><span>Language:</span> ${Object.values(languages)}</p>`
  }).join('');

  //очищення попееднього та додавання нового списку
  refs.info.innerHTML = '';
  refs.info.insertAdjacentHTML('afterbegin', markup);
}