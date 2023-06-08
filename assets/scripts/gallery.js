fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data =>
    data
      .filter(data => data.id < 4)
      .forEach(image => {
        const markup = `
      <div class="carousel-item active">
      <img src="${image.url}" class="d-block w-100" alt="..." />
    </div>`;
        document
          .querySelector('.carousel-inner')
          .insertAdjacentHTML('beforeend', markup);
      })
  )
  .catch(error => console.log(error));
