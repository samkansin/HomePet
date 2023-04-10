let data = [
  {
    id: '1',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/delta.jpg',
    name: 'Delta',
    type: 'Cat',
    breed: 'Thai cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '8',
    ageYear: '0',
    gender: 'Male',
    status: 'Available',
    owner: 'Phoebe',
    dateTime: '2021-12-07T13:11:24.309Z',
    topic: 'cat',
  },
  {
    id: '2',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/khunpan.jpeg',
    name: 'Khunpan',
    type: 'Cat',
    breed: 'Thai cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '6',
    ageYear: '0',
    gender: 'Male',
    status: 'Available',
    owner: 'Grace',
    dateTime: '2022-06-07T13:11:24.309Z',
    topic: 'cat',
  },
  {
    id: '3',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Dog/boo.jpg',
    name: 'Boo',
    type: 'Dog',
    breed: 'Thai dog',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '8',
    ageYear: '0',
    gender: 'Female',
    status: 'Adopted',
    owner: 'Linda',
    dateTime: '2023-01-07T13:11:24.309Z',
    topic: 'dog',
  },
  {
    id: '4',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/mew.jpeg',
    name: 'Mew',
    type: 'Cat',
    breed: 'Siamese cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '3',
    ageYear: '0',
    gender: 'Male',
    status: 'Available',
    owner: 'Dion',
    dateTime: '2023-04-01T13:11:24.309Z',
    topic: 'cat',
  },
  {
    id: '5',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Dog/lulu.jpg',
    name: 'Lulu',
    type: 'Dog',
    breed: 'Pit Bull',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '0',
    ageYear: '1',
    gender: 'Male',
    status: 'Adopted',
    owner: 'Renny',
    dateTime: '2023-04-07T13:11:24.309Z',
    topic: 'dog',
  },
  {
    id: '6',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Dog/kankaew.jpeg',
    name: 'Kankaew',
    type: 'Dog',
    breed: 'Thai dog',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '2',
    ageYear: '0',
    gender: 'Male',
    status: 'Available',
    owner: 'Randel',
    dateTime: '2023-04-07T13:11:24.309Z',
    topic: 'dog',
  },
  {
    id: '7',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Dog/joe.jpg',
    name: 'Joe',
    type: 'Dog',
    breed: 'Jack Russell',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '0',
    ageYear: '8',
    gender: 'Male',
    status: 'Adopted',
    owner: 'Milada',
    dateTime: '2023-04-09T13:11:24.309Z',
    topic: 'dog',
  },
  {
    id: '8',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/milo.jpg',
    name: 'Milo',
    type: 'Cat',
    breed: 'Thai cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: '3',
    ageYear: '0',
    gender: 'Male',
    status: 'Available',
    owner: 'Cara',
    dateTime: '2023-04-07T13:11:24.309Z',
    topic: 'cat',
  },
];

let Pet = {
  list: () => new Promise((resolve, reject) => resolve(data)),
  findPet: (id) => {
    return new Promise((resolve, reject) => {
      let index = data.findIndex((e) => e.id === id);
      if (index < 0) reject('Not found pet id:' + id);
      resolve(data[index]);
    });
  },
  updatePetData: (id, editPet) => {
    return new promise((resolve, reject) => {
      let index = data.findIndex((e) => e.id === id);
      data.splice(index, 1, editPet);
      resolve(data[index]);
    });
  },
  addPet: (newPet) => {
    return new Promise((resolve, reject) => {
      data.unshift(newPet);
      resolve(data[0]);
    });
  },
  deletePet: (id) => {
    return new Promise((resolve, reject) => {
      let index = data.findIndex((e) => e.id === id);
      if (index < 0) return reject('Not found pet for delete ' + id);
      data.splice(index, 1);
      resolve(1);
    });
  },
  LastFourPet: () => {
    return new Promise((resolve, reject) => {
      let index = data.length;
      let lastFourIndex = [];
      if (index <= 4) {
        resolve(data);
      } else {
        for (let i = 0; i < 4; i++) {
          lastFourIndex.push(data[i]);
        }
        resolve(lastFourIndex);
      }
    });
  },
};
export default Pet;
