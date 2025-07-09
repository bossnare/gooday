const cities = [
  'Antananarivo',
  'Paris',
  'New York',
  'Tokyo',
  'London',
  'Mandritsara',
  'Antsiranana',
  'Mahajanga',
  'Toamasina',
  'Fianarantsoa',
  'Toliara',
  'Maevatanana',
];
let current: string | null = null;

const randomCity = () => {
  let city;

  do {
    city = cities[Math.floor(Math.random() * cities.length)];
  } while (city === current);

  current = city;
  return city;
};

export default randomCity;
