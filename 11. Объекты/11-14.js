// Дан объект. Написать функцию, которая будет возвращать новый объект, в котором имена и значения свойств поменяются местами. Для решения задачи, возможно, потребуется метод объектов, который в практикуме не описывался, его можно найти в документации.
const dog = {
  name: 'Рекс',
  age: 3,
  home: 'Москва',
};
function unDog(dog) {
  const newDog = {};
  for (let key in dog) {
    newDog[dog[key]] = key;
  }

  return newDog;
}

const result = unDog(dog);
console.log(result);
