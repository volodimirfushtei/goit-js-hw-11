'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

function handleSearch(event) {
  event.preventDefault();
  const formElement = document.getElementById('search-form');
  const query = document.querySelector('#search-input').value.trim();
  if (query !== '') {
    fetchImages(query)
      .then(data => {
        if (data && data.hits) {
          renderImages(data.hits);
        } else {
          console.log('No images found');
        }
      })
      .catch(error => console.error('Error searching images:', error));
  } else {
    console.log(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }
  formElement.reset();
}
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', handleSearch);
