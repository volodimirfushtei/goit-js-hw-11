// pixabay-api.js
const searchQuery = 'пошукове_слово'; // Наприклад, 'landscape', 'cat', тощо
const imageType = 'photo'; // Тип зображення: 'photo', 'illustration', 'vector'
const orientation = 'horizontal'; // Орієнтація зображення: 'horizontal', 'vertical'
const safeSearch = true; // Філь
// Функція для виконання GET-запиту до API Pixabay
export async function fetchImages(query) {
  const apiKey = '45065033-34b48c3d2ea0e7ba665d8e642';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(
      'Sorry, there are no images matching your search query. Please try again!',
      error
    );
    return null;
  }
}
