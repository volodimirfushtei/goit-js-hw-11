'use strict';
// main.js
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

// Функція для обробки події пошуку
function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById('search-input').value.trim();

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
    console.log('Empty query');
  }
}

// Додавання обробника події на кнопку пошуку
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', handleSearch);
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  // Do something…
});
