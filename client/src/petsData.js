import localforage from 'localforage';

const PetData = [
  {
    id: 1,
    image_src:
      'https://www.central.co.th/e-shopping/storage/2020/12/CUTE-KITTY.jpg',
    name: 'Khunpan',
    type: 'Cat',
    breed: 'American Shorthair',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 3,
    ageYear: 0,
    gender: 'Female',
    status: 'Available',
    owner: 'David C.',
    dateTime: '04/08/2023, 01:36:40',
  },
  {
    id: 2,
    image_src:
      'https://cdn.onemars.net/sites/whiskas_th_r81SA_mwh5/image/thumb_cat-breeds-01_1652358723718.jpeg',
    name: 'Bella',
    type: 'Cat',
    breed: 'Thai Cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 2,
    ageYear: 0,
    gender: 'Male',
    status: 'Adopted',
    owner: 'James B.',
    dateTime: '04/08/2023, 01:36:40',
  },
  {
    id: 3,
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    name: 'Mumu',
    type: 'Dog',
    breed: 'Bulldog',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 6,
    ageYear: 0,
    gender: 'Female',
    status: 'Available',
    owner: 'George D.',
    dateTime: '04/08/2023, 01:36:40',
  },
  {
    id: 4,
    image_src:
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=600',
    name: 'Mew',
    type: 'Cat',
    breed: 'Bengal',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 10,
    ageYear: 0,
    gender: 'Male',
    status: 'Available',
    owner: 'Lily M. ',
    dateTime: '04/08/2023, 01:36:40',
  },
];

export async function getPetData(query) {
  await fakeNetwork(`getPetData:${query}`);
  let data = await localforage.getItem('petData');
  if (!data) {
    data = await getInitData();
  }

  if (query) {
    data = data.filter((e) => {
      return e.name.toLowerCase().includes(query.toLowerCase());
    });
  }

  return data;
}

export async function createPost(newPet) {
  console.log(newPet);
  await fakeNetwork();
  let pets = await getPetData();
  if (!pets) pets = [];
  if (!newPet || (newPet.id && pets.findIndex((e) => e.id === newPet.id))) {
    throw new Error(`Error add new pet ${newPet}`);
  }
  pets.unshift(newPet[0]);
  await set(pets);
  return newPet;
}

async function getInitData() {
  await set(PetData);
  return PetData;
}

async function set(data) {
  return localforage.setItem('petData', data);
}

let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
