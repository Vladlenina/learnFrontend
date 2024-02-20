//Даны объект - девайс (шлагбаум) и массив объектов - камер. Написать функцию, которая будет принимать этот объект и массив объектов, и возвращать объект со свойствами: название барьера name и массивом объектов с данными о камерах cameras. Свойство cameras должно содержать данные только о тех камерах, чьи id указаны в свойстве cameraIDs.

const device = {
  name: 'Barrier 1',
  cameraIDs: [1, 2],
};

const cameras = [
  {
    id: 1,
    name: 'Camera 1',
  },
  {
    id: 2,
    name: 'Camera 2',
  },
  {
    id: 3,
    name: 'Camera 3',
  },
];
function changeCameras(device, cameras) {
  const changedCameras = cameras.filter((elem) =>
    device.cameraIDs.includes(elem.id)
  );
  return {
    name: device.name,
    cameras: changedCameras,
  };
}

const result = changeCameras(device, cameras);
console.log(result);
