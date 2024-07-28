export function fetchImages(query) {
  const apiKey = '45065033-34b48c3d2ea0e7ba665d8e642';
  const params = new URLSearchParams({
    key: apiKey,
    q: encodeURIComponent(query),
    image_type: encodeURIComponent('photo'),
    orientation: encodeURIComponent('horizontal'),
    safesearch: encodeURIComponent('true'),
  });
  return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      if (error instanceof TypeError) {
        // This might be a network-related error
        console.error('Check your internet connection:', error.message);
        alert('Internet connection lost.');
      } else {
        console.error('An error occurred:', error.message);
        alert(error.message); // Provide specific error message
      }
      return { hits: [] };
    });
}
