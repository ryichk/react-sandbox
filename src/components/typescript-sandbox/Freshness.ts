const Freshness = (): void => {
  function logIfHasName(something: { name?: string }) {
    if (something.name) {
      console.log(something.name);
    }
  }
  const person = {
    name: 'matt',
    job: 'being awesome',
  };
  const animal = {
    name: 'cow',
    diet: 'vegan, but has milk of own species',
  };
  logIfHasName(person);
  logIfHasName(animal);
};

export default Freshness;
