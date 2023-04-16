let data = [
  {
    id: '1',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/delta.jpg',
    name: 'Delta',
    type: 'cat',
    breed: 'Thai cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 8,
    ageYear: 0,
    gender: 'Male',
    status: 'Available',
    ownerID: '6QXC2EFRQY',
    dateTime: '2023-04-10T13:11:24.309Z',
    topic: 'cat',
  },
  {
    id: '2',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/khunpan.jpeg',
    name: 'Khunpan',
    type: 'cat',
    breed: 'Thai cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 6,
    ageYear: 0,
    gender: 'Male',
    status: 'Available',
    ownerID: 'PNBX298UD9',
    dateTime: '2023-04-10T09:11:24.309Z',
    topic: 'cat',
  },
  {
    id: '3',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Dog/boo.jpg',
    name: 'Boo',
    type: 'dog',
    breed: 'Thai dog',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 8,
    ageYear: 0,
    gender: 'Female',
    status: 'Adopted',
    ownerID: '1RMLITO815',
    dateTime: '2023-04-09T13:11:24.309Z',
    topic: 'dog',
  },
  {
    id: '4',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/mew.jpeg',
    name: 'Mew',
    type: 'cat',
    breed: 'Siamese cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 3,
    ageYear: 0,
    gender: 'Male',
    status: 'Available',
    ownerID: '86YAN308E2',
    dateTime: '2023-04-09T13:11:24.309Z',
    topic: 'cat',
  },
  {
    id: '5',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Dog/lulu.jpg',
    name: 'Lulu',
    type: 'dog',
    breed: 'Pit Bull',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 0,
    ageYear: 1,
    gender: 'Male',
    status: 'Adopted',
    ownerID: 'NBABQ2P8YS',
    dateTime: '2023-04-01T13:11:24.309Z',
    topic: 'dog',
  },
  {
    id: '6',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Dog/kankaew.jpeg',
    name: 'Kankaew',
    type: 'dog',
    breed: 'Thai dog',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 2,
    ageYear: 0,
    gender: 'Male',
    status: 'Available',
    ownerID: '1QJ0PQJC6I',
    dateTime: '2023-01-07T13:11:24.309Z',
    topic: 'dog',
  },
  {
    id: '7',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Dog/joe.jpg',
    name: 'Joe',
    type: 'dog',
    breed: 'Jack Russell',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 0,
    ageYear: 8,
    gender: 'Male',
    status: 'Adopted',
    ownerID: '3K74J15EPJ',
    dateTime: '2022-06-07T13:11:24.309Z',
    topic: 'dog',
  },
  {
    id: '8',
    image_src:
      'https://knightsmsk.github.io/HomePetResource/imgPet/Cat/milo.jpg',
    name: 'Milo',
    type: 'cat',
    breed: 'Thai cat',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit. adipiscing elit adipiscing elit adipiscing elit.',
    ageMonth: 3,
    ageYear: 0,
    gender: 'Male',
    status: 'Available',
    ownerID: 'CM3B0OGEI6',
    dateTime: '2021-12-07T13:11:24.309Z',
    topic: 'cat',
  },
];

let catBreeds = [
  {
    value: 'Abyssinian',
    label: 'Abyssinian',
  },
  {
    value: 'Aegean',
    label: 'Aegean',
  },
  {
    value: 'American Curl',
    label: 'American Curl',
  },
  {
    value: 'American Bobtail',
    label: 'American Bobtail',
  },
  {
    value: 'American Shorthair',
    label: 'American Shorthair',
  },
  {
    value: 'American Wirehair',
    label: 'American Wirehair',
  },
  {
    value: 'Arabian Mau',
    label: 'Arabian Mau',
  },
  {
    value: 'Australian Mist',
    label: 'Australian Mist',
  },
  {
    value: 'Asian',
    label: 'Asian',
  },
  {
    value: 'Asian Semi-longhair',
    label: 'Asian Semi-longhair',
  },
  {
    value: 'Balinese',
    label: 'Balinese',
  },
  {
    value: 'Bambino',
    label: 'Bambino',
  },
  {
    value: 'Bengal',
    label: 'Bengal',
  },
  {
    value: 'Birman',
    label: 'Birman',
  },
  {
    value: 'Bombay',
    label: 'Bombay',
  },
  {
    value: 'Brazilian Shorthair',
    label: 'Brazilian Shorthair',
  },
  {
    value: 'British Semi-longhair',
    label: 'British Semi-longhair',
  },
  {
    value: 'British Shorthair',
    label: 'British Shorthair',
  },
  {
    value: 'British Longhair',
    label: 'British Longhair',
  },
  {
    value: 'Burmese',
    label: 'Burmese',
  },
  {
    value: 'Burmilla',
    label: 'Burmilla',
  },
  {
    value: 'California Spangled',
    label: 'California Spangled',
  },
  {
    value: 'Chantilly-Tiffany',
    label: 'Chantilly-Tiffany',
  },
  {
    value: 'Chartreux',
    label: 'Chartreux',
  },
  {
    value: 'Chausie',
    label: 'Chausie',
  },
  {
    value: 'Cheetoh',
    label: 'Cheetoh',
  },
  {
    value: 'Colorpoint Shorthair',
    label: 'Colorpoint Shorthair',
  },
  {
    value: 'Cornish Rex',
    label: 'Cornish Rex',
  },
  {
    value: 'Cymric',
    label: 'Cymric',
  },
  {
    value: 'Cyprus',
    label: 'Cyprus',
  },
  {
    value: 'Devon Rex',
    label: 'Devon Rex',
  },
  {
    value: 'Donskoy',
    label: 'Donskoy',
  },
  {
    value: 'Dragon Li',
    label: 'Dragon Li',
  },
  {
    value: 'Dwarf cat',
    label: 'Dwarf cat',
  },
  {
    value: 'Egyptian Mau',
    label: 'Egyptian Mau',
  },
  {
    value: 'European Shorthair',
    label: 'European Shorthair',
  },
  {
    value: 'Exotic Shorthair',
    label: 'Exotic Shorthair',
  },
  {
    value: 'Foldex',
    label: 'Foldex',
  },
  {
    value: 'German Rex',
    label: 'German Rex',
  },
  {
    value: 'Havana Brown',
    label: 'Havana Brown',
  },
  {
    value: 'Highlander',
    label: 'Highlander',
  },
  {
    value: 'Himalayan',
    label: 'Himalayan',
  },
  {
    value: 'Japanese Bobtail',
    label: 'Japanese Bobtail',
  },
  {
    value: 'Javanese',
    label: 'Javanese',
  },
  {
    value: 'Karelian Bobtail',
    label: 'Karelian Bobtail',
  },
  {
    value: 'Khao Manee',
    label: 'Khao Manee',
  },
  {
    value: 'Korat',
    label: 'Korat',
  },
  {
    value: 'Korean Bobtail',
    label: 'Korean Bobtail',
  },
  {
    value: 'Korn Ja',
    label: 'Korn Ja',
  },
  {
    value: 'Kurilian Bobtail',
    label: 'Kurilian Bobtail',
  },
  {
    value: 'LaPerm',
    label: 'LaPerm',
  },
  {
    value: 'Lykoi',
    label: 'Lykoi',
  },
  {
    value: 'Maine Coon',
    label: 'Maine Coon',
  },
  {
    value: 'Manx',
    label: 'Manx',
  },
  {
    value: 'Mekong Bobtail',
    label: 'Mekong Bobtail',
  },
  {
    value: 'Minskin',
    label: 'Minskin',
  },
  {
    value: 'Munchkin',
    label: 'Munchkin',
  },
  {
    value: 'Nebelung',
    label: 'Nebelung',
  },
  {
    value: 'Napoleon',
    label: 'Napoleon',
  },
  {
    value: 'Norwegian Forest cat',
    label: 'Norwegian Forest cat',
  },
  {
    value: 'Ocicat',
    label: 'Ocicat',
  },
  {
    value: 'Ojos Azules',
    label: 'Ojos Azules',
  },
  {
    value: 'Oregon Rex',
    label: 'Oregon Rex',
  },
  {
    value: 'Oriental Bicolor',
    label: 'Oriental Bicolor',
  },
  {
    value: 'Oriental Shorthair',
    label: 'Oriental Shorthair',
  },
  {
    value: 'Oriental Longhair',
    label: 'Oriental Longhair',
  },
  {
    value: 'PerFold',
    label: 'PerFold',
  },
  {
    value: 'Persian (Modern Persian Cat)',
    label: 'Persian (Modern Persian Cat)',
  },
  {
    value: 'Persian (Traditional Persian Cat)',
    label: 'Persian (Traditional Persian Cat)',
  },
  {
    value: 'Peterbald',
    label: 'Peterbald',
  },
  {
    value: 'Pixie-bob',
    label: 'Pixie-bob',
  },
  {
    value: 'Raas',
    label: 'Raas',
  },
  {
    value: 'Ragamuffin',
    label: 'Ragamuffin',
  },
  {
    value: 'Ragdoll',
    label: 'Ragdoll',
  },
  {
    value: 'Russian Blue',
    label: 'Russian Blue',
  },
  {
    value: 'Russian White, Black and Tabby',
    label: 'Russian White, Black and Tabby',
  },
  {
    value: 'Sam Sawet',
    label: 'Sam Sawet',
  },
  {
    value: 'Savannah',
    label: 'Savannah',
  },
  {
    value: 'Scottish Fold',
    label: 'Scottish Fold',
  },
  {
    value: 'Selkirk Rex',
    label: 'Selkirk Rex',
  },
  {
    value: 'Serengeti',
    label: 'Serengeti',
  },
  {
    value: 'Serrade petit',
    label: 'Serrade petit',
  },
  {
    value: 'Siamese',
    label: 'Siamese',
  },
  {
    value: 'Siberian',
    label: 'Siberian',
  },
  {
    value: 'Singapura',
    label: 'Singapura',
  },
  {
    value: 'Snowshoe',
    label: 'Snowshoe',
  },
  {
    value: 'Sokoke',
    label: 'Sokoke',
  },
  {
    value: 'Somali',
    label: 'Somali',
  },
  {
    value: 'Sphynx',
    label: 'Sphynx',
  },
  {
    value: 'Suphalak',
    label: 'Suphalak',
  },
  {
    value: 'Thai',
    label: 'Thai',
  },
  {
    value: 'Thai Lilac',
    label: 'Thai Lilac',
  },
  {
    value: 'Tonkinese',
    label: 'Tonkinese',
  },
  {
    value: 'Toyger',
    label: 'Toyger',
  },
  {
    value: 'Turkish Angora',
    label: 'Turkish Angora',
  },
  {
    value: 'Turkish Van',
    label: 'Turkish Van',
  },
  {
    value: 'Ukrainian Levkoy',
    label: 'Ukrainian Levkoy',
  },
];

