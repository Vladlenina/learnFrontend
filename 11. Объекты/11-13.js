//Допустим, что с бекенда приходят два массива объектов: users и posts. Написать функцию, которая будет объединять эти массивы в один массив объектов. При выполнении задачи исходные массивы самостоятельно дополнить 4-5 объектами.
const users = [
  {
    id: 101,
    name: 'Юрий',
  },
  {
    id: 102,
    name: 'Анна',
  },
  {
    id: 103,
    name: 'Константин',
  },
];
const posts = [
  {
    id: 1,
    userID: 101,
    title: 'Что не так с онлайн-курсами?',
    text: 'Привет! Меня зовут Юрий, и сегодня я хочу поговорить об онлайн-курсах программирования.',
  },
  {
    id: 2,
    userID: 101,
    title: 'Что за черт, Javascript',
    text: 'Этот пост — список забавных и хитрых примеров на JavaScript. Это отличный язык. У него простой синтаксис, большая экосистема и, что гораздо важнее, огромное сообщество.',
  },
  {
    id: 3,
    userID: 103,
    title: 'Работа с часовыми поясами в JavaScript',
    text: 'Недавно я работал над задачей добавления часовых поясов в JS-библиотеку календаря, которую ведёт моя команда.',
  },
  {
    id: 4,
    userID: 102,
    title: 'Работа с часовыми поясами в JavaScript 2',
    text: 'Недавно я работал над задачей добавления часовых поясов в JS-библиотеку календаря, которую ведёт моя команда.',
  },
];
function getPostsAndUsers(users, posts) {
  const newArray = posts.map((post) => {
    const author = users.find((user) => user.id === post.userID);
    return {
      id: post.id,
      author: author?.name,
      title: post.title,
      text: post.text,
    };
  });
  return newArray;
}
const transformedArray = getPostsAndUsers(users, posts);
console.log(transformedArray);
