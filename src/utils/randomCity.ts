const randomCity = () => {
  const cities = ['Antananarivo', 'Paris', 'New York', 'Tokyo', 'London'];
  return cities[Math.floor(Math.random() * cities.length)]; //   Math.random() * (max - min) + min;
};

export default randomCity;
