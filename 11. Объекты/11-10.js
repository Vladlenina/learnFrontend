// Даны два массива, в первом перечислены по порядку названия фильмов, во втором - режиссёры этих фильмов. Написать функцию, которая будет принимать эти два массива, возвращать массив объектов со свойствами: название фильма и режиссёр.
const movieTitles = [
  'Зеленая миля',
  'Побег из Шоушенка',
  'Форрест Гамп',
  '1+1',
  'Список Шиндлера',
];
const movieDirectors = [
  'Фрэнк Дарабонт',
  'Фрэнк Дарабонт',
  'Роберт Земекис',
  'Оливье Накаш',
  'Стивен Спилберг',
];

function getMovies(titles, directors) {
  const moviesArray = [];
  for (let i = 0; i < titles.length; i++) {
    moviesArray.push({
      title: titles[i],
      director: directors[i],
    });
  }
  return moviesArray;
}

// function getMovies(titles, directors) {
//   const moviesArray = [];
//   titles.forEach((title, index) => {
//   moviesArray.push({title: title, director: directors[index]});
//   });
//   return  moviesArray;
// }
const readyMovies = getMovies(movieTitles, movieDirectors);
console.log(readyMovies);
