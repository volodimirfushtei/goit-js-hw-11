'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export function renderImages(images) {
  const imageContainer = document.getElementById('image-container');
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
  imageContainer.innerHTML = '';
  setTimeout(() => {
    if (images.length > 0) {
      const imageCards = images.map(
        image => `
     <li class="gallery-link"><a class="card-link" href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags}">
        <div class="card">
          <img class="image" src="${image.webformatURL}" alt="${image.tags}">
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
      loader.style.display = 'none';
      const lightbox = new SimpleLightbox('[data-lightbox="gallery"]');
      lightbox.refresh();
    } else {
      imageContainer.innerHTML = '';
    }
    loader.style.display = 'none';
  }, 3000);
}
