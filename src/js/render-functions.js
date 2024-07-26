'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
  const imageContainer = document.getElementById('image-container');

  imageContainer.innerHTML = '';
  setTimeout(() => {
    if (images.length > 0) {
      const imageCards = images.map(
        image => `
        <li class="gallery-link"><a class="card-link" href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags}">
        <div class="card">
          <img class="image" src="${image.webformatURL}" alt="${image.tags}">
          <span class="loader"></span>
          <div class="card-points">
            <div class="card-text"><p>Likes: ${image.likes}</p></div>
            <div class="card-text"><p>Views: ${image.views}</p></div>
            <div class="card-text"><p>Comments: ${image.comments}</p></div>
            <div class="card-text"><p>Downloads: ${image.downloads}</p></div>
          </div>
        </div>
      </a>
      </li> 
    `
      );
      imageContainer.innerHTML = imageCards.join('');
      const lightbox = new SimpleLightbox('[data-lightbox="gallery"]');
      lightbox.refresh();
    } else {
      imageContainer.innerHTML = '';
    }
    const imageEl = document.querySelectorAll('.image');
    imageEl.forEach(img => {
      img.addEventListener('load', () => hideLoader(img));
      img.addEventListener('error', () => hideLoader(img));
    });
  }, 2000);
  function hideLoader(img) {
    const loader = img.parentElement.querySelector('.loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }
}
