//Допустим, что с бекенда приходит массив объектов, в которых одним из свойств является объект пользователей user. Написать функцию, которая будет принимать данный массив и возвращать массив объектов user. При выполнении задачи исходный массив самостоятельно дополнить 4-5 объектами.
const users = [
  {
    id: 1,
    user: {
      id: 101,
      name: 'Юрий',
      age: 28,
    },
    city: 'Москва',
    role: 'author',
  },
  {
    id: 2,
    user: {
      id: 102,
      name: 'Юлия',
      age: 20,
    },
    city: 'Санкт-Петербург',
    role: 'reader',
  },
];
function transformUsers(array) {
  const newUsers = users.map((elem) => {
    return elem.user;
  });
  return newUsers;
}
const transformedUsers = transformUsers(users);
console.log(transformedUsers);
