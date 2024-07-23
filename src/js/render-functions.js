// Your API key: 45065033-34b48c3d2ea0e7ba665d8e642
// render-functions.js

// Функція для відображення картинок на сторінці
export function renderImages(images) {
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = '';

  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.previewURL;
    imgElement.alt = image.tags;
    imageContainer.appendChild(imgElement);
  });
}
