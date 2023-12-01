// Метод toSpliced()— это копирующая версия метода splice().
// Он возвращает новый массив с удаленными и/или замененными некоторыми элементами по заданному индексу.
// toSpliced(start, deleteCount, item1)

// start - Индекс, отсчитываемый от нуля, с которого следует начать изменение массива
// deleteCount - Целое число, указывающее количество элементов массива, которые необходимо удалить start.
// item1 - Элементы, добавляемые в массив, начиная с start. Если вы не укажете никаких элементов, toSpliced()будут удалены только элементы из массива.

const months = ['Jan', 'Mar', 'Apr', 'May'];

const months2 = months.toSpliced(1, 0, 'Feb');
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

const months4 = months3.toSpliced(1, 1, 'Feb', 'Mar');
console.log(months4); // ["Jan", "Feb", "Mar", "May"]