let dogBreeds = [
  { value: 'Thai', label: 'Thai' },

  {
    value: 'Afghan Hound',
    label: 'Afghan Hound',
  },
  {
    value: 'Afghan Shepherd',
    label: 'Afghan Shepherd',
  },
  {
    value: 'Aidi',
    label: 'Aidi',
  },
  {
    value: 'Airedale Terrier',
    label: 'Airedale Terrier',
  },
  {
    value: 'Akbash',
    label: 'Akbash',
  },
  {
    value: 'Akita',
    label: 'Akita',
  },
  {
    value: 'Alano Español',
    label: 'Alano Español',
  },
  {
    value: 'Alaskan husky',
    label: 'Alaskan husky',
  },
  {
    value: 'Alaskan Klee Kai',
    label: 'Alaskan Klee Kai',
  },
  {
    value: 'Alaskan Malamute',
    label: 'Alaskan Malamute',
  },
  {
    value: 'Alaunt',
    label: 'Alaunt',
  },
  {
    value: 'Alopekis',
    label: 'Alopekis',
  },
  {
    value: 'Alpine Dachsbracke',
    label: 'Alpine Dachsbracke',
  },
  {
    value: 'Alpine Mastiff',
    label: 'Alpine Mastiff',
  },
  {
    value: 'Alpine Spaniel',
    label: 'Alpine Spaniel',
  },
  {
    value: 'American Akita',
    label: 'American Akita',
  },
  {
    value: 'American Bulldog',
    label: 'American Bulldog',
  },
  {
    value: 'American Cocker Spaniel',
    label: 'American Cocker Spaniel',
  },
  {
    value: 'American English Coonhound',
    label: 'American English Coonhound',
  },
  {
    value: 'American Eskimo Dog',
    label: 'American Eskimo Dog',
  },
  {
    value: 'American Foxhound',
    label: 'American Foxhound',
  },
  {
    value: 'American Hairless Terrier',
    label: 'American Hairless Terrier',
  },
  {
    value: 'American Pit Bull Terrier',
    label: 'American Pit Bull Terrier',
  },
  {
    value: 'American Staffordshire Terrier',
    label: 'American Staffordshire Terrier',
  },
  {
    value: 'American Water Spaniel',
    label: 'American Water Spaniel',
  },
  {
    value: 'Anatolian Shepherd Dog',
    label: 'Anatolian Shepherd Dog',
  },
  {
    value: 'Andalusian Hound',
    label: 'Andalusian Hound',
  },
  {
    value: 'Anglo-Français de Petite Vénerie',
    label: 'Anglo-Français de Petite Vénerie',
  },
  {
    value: 'Appenzeller Sennenhund',
    label: 'Appenzeller Sennenhund',
  },
  {
    value: 'Ariege Pointer',
    label: 'Ariege Pointer',
  },
  {
    value: 'Ariegeois',
    label: 'Ariegeois',
  },
  {
    value: 'Armant',
    label: 'Armant',
  },
  {
    value: 'Armenian Gampr dog',
    label: 'Armenian Gampr dog',
  },
  {
    value: 'Artois Hound',
    label: 'Artois Hound',
  },
  {
    value: 'Australian Cattle Dog',
    label: 'Australian Cattle Dog',
  },
  {
    value: 'Australian Kelpie',
    label: 'Australian Kelpie',
  },
  {
    value: 'Australian Shepherd',
    label: 'Australian Shepherd',
  },
  {
    value: 'Australian Silky Terrier',
    label: 'Australian Silky Terrier',
  },
  {
    value: 'Australian Stumpy Tail Cattle Dog',
    label: 'Australian Stumpy Tail Cattle Dog',
  },
  {
    value: 'Australian Terrier',
    label: 'Australian Terrier',
  },
  {
    value: 'Austrian Black and Tan Hound',
    label: 'Austrian Black and Tan Hound',
  },
  {
    value: 'Austrian Pinscher',
    label: 'Austrian Pinscher',
  },
  {
    value: 'Azawakh',
    label: 'Azawakh',
  },
  {
    value: 'Barbet',
    label: 'Barbet',
  },
  {
    value: 'Basenji',
    label: 'Basenji',
  },
  {
    value: 'Basque Ratter',
    label: 'Basque Ratter',
  },
  {
    value: 'Basque Shepherd Dog',
    label: 'Basque Shepherd Dog',
  },
  {
    value: 'Basset Artésien Normand',
    label: 'Basset Artésien Normand',
  },
  {
    value: 'Basset Bleu de Gascogne',
    label: 'Basset Bleu de Gascogne',
  },
  {
    value: 'Basset Fauve de Bretagne',
    label: 'Basset Fauve de Bretagne',
  },
  {
    value: 'Basset Griffon Vendéen, Grand',
    label: 'Basset Griffon Vendéen, Grand',
  },
  {
    value: 'Basset Griffon Vendéen, Petit',
    label: 'Basset Griffon Vendéen, Petit',
  },
  {
    value: 'Basset Hound',
    label: 'Basset Hound',
  },
  {
    value: 'Bavarian Mountain Hound',
    label: 'Bavarian Mountain Hound',
  },
  {
    value: 'Beagle',
    label: 'Beagle',
  },
  {
    value: 'Beagle-Harrier',
    label: 'Beagle-Harrier',
  },
  {
    value: 'Bearded Collie',
    label: 'Bearded Collie',
  },
  {
    value: 'Beauceron',
    label: 'Beauceron',
  },
  {
    value: 'Bedlington Terrier',
    label: 'Bedlington Terrier',
  },
  {
    value: 'Belgian Shepherd Dog (Groenendael)',
    label: 'Belgian Shepherd Dog (Groenendael)',
  },
  {
    value: 'Belgian Shepherd Dog (Laekenois)',
    label: 'Belgian Shepherd Dog (Laekenois)',
  },
  {
    value: 'Belgian Shepherd Dog (Malinois)',
    label: 'Belgian Shepherd Dog (Malinois)',
  },
  {
    value: 'Belgian Shepherd Dog (Tervuren)',
    label: 'Belgian Shepherd Dog (Tervuren)',
  },
  {
    value: 'Bergamasco Shepherd',
    label: 'Bergamasco Shepherd',
  },
  {
    value: 'Berger Blanc Suisse',
    label: 'Berger Blanc Suisse',
  },
  {
    value: 'Berger Picard',
    label: 'Berger Picard',
  },
  {
    value: 'Bernese Mountain Dog',
    label: 'Bernese Mountain Dog',
  },
  {
    value: 'Bichon Frisé',
    label: 'Bichon Frisé',
  },
  {
    value: 'Billy',
    label: 'Billy',
  },
  {
    value: 'Black and Tan Coonhound',
    label: 'Black and Tan Coonhound',
  },
  {
    value: 'Black and Tan Virginia Foxhound',
    label: 'Black and Tan Virginia Foxhound',
  },
  {
    value: 'Black Norwegian Elkhound',
    label: 'Black Norwegian Elkhound',
  },
  {
    value: 'Black Russian Terrier',
    label: 'Black Russian Terrier',
  },
  {
    value: 'Black Mouth Cur',
    label: 'Black Mouth Cur',
  },
  {
    value: 'Bleu de Gascogne, Grand',
    label: 'Bleu de Gascogne, Grand',
  },
  {
    value: 'Bleu de Gascogne, Petit',
    label: 'Bleu de Gascogne, Petit',
  },
  {
    value: 'Bloodhound',
    label: 'Bloodhound',
  },
  {
    value: 'Blue Heeler',
    label: 'Blue Heeler',
  },
  {
    value: 'Blue Lacy',
    label: 'Blue Lacy',
  },
  {
    value: 'Blue Paul Terrier',
    label: 'Blue Paul Terrier',
  },
  {
    value: 'Blue Picardy Spaniel',
    label: 'Blue Picardy Spaniel',
  },
  {
    value: 'Bluetick Coonhound',
    label: 'Bluetick Coonhound',
  },
  {
    value: 'Boerboel',
    label: 'Boerboel',
  },
  {
    value: 'Bohemian Shepherd',
    label: 'Bohemian Shepherd',
  },
  {
    value: 'Bolognese',
    label: 'Bolognese',
  },
  {
    value: 'Border Collie',
    label: 'Border Collie',
  },
  {
    value: 'Border Terrier',
    label: 'Border Terrier',
  },
  {
    value: 'Borzoi',
    label: 'Borzoi',
  },
  {
    value: 'Bosnian Coarse-haired Hound',
    label: 'Bosnian Coarse-haired Hound',
  },
  {
    value: 'Boston Terrier',
    label: 'Boston Terrier',
  },
  {
    value: 'Bouvier des Ardennes',
    label: 'Bouvier des Ardennes',
  },
  {
    value: 'Bouvier des Flandres',
    label: 'Bouvier des Flandres',
  },
  {
    value: 'Boxer',
    label: 'Boxer',
  },
  {
    value: 'Boykin Spaniel',
    label: 'Boykin Spaniel',
  },
  {
    value: 'Bracco Italiano',
    label: 'Bracco Italiano',
  },
  {
    value: "Braque d'Auvergne",
    label: "Braque d'Auvergne",
  },
  {
    value: 'Braque du Bourbonnais',
    label: 'Braque du Bourbonnais',
  },
  {
    value: 'Braque du Puy',
    label: 'Braque du Puy',
  },
  {
    value: 'Braque Francais',
    label: 'Braque Francais',
  },
  {
    value: 'Braque Saint-Germain',
    label: 'Braque Saint-Germain',
  },
  {
    value: 'Brazilian Dogo',
    label: 'Brazilian Dogo',
  },
  {
    value: 'Brazilian Terrier',
    label: 'Brazilian Terrier',
  },
  {
    value: 'Briard',
    label: 'Briard',
  },
  {
    value: 'Briquet Griffon Vendéen',
    label: 'Briquet Griffon Vendéen',
  },
  {
    value: 'Brittany',
    label: 'Brittany',
  },
  {
    value: 'Broholmer',
    label: 'Broholmer',
  },
  {
    value: 'Bruno Jura Hound',
    label: 'Bruno Jura Hound',
  },
  {
    value: 'Bucovina Shepherd Dog',
    label: 'Bucovina Shepherd Dog',
  },
  {
    value: 'Bull and Terrier',
    label: 'Bull and Terrier',
  },
  {
    value: 'Bull Terrier',
    label: 'Bull Terrier',
  },
  {
    value: 'Bull Terrier (Miniature)',
    label: 'Bull Terrier (Miniature)',
  },
  {
    value: 'Bulldog',
    label: 'Bulldog',
  },
  {
    value: 'Bullenbeisser',
    label: 'Bullenbeisser',
  },
  {
    value: 'Bullmastiff',
    label: 'Bullmastiff',
  },
  {
    value: 'Bully Kutta',
    label: 'Bully Kutta',
  },
  {
    value: 'Burgos Pointer',
    label: 'Burgos Pointer',
  },
  {
    value: 'Canaan Dog',
    label: 'Canaan Dog',
  },
  {
    value: 'Canadian Eskimo Dog',
    label: 'Canadian Eskimo Dog',
  },
  {
    value: 'Cane Corso',
    label: 'Cane Corso',
  },
  {
    value: 'Cantabrian Water Dog',
    label: 'Cantabrian Water Dog',
  },
  {
    value: 'Cão da Serra de Aires',
    label: 'Cão da Serra de Aires',
  },
  {
    value: 'Cão de Castro Laboreiro',
    label: 'Cão de Castro Laboreiro',
  },
  {
    value: 'Cão de Gado Transmontano',
    label: 'Cão de Gado Transmontano',
  },
  {
    value: 'Cão Fila de São Miguel',
    label: 'Cão Fila de São Miguel',
  },
  {
    value: 'Carolina Dog',
    label: 'Carolina Dog',
  },
  {
    value: 'Carpathian Shepherd Dog',
    label: 'Carpathian Shepherd Dog',
  },
  {
    value: 'Catahoula Leopard Dog',
    label: 'Catahoula Leopard Dog',
  },
  {
    value: 'Catalan Sheepdog',
    label: 'Catalan Sheepdog',
  },
  {
    value: 'Caucasian Shepherd Dog',
    label: 'Caucasian Shepherd Dog',
  },
  {
    value: 'Cavalier King Charles Spaniel',
    label: 'Cavalier King Charles Spaniel',
  },
  {
    value: 'Central Asian Shepherd Dog',
    label: 'Central Asian Shepherd Dog',
  },
  {
    value: 'Cesky Fousek',
    label: 'Cesky Fousek',
  },
  {
    value: 'Cesky Terrier',
    label: 'Cesky Terrier',
  },
  {
    value: 'Chesapeake Bay Retriever',
    label: 'Chesapeake Bay Retriever',
  },
  {
    value: 'Chien Français Blanc et Noir',
    label: 'Chien Français Blanc et Noir',
  },
  {
    value: 'Chien Français Blanc et Orange',
    label: 'Chien Français Blanc et Orange',
  },
  {
    value: 'Chien Français Tricolore',
    label: 'Chien Français Tricolore',
  },
  {
    value: 'Chien-gris',
    label: 'Chien-gris',
  },
  {
    value: 'Chihuahua',
    label: 'Chihuahua',
  },
  {
    value: 'Chilean Fox Terrier',
    label: 'Chilean Fox Terrier',
  },
  {
    value: 'Chinese Chongqing Dog',
    label: 'Chinese Chongqing Dog',
  },
  {
    value: 'Chinese Crested Dog',
    label: 'Chinese Crested Dog',
  },
  {
    value: 'Chinese Imperial Dog',
    label: 'Chinese Imperial Dog',
  },
  {
    value: 'Chinook',
    label: 'Chinook',
  },
  {
    value: 'Chippiparai',
    label: 'Chippiparai',
  },
  {
    value: 'Chow Chow',
    label: 'Chow Chow',
  },
  {
    value: 'Cierny Sery',
    label: 'Cierny Sery',
  },
  {
    value: "Cirneco dell'Etna",
    label: "Cirneco dell'Etna",
  },
  {
    value: 'Clumber Spaniel',
    label: 'Clumber Spaniel',
  },
  {
    value: 'Collie, Rough',
    label: 'Collie, Rough',
  },
  {
    value: 'Collie, Smooth',
    label: 'Collie, Smooth',
  },
  {
    value: 'Combai',
    label: 'Combai',
  },
  {
    value: 'Cordoba Fighting Dog',
    label: 'Cordoba Fighting Dog',
  },
  {
    value: 'Coton de Tulear',
    label: 'Coton de Tulear',
  },
  {
    value: 'Cretan Hound',
    label: 'Cretan Hound',
  },
  {
    value: 'Croatian Sheepdog',
    label: 'Croatian Sheepdog',
  },
  {
    value: 'Cumberland Sheepdog',
    label: 'Cumberland Sheepdog',
  },
  {
    value: 'Curly-Coated Retriever',
    label: 'Curly-Coated Retriever',
  },
  {
    value: 'Cursinu',
    label: 'Cursinu',
  },
  {
    value: 'Czechoslovakian Wolfdog',
    label: 'Czechoslovakian Wolfdog',
  },
  {
    value: 'Dalmatian',
    label: 'Dalmatian',
  },
  {
    value: 'Dandie Dinmont Terrier',
    label: 'Dandie Dinmont Terrier',
  },
  {
    value: 'Danish-Swedish Farmdog',
    label: 'Danish-Swedish Farmdog',
  },
  {
    value: 'Deutsche Bracke',
    label: 'Deutsche Bracke',
  },
  {
    value: 'Doberman Pinscher',
    label: 'Doberman Pinscher',
  },
  {
    value: 'Dogo Argentino',
    label: 'Dogo Argentino',
  },
  {
    value: 'Dogo Cubano',
    label: 'Dogo Cubano',
  },
  {
    value: 'Dogue de Bordeaux',
    label: 'Dogue de Bordeaux',
  },
  {
    value: 'Drentse Patrijshond',
    label: 'Drentse Patrijshond',
  },
  {
    value: 'Drever',
    label: 'Drever',
  },
  {
    value: 'Dunker',
    label: 'Dunker',
  },
  {
    value: 'Dutch Shepherd',
    label: 'Dutch Shepherd',
  },
  {
    value: 'Dutch Smoushond',
    label: 'Dutch Smoushond',
  },
  {
    value: 'East European Shepherd',
    label: 'East European Shepherd',
  },
  {
    value: 'Elo',
    label: 'Elo',
  },
  {
    value: 'English Cocker Spaniel',
    label: 'English Cocker Spaniel',
  },
  {
    value: 'English Foxhound',
    label: 'English Foxhound',
  },
  {
    value: 'English Mastiff',
    label: 'English Mastiff',
  },
  {
    value: 'English Setter',
    label: 'English Setter',
  },
  {
    value: 'English Shepherd',
    label: 'English Shepherd',
  },
  {
    value: 'English Springer Spaniel',
    label: 'English Springer Spaniel',
  },
  {
    value: 'English Toy Terrier (Black & Tan)',
    label: 'English Toy Terrier (Black & Tan)',
  },
  {
    value: 'English Water Spaniel',
    label: 'English Water Spaniel',
  },
  {
    value: 'English White Terrier',
    label: 'English White Terrier',
  },
  {
    value: 'Entlebucher Mountain Dog',
    label: 'Entlebucher Mountain Dog',
  },
  {
    value: 'Estonian Hound',
    label: 'Estonian Hound',
  },
  {
    value: 'Estrela Mountain Dog',
    label: 'Estrela Mountain Dog',
  },
  {
    value: 'Eurasier',
    label: 'Eurasier',
  },
  {
    value: 'Eurohound',
    label: 'Eurohound',
  },
  {
    value: 'Fila Brasileiro',
    label: 'Fila Brasileiro',
  },
  {
    value: 'Finnish Hound',
    label: 'Finnish Hound',
  },
  {
    value: 'Finnish Lapphund',
    label: 'Finnish Lapphund',
  },
  {
    value: 'Finnish Spitz',
    label: 'Finnish Spitz',
  },
  {
    value: 'Flat-Coated Retriever',
    label: 'Flat-Coated Retriever',
  },
  {
    value: 'Fox Terrier (Smooth)',
    label: 'Fox Terrier (Smooth)',
  },
  {
    value: 'Fox Terrier, Wire',
    label: 'Fox Terrier, Wire',
  },
  {
    value: 'French Brittany',
    label: 'French Brittany',
  },
  {
    value: 'French Bulldog',
    label: 'French Bulldog',
  },
  {
    value: 'French Spaniel',
    label: 'French Spaniel',
  },
  {
    value: 'Galgo Español',
    label: 'Galgo Español',
  },
  {
    value: 'Galician Cattle Dog',
    label: 'Galician Cattle Dog',
  },
  {
    value: 'Garafian Shepherd',
    label: 'Garafian Shepherd',
  },
  {
    value: 'Gascon Saintongeois',
    label: 'Gascon Saintongeois',
  },
  {
    value: 'Georgian Shepherd Dog',
    label: 'Georgian Shepherd Dog',
  },
  {
    value: 'German Longhaired Pointer',
    label: 'German Longhaired Pointer',
  },
  {
    value: 'German Pinscher',
    label: 'German Pinscher',
  },
  {
    value: 'German Roughhaired Pointer',
    label: 'German Roughhaired Pointer',
  },
  {
    value: 'German Shepherd Dog',
    label: 'German Shepherd Dog',
  },
  {
    value: 'German Shorthaired Pointer',
    label: 'German Shorthaired Pointer',
  },
  {
    value: 'German Spaniel',
    label: 'German Spaniel',
  },
  {
    value: 'German Spitz',
    label: 'German Spitz',
  },
  {
    value: 'German Wirehaired Pointer',
    label: 'German Wirehaired Pointer',
  },
  {
    value: 'Giant Schnauzer',
    label: 'Giant Schnauzer',
  },
  {
    value: 'Glen of Imaal Terrier',
    label: 'Glen of Imaal Terrier',
  },
  {
    value: 'Golden Retriever',
    label: 'Golden Retriever',
  },
  {
    value: 'Gordon Setter',
    label: 'Gordon Setter',
  },
  {
    value: 'Gran Mastín de Borínquen',
    label: 'Gran Mastín de Borínquen',
  },
  {
    value: 'Grand Anglo-Français Blanc et Noir',
    label: 'Grand Anglo-Français Blanc et Noir',
  },
  {
    value: 'Grand Anglo-Français Blanc et Orange',
    label: 'Grand Anglo-Français Blanc et Orange',
  },
  {
    value: 'Grand Anglo-Français Tricolore',
    label: 'Grand Anglo-Français Tricolore',
  },
  {
    value: 'Grand Griffon Vendéen',
    label: 'Grand Griffon Vendéen',
  },
  {
    value: 'Great Dane',
    label: 'Great Dane',
  },
  {
    value: 'Great Pyrenees',
    label: 'Great Pyrenees',
  },
  {
    value: 'Greater Swiss Mountain Dog',
    label: 'Greater Swiss Mountain Dog',
  },
  {
    value: 'Greek Harehound',
    label: 'Greek Harehound',
  },
  {
    value: 'Greenland Dog',
    label: 'Greenland Dog',
  },
  {
    value: 'Greyhound',
    label: 'Greyhound',
  },
  {
    value: 'Griffon Bleu de Gascogne',
    label: 'Griffon Bleu de Gascogne',
  },
  {
    value: 'Griffon Bruxellois',
    label: 'Griffon Bruxellois',
  },
  {
    value: 'Griffon Fauve de Bretagne',
    label: 'Griffon Fauve de Bretagne',
  },
  {
    value: 'Griffon Nivernais',
    label: 'Griffon Nivernais',
  },
  {
    value: 'Guatemalan Dogo',
    label: 'Guatemalan Dogo',
  },
  {
    value: 'Hanover Hound',
    label: 'Hanover Hound',
  },
  {
    value: 'Hare Indian Dog',
    label: 'Hare Indian Dog',
  },
  {
    value: 'Harrier',
    label: 'Harrier',
  },
  {
    value: 'Havanese',
    label: 'Havanese',
  },
  {
    value: 'Hawaiian Poi Dog',
    label: 'Hawaiian Poi Dog',
  },
  {
    value: 'Himalayan Sheepdog',
    label: 'Himalayan Sheepdog',
  },
  {
    value: 'Hokkaido',
    label: 'Hokkaido',
  },
  {
    value: 'Hortaya Borzaya',
    label: 'Hortaya Borzaya',
  },
  {
    value: 'Hovawart',
    label: 'Hovawart',
  },
  {
    value: 'Huntaway',
    label: 'Huntaway',
  },
  {
    value: 'Hygenhund',
    label: 'Hygenhund',
  },
  {
    value: 'Icelandic Sheepdog',
    label: 'Icelandic Sheepdog',
  },
  {
    value: 'Indian pariah dog',
    label: 'Indian pariah dog',
  },
  {
    value: 'Indian Spitz',
    label: 'Indian Spitz',
  },
  {
    value: 'Irish Red and White Setter',
    label: 'Irish Red and White Setter',
  },
  {
    value: 'Irish Setter',
    label: 'Irish Setter',
  },
  {
    value: 'Irish Terrier',
    label: 'Irish Terrier',
  },
  {
    value: 'Irish Water Spaniel',
    label: 'Irish Water Spaniel',
  },
  {
    value: 'Irish Wolfhound',
    label: 'Irish Wolfhound',
  },
  {
    value: 'Istrian Coarse-haired Hound',
    label: 'Istrian Coarse-haired Hound',
  },
  {
    value: 'Istrian Shorthaired Hound',
    label: 'Istrian Shorthaired Hound',
  },
  {
    value: 'Italian Greyhound',
    label: 'Italian Greyhound',
  },
  {
    value: 'Jagdterrier',
    label: 'Jagdterrier',
  },
  {
    value: 'Jämthund',
    label: 'Jämthund',
  },
  {
    value: 'Japanese Chin',
    label: 'Japanese Chin',
  },
  {
    value: 'Japanese Spitz',
    label: 'Japanese Spitz',
  },
  {
    value: 'Japanese Terrier',
    label: 'Japanese Terrier',
  },
  {
    value: 'Kai Ken',
    label: 'Kai Ken',
  },
  {
    value: 'Kangal Dog',
    label: 'Kangal Dog',
  },
  {
    value: 'Kanni',
    label: 'Kanni',
  },
  {
    value: 'Karakachan Dog',
    label: 'Karakachan Dog',
  },
  {
    value: 'Karelian Bear Dog',
    label: 'Karelian Bear Dog',
  },
  {
    value: 'Karst Shepherd',
    label: 'Karst Shepherd',
  },
  {
    value: 'Keeshond',
    label: 'Keeshond',
  },
  {
    value: 'Kerry Beagle',
    label: 'Kerry Beagle',
  },
  {
    value: 'Kerry Blue Terrier',
    label: 'Kerry Blue Terrier',
  },
  {
    value: 'King Charles Spaniel',
    label: 'King Charles Spaniel',
  },
  {
    value: 'King Shepherd',
    label: 'King Shepherd',
  },
  {
    value: 'Kintamani',
    label: 'Kintamani',
  },
  {
    value: 'Kishu Ken',
    label: 'Kishu Ken',
  },
  {
    value: 'Komondor',
    label: 'Komondor',
  },
  {
    value: 'Kooikerhondje',
    label: 'Kooikerhondje',
  },
  {
    value: 'Koolie',
    label: 'Koolie',
  },
  {
    value: 'Korean Jindo',
    label: 'Korean Jindo',
  },
  {
    value: 'Kromfohrländer',
    label: 'Kromfohrländer',
  },
  {
    value: 'Kumaon Mastiff',
    label: 'Kumaon Mastiff',
  },
  {
    value: 'Kunming Wolfdog',
    label: 'Kunming Wolfdog',
  },
  {
    value: 'Kurī',
    label: 'Kurī',
  },
  {
    value: 'Kuvasz',
    label: 'Kuvasz',
  },
  {
    value: 'Kyi-Leo',
    label: 'Kyi-Leo',
  },
  {
    value: 'Labrador Retriever',
    label: 'Labrador Retriever',
  },
  {
    value: 'Lagotto Romagnolo',
    label: 'Lagotto Romagnolo',
  },
  {
    value: 'Lakeland Terrier',
    label: 'Lakeland Terrier',
  },
  {
    value: 'Lancashire Heeler',
    label: 'Lancashire Heeler',
  },
  {
    value: 'Landseer',
    label: 'Landseer',
  },
  {
    value: 'Lapponian Herder',
    label: 'Lapponian Herder',
  },
  {
    value: 'Leonberger',
    label: 'Leonberger',
  },
  {
    value: 'Lhasa Apso',
    label: 'Lhasa Apso',
  },
  {
    value: 'Lithuanian Hound',
    label: 'Lithuanian Hound',
  },
  {
    value: 'Löwchen',
    label: 'Löwchen',
  },
  {
    value: 'Mackenzie River Husky',
    label: 'Mackenzie River Husky',
  },
  {
    value: 'Mahratta Greyhound',
    label: 'Mahratta Greyhound',
  },
  {
    value: 'Majorca Ratter',
    label: 'Majorca Ratter',
  },
  {
    value: 'Majorca Shepherd Dog',
    label: 'Majorca Shepherd Dog',
  },
  {
    value: 'Maltese',
    label: 'Maltese',
  },
  {
    value: 'Manchester Terrier',
    label: 'Manchester Terrier',
  },
  {
    value: 'Maremma Sheepdog',
    label: 'Maremma Sheepdog',
  },
  {
    value: 'McNab',
    label: 'McNab',
  },
  {
    value: 'Mexican Hairless Dog',
    label: 'Mexican Hairless Dog',
  },
  {
    value: 'Miniature Australian Shepherd',
    label: 'Miniature Australian Shepherd',
  },
  {
    value: 'Miniature American Shepherd',
    label: 'Miniature American Shepherd',
  },
  {
    value: 'Miniature Fox Terrier',
    label: 'Miniature Fox Terrier',
  },
  {
    value: 'Miniature Pinscher',
    label: 'Miniature Pinscher',
  },
  {
    value: 'Miniature Schnauzer',
    label: 'Miniature Schnauzer',
  },
  {
    value: 'Miniature Shar Pei',
    label: 'Miniature Shar Pei',
  },
  {
    value: 'Mioritic',
    label: 'Mioritic',
  },
  {
    value: 'Molossus',
    label: 'Molossus',
  },
  {
    value: 'Molossus of Epirus',
    label: 'Molossus of Epirus',
  },
  {
    value: 'Montenegrin Mountain Hound',
    label: 'Montenegrin Mountain Hound',
  },
  {
    value: 'Moscow Watchdog',
    label: 'Moscow Watchdog',
  },
  {
    value: 'Moscow Water Dog',
    label: 'Moscow Water Dog',
  },
  {
    value: 'Mountain Cur',
    label: 'Mountain Cur',
  },
  {
    value: 'Mucuchies',
    label: 'Mucuchies',
  },
  {
    value: 'Mudhol Hound',
    label: 'Mudhol Hound',
  },
  {
    value: 'Mudi',
    label: 'Mudi',
  },
  {
    value: 'Münsterländer, Large',
    label: 'Münsterländer, Large',
  },
  {
    value: 'Münsterländer, Small',
    label: 'Münsterländer, Small',
  },
  {
    value: 'Newfoundland',
    label: 'Newfoundland',
  },
  {
    value: 'New Zealand Heading Dog',
    label: 'New Zealand Heading Dog',
  },
  {
    value: 'Norfolk Spaniel',
    label: 'Norfolk Spaniel',
  },
  {
    value: 'Norfolk Terrier',
    label: 'Norfolk Terrier',
  },
  {
    value: 'Norrbottenspets',
    label: 'Norrbottenspets',
  },
  {
    value: 'North Country Beagle',
    label: 'North Country Beagle',
  },
  {
    value: 'Northern Inuit Dog',
    label: 'Northern Inuit Dog',
  },
  {
    value: 'Norwegian Buhund',
    label: 'Norwegian Buhund',
  },
  {
    value: 'Norwegian Elkhound',
    label: 'Norwegian Elkhound',
  },
  {
    value: 'Norwegian Lundehund',
    label: 'Norwegian Lundehund',
  },
  {
    value: 'Norwich Terrier',
    label: 'Norwich Terrier',
  },
  {
    value: 'Nova Scotia Duck-Tolling Retriever',
    label: 'Nova Scotia Duck-Tolling Retriever',
  },
  {
    value: 'Old Danish Pointer',
    label: 'Old Danish Pointer',
  },
  {
    value: 'Old English Sheepdog',
    label: 'Old English Sheepdog',
  },
  {
    value: 'Old English Terrier',
    label: 'Old English Terrier',
  },
  {
    value: 'Old German Shepherd Dog',
    label: 'Old German Shepherd Dog',
  },
  {
    value: 'Old Time Farm Shepherd',
    label: 'Old Time Farm Shepherd',
  },
  {
    value: 'Olde English Bulldogge',
    label: 'Olde English Bulldogge',
  },
  {
    value: 'Otterhound',
    label: 'Otterhound',
  },
  {
    value: 'Pandikona Hunting Dog',
    label: 'Pandikona Hunting Dog',
  },
  {
    value: 'Paisley Terrier',
    label: 'Paisley Terrier',
  },
  {
    value: 'Papillon',
    label: 'Papillon',
  },
  {
    value: 'Parson Russell Terrier',
    label: 'Parson Russell Terrier',
  },
  {
    value: 'Patterdale Terrier',
    label: 'Patterdale Terrier',
  },
  {
    value: 'Pekingese',
    label: 'Pekingese',
  },
  {
    value: 'Perro de Presa Canario',
    label: 'Perro de Presa Canario',
  },
  {
    value: 'Perro de Presa Mallorquin',
    label: 'Perro de Presa Mallorquin',
  },
  {
    value: 'Peruvian Hairless Dog',
    label: 'Peruvian Hairless Dog',
  },
  {
    value: 'Phalène',
    label: 'Phalène',
  },
  {
    value: 'Pharaoh Hound',
    label: 'Pharaoh Hound',
  },
  {
    value: 'Phu Quoc Ridgeback',
    label: 'Phu Quoc Ridgeback',
  },
  {
    value: 'Picardy Spaniel',
    label: 'Picardy Spaniel',
  },
  {
    value: 'Plummer Terrier',
    label: 'Plummer Terrier',
  },
  {
    value: 'Plott Hound',
    label: 'Plott Hound',
  },
  {
    value: 'Podenco Canario',
    label: 'Podenco Canario',
  },
  {
    value: 'Pointer',
    label: 'Pointer',
  },
  {
    value: 'Poitevin',
    label: 'Poitevin',
  },
  {
    value: 'Polish Greyhound',
    label: 'Polish Greyhound',
  },
  {
    value: 'Polish Hound',
    label: 'Polish Hound',
  },
  {
    value: 'Polish Hunting Dog',
    label: 'Polish Hunting Dog',
  },
  {
    value: 'Polish Lowland Sheepdog',
    label: 'Polish Lowland Sheepdog',
  },
  {
    value: 'Polish Tatra Sheepdog',
    label: 'Polish Tatra Sheepdog',
  },
  {
    value: 'Pomeranian',
    label: 'Pomeranian',
  },
  {
    value: 'Pont-Audemer Spaniel',
    label: 'Pont-Audemer Spaniel',
  },
  {
    value: 'Poodle',
    label: 'Poodle',
  },
  {
    value: 'Porcelaine',
    label: 'Porcelaine',
  },
  {
    value: 'Portuguese Podengo',
    label: 'Portuguese Podengo',
  },
  {
    value: 'Portuguese Pointer',
    label: 'Portuguese Pointer',
  },
  {
    value: 'Portuguese Water Dog',
    label: 'Portuguese Water Dog',
  },
  {
    value: 'Posavac Hound',
    label: 'Posavac Hound',
  },
  {
    value: 'Pražský Krysařík',
    label: 'Pražský Krysařík',
  },
  {
    value: 'Pudelpointer',
    label: 'Pudelpointer',
  },
  {
    value: 'Pug',
    label: 'Pug',
  },
  {
    value: 'Puli',
    label: 'Puli',
  },
  {
    value: 'Pumi',
    label: 'Pumi',
  },
  {
    value: 'Pungsan Dog',
    label: 'Pungsan Dog',
  },
  {
    value: 'Pyrenean Mastiff',
    label: 'Pyrenean Mastiff',
  },
  {
    value: 'Pyrenean Shepherd',
    label: 'Pyrenean Shepherd',
  },
  {
    value: 'Rajapalayam',
    label: 'Rajapalayam',
  },
  {
    value: 'Rampur Greyhound',
    label: 'Rampur Greyhound',
  },
  {
    value: 'Rastreador Brasileiro',
    label: 'Rastreador Brasileiro',
  },
  {
    value: 'Ratonero Bodeguero Andaluz',
    label: 'Ratonero Bodeguero Andaluz',
  },
  {
    value: 'Ratonero Murciano de Huerta',
    label: 'Ratonero Murciano de Huerta',
  },
  {
    value: 'Ratonero Valenciano',
    label: 'Ratonero Valenciano',
  },
  {
    value: 'Rat Terrier',
    label: 'Rat Terrier',
  },
  {
    value: 'Redbone Coonhound',
    label: 'Redbone Coonhound',
  },
  {
    value: 'Rhodesian Ridgeback',
    label: 'Rhodesian Ridgeback',
  },
  {
    value: 'Rottweiler',
    label: 'Rottweiler',
  },
  {
    value: 'Russian Spaniel',
    label: 'Russian Spaniel',
  },
  {
    value: 'Russian Toy',
    label: 'Russian Toy',
  },
  {
    value: 'Russian Tracker',
    label: 'Russian Tracker',
  },
  {
    value: 'Russo-European Laika',
    label: 'Russo-European Laika',
  },
  {
    value: 'Russell Terrier',
    label: 'Russell Terrier',
  },
  {
    value: 'Sabueso Español',
    label: 'Sabueso Español',
  },
  {
    value: 'Sabueso fino Colombiano',
    label: 'Sabueso fino Colombiano',
  },
  {
    value: 'Saint-Usuge Spaniel',
    label: 'Saint-Usuge Spaniel',
  },
  {
    value: 'Sakhalin Husky',
    label: 'Sakhalin Husky',
  },
  {
    value: 'Saluki',
    label: 'Saluki',
  },
  {
    value: 'Samoyed',
    label: 'Samoyed',
  },
  {
    value: 'Sapsali',
    label: 'Sapsali',
  },
  {
    value: 'Šarplaninac',
    label: 'Šarplaninac',
  },
  {
    value: 'Schapendoes',
    label: 'Schapendoes',
  },
  {
    value: 'Schillerstövare',
    label: 'Schillerstövare',
  },
  {
    value: 'Schipperke',
    label: 'Schipperke',
  },
  {
    value: 'Standard Schnauzer',
    label: 'Standard Schnauzer',
  },
  {
    value: 'Schweizer Laufhund',
    label: 'Schweizer Laufhund',
  },
  {
    value: 'Schweizerischer Niederlaufhund',
    label: 'Schweizerischer Niederlaufhund',
  },
  {
    value: 'Scotch Collie',
    label: 'Scotch Collie',
  },
  {
    value: 'Scottish Deerhound',
    label: 'Scottish Deerhound',
  },
  {
    value: 'Scottish Terrier',
    label: 'Scottish Terrier',
  },
  {
    value: 'Sealyham Terrier',
    label: 'Sealyham Terrier',
  },
  {
    value: 'Segugio Italiano',
    label: 'Segugio Italiano',
  },
  {
    value: 'Seppala Siberian Sleddog',
    label: 'Seppala Siberian Sleddog',
  },
  {
    value: 'Serbian Hound',
    label: 'Serbian Hound',
  },
  {
    value: 'Serbian Tricolour Hound',
    label: 'Serbian Tricolour Hound',
  },
  {
    value: 'Seskar Seal Dog',
    label: 'Seskar Seal Dog',
  },
  {
    value: 'Shar Pei',
    label: 'Shar Pei',
  },
  {
    value: 'Shetland Sheepdog',
    label: 'Shetland Sheepdog',
  },
  {
    value: 'Shiba Inu',
    label: 'Shiba Inu',
  },
  {
    value: 'Shih Tzu',
    label: 'Shih Tzu',
  },
  {
    value: 'Shikoku',
    label: 'Shikoku',
  },
  {
    value: 'Shiloh Shepherd',
    label: 'Shiloh Shepherd',
  },
  {
    value: 'Siberian Husky',
    label: 'Siberian Husky',
  },
  {
    value: 'Silken Windhound',
    label: 'Silken Windhound',
  },
  {
    value: 'Sinhala Hound',
    label: 'Sinhala Hound',
  },
  {
    value: 'Skye Terrier',
    label: 'Skye Terrier',
  },
  {
    value: 'Sloughi',
    label: 'Sloughi',
  },
  {
    value: 'Slovak Cuvac',
    label: 'Slovak Cuvac',
  },
  {
    value: 'Slovakian Rough-haired Pointer',
    label: 'Slovakian Rough-haired Pointer',
  },
  {
    value: 'Slovenský Kopov',
    label: 'Slovenský Kopov',
  },
  {
    value: 'Smålandsstövare',
    label: 'Smålandsstövare',
  },
  {
    value: 'Small Greek Domestic Dog',
    label: 'Small Greek Domestic Dog',
  },
  {
    value: 'Soft-Coated Wheaten Terrier',
    label: 'Soft-Coated Wheaten Terrier',
  },
  {
    value: 'South Russian Ovcharka',
    label: 'South Russian Ovcharka',
  },
  {
    value: 'Southern Hound',
    label: 'Southern Hound',
  },
  {
    value: 'Spanish Mastiff',
    label: 'Spanish Mastiff',
  },
  {
    value: 'Spanish Water Dog',
    label: 'Spanish Water Dog',
  },
  {
    value: 'Spinone Italiano',
    label: 'Spinone Italiano',
  },
  {
    value: 'Sporting Lucas Terrier',
    label: 'Sporting Lucas Terrier',
  },
  {
    value: 'St. Bernard',
    label: 'St. Bernard',
  },
  {
    value: "St. John's water dog",
    label: "St. John's water dog",
  },
  {
    value: 'Stabyhoun',
    label: 'Stabyhoun',
  },
  {
    value: 'Staffordshire Bull Terrier',
    label: 'Staffordshire Bull Terrier',
  },
  {
    value: 'Stephens Cur',
    label: 'Stephens Cur',
  },
  {
    value: 'Styrian Coarse-haired Hound',
    label: 'Styrian Coarse-haired Hound',
  },
  {
    value: 'Sussex Spaniel',
    label: 'Sussex Spaniel',
  },
  {
    value: 'Swedish Lapphund',
    label: 'Swedish Lapphund',
  },
  {
    value: 'Swedish Vallhund',
    label: 'Swedish Vallhund',
  },
  {
    value: 'Taigan',
    label: 'Taigan',
  },
  {
    value: 'Taiwan Dog',
    label: 'Taiwan Dog',
  },
  {
    value: 'Talbot',
    label: 'Talbot',
  },
  {
    value: 'Tamaskan Dog',
    label: 'Tamaskan Dog',
  },
  {
    value: 'Teddy Roosevelt Terrier',
    label: 'Teddy Roosevelt Terrier',
  },
  {
    value: 'Telomian',
    label: 'Telomian',
  },
  {
    value: 'Tenterfield Terrier',
    label: 'Tenterfield Terrier',
  },
  {
    value: 'Terceira Mastiff',
    label: 'Terceira Mastiff',
  },
  {
    value: 'Thai Bangkaew Dog',
    label: 'Thai Bangkaew Dog',
  },
  {
    value: 'Thai Ridgeback',
    label: 'Thai Ridgeback',
  },
  {
    value: 'Tibetan Mastiff',
    label: 'Tibetan Mastiff',
  },
  {
    value: 'Tibetan Spaniel',
    label: 'Tibetan Spaniel',
  },
  {
    value: 'Tibetan Terrier',
    label: 'Tibetan Terrier',
  },
  {
    value: 'Tornjak',
    label: 'Tornjak',
  },
  {
    value: 'Tosa',
    label: 'Tosa',
  },
  {
    value: 'Toy Bulldog',
    label: 'Toy Bulldog',
  },
  {
    value: 'Toy Fox Terrier',
    label: 'Toy Fox Terrier',
  },
  {
    value: 'Toy Manchester Terrier',
    label: 'Toy Manchester Terrier',
  },
  {
    value: 'Toy Trawler Spaniel',
    label: 'Toy Trawler Spaniel',
  },
  {
    value: 'Transylvanian Hound',
    label: 'Transylvanian Hound',
  },
  {
    value: 'Treeing Cur',
    label: 'Treeing Cur',
  },
  {
    value: 'Treeing Tennessee Brindle',
    label: 'Treeing Tennessee Brindle',
  },
  {
    value: 'Treeing Walker Coonhound',
    label: 'Treeing Walker Coonhound',
  },
  {
    value: 'Trigg Hound',
    label: 'Trigg Hound',
  },
  {
    value: 'Tweed Water Spaniel',
    label: 'Tweed Water Spaniel',
  },
  {
    value: 'Tyrolean Hound',
    label: 'Tyrolean Hound',
  },
  {
    value: 'Uruguayan Cimarron',
    label: 'Uruguayan Cimarron',
  },
  {
    value: 'Valencian Ratter',
    label: 'Valencian Ratter',
  },
  {
    value: 'Vanjari Hound',
    label: 'Vanjari Hound',
  },
  {
    value: 'Villano de Las Encartaciones',
    label: 'Villano de Las Encartaciones',
  },
  {
    value: 'Vizsla',
    label: 'Vizsla',
  },
  {
    value: 'Volpino Italiano',
    label: 'Volpino Italiano',
  },
  {
    value: 'Welsh Corgi, Cardigan',
    label: 'Welsh Corgi, Cardigan',
  },
  {
    value: 'Welsh Corgi, Pembroke',
    label: 'Welsh Corgi, Pembroke',
  },
  {
    value: 'Welsh Sheepdog',
    label: 'Welsh Sheepdog',
  },
  {
    value: 'Welsh Springer Spaniel',
    label: 'Welsh Springer Spaniel',
  },
  {
    value: 'Welsh Terrier',
    label: 'Welsh Terrier',
  },
  {
    value: 'West Highland White Terrier',
    label: 'West Highland White Terrier',
  },
  {
    value: 'West Siberian Laika',
    label: 'West Siberian Laika',
  },
  {
    value: 'Westphalian Dachsbracke',
    label: 'Westphalian Dachsbracke',
  },
  {
    value: 'Wetterhoun',
    label: 'Wetterhoun',
  },
  {
    value: 'Whippet',
    label: 'Whippet',
  },
  {
    value: 'White Shepherd',
    label: 'White Shepherd',
  },
  {
    value: 'Wirehaired Pointing Griffon',
    label: 'Wirehaired Pointing Griffon',
  },
  {
    value: 'Wirehaired Vizsla',
    label: 'Wirehaired Vizsla',
  },
];

let Pet = {
  list: (type) =>
    new Promise((resolve, reject) => {
      var filter = data;
      if (type === 'Dog' || type === 'Cat') {
        filter = filter.filter((post) => {
          return post.type === type.toLowerCase();
        });
      }
      resolve(filter);
    }),
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
  LastFourPet: (type) => {
    return new Promise(async (resolve, reject) => {
      var filter = await Pet.list(type);
      resolve(filter.slice(0, 4));
    });
  },
};

export let PetBreeds = {
  catBreeds: () => new Promise((resolve, reject) => resolve(catBreeds)),
  dogBreeds: () => new Promise((resolve, reject) => resolve(dogBreeds)),
};

export default Pet;
