const movie_search_func = (url) => {
  const searchValue = document.querySelector('#search').value;
  const API = `http://omdbapi.com/?s=${searchValue}&apikey=3d15e923`;
  fetch(API)
    .then((res) => res.json())
    .then((res) => appendData(res))
    .catch((err) => console.error(err))
    .finally(() => console.log('done'));
};

const appendData = (data) => {
  console.log('🚀 ~ data:', data);
  const { Search } = data;
  const mainDiv = document.querySelector('#dataAppend');

  mainDiv.innerHTML = '';
  let card = document.createElement('div');

  // let h1 = document.createElement('h1');
  // let img = document.createElement('img');
  // let h3 = document.createElement('h3');
  // let h3_2 = document.createElement('h3');

  // h1.innerText = `title: ${data.Title}`;
  // img.src = data.Poster;
  // h3.innerText = `${data.BoxOffice}`;
  // h3_2.innerText = `${data.Language}`;

  // h1.className = 'heading';
  // h3.className = 'heading_3';

  // h3_2.style = 'background:red';

  // card.append(img, h1, h3, h3_2);

  card.style = `display:flex;
  flex-direction:column`;

  // loop of element

  Search &&
    Search.forEach((el, i) => {
      let card = document.createElement('div');
      card.innerHTML = `
      <p>${i + 1}</p>
      <h1>title: ${el.Title}</h1>
      <img src=${el.Poster} alt=${el.Title} />
      <h3><b><mark>${el.Year}</mark></b></h3>
      <h3>${el.Type}</h3>
      <h3>${el.imdbID}</h3>
      `;
      mainDiv.append(card);
    });
};
