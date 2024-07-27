'use strict';
import iconErr2 from './img/bi_x-octagon.svg';
import iconErr1 from './img/closebi_x-lg.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
const formElement = document.querySelector('#search-form');
formElement.addEventListener('submit', handleSearch);
function showToastWithIconAtEnd(message, iconUrl, timeout = 3000) {
  iziToast.show({
    position: 'topRight',
    message: message,
    backgroundColor: '#EF4040',
    messageColor: `#fff`,
    messageSize: '16',
    maxWidth: 432,
    iconUrl: `${iconErr2}`,
    timeout: timeout,
    class: 'iziToast-custom',
    onOpening: function (instance, toast) {
      const iconElement = document.createElement('div');
      iconElement.className = 'custom-icon';
      iconElement.style.backgroundImage = `url(${iconUrl})`;
      toast.querySelector('.iziToast-message').appendChild(iconElement);
    },
  });
}

function handleSearch(event) {
  event.preventDefault();
  const formElement = document.getElementById('search-form');
  const query = document.querySelector('#search-input').value.trim();
  if (query !== '') {
    fetchImages(query)
      .then(data => {
        if (data && data.hits && data.hits.length > 0) {
          renderImages(data.hits);
        } else {
          showToastWithIconAtEnd(
            'Sorry, there are no images matching your search query. Please try again!',
            iconErr1
          );
        }
      })
      .catch(error => console.error('Error searching images:', error));
  } else {
    showToastWithIconAtEnd(
      'Sorry, there are no images matching your search query. Please try again!',
      iconErr1
    );
  }
  formElement.reset();
}
