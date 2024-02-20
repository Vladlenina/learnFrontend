// Допустим, что с бекенда приходит массив объектов со свойствами: {n: “Алексей”, a: 24, h: “Москва”, p: “курьер”, c: “Toyota”}. Написать функцию, которая будет возвращать новый массив объектов, в которых имена свойств будут соответствовать их значениям, например, n заменится на name и т.д. При выполнении задачи исходный массив самостоятельно дополнить 4-5 объектами.
const originalArray = [
  {n: "Алексей", a: 24, h: "Москва", p: "курьер", c: "Toyota"},
  {n: "Евгения", a: 32, h: "Тюмень", p: "юрист", c: "Nissan"},
  {n: "Влада", a: 22, h: "Ростов", p: "медсестра", c: "BMW"},
  {n: "Андрей", a: 50, h: "Воронеж", p: "бизнесмен", c: "Ferrari"},
  {n: "Елена", a: 40, h: "Сальск", p: "домохозяйка", c: "Opel"},
  {n: "Дарья", a: 30, h: "Владивосток", p: "врач", c: "Jaguar"},
  ]
function transformArray(array){
  const transformedArray = array.map((elem) => {
    return {
      name: elem.n,
      age: elem.a,
      city: elem.h,
      job: elem.p,
      car: elem.c,
      }
    })
      return transformedArray;
  }
    const newArray = transformArray(originalArray)
    console.log(newArray)