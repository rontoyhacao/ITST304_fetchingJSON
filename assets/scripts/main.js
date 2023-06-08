window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
};

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data =>
    data.forEach(user => {
      const markup = `<li class="list-group-item">${user.name}</li>`;
      document
        .querySelector('.usersContainer')
        .insertAdjacentHTML('beforeend', markup);
    })
  )
  .catch(error => console.log(error));
