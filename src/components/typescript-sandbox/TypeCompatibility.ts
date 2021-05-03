const TypeCompatibility = (): void => {
  class Animal {
    constructor(public name: string) {}
  }
  class Cat extends Animal {
    meow() {}
  }

  let animal = new Animal('animal');
  let cat = new Cat('poti');

  animal = cat;
  // cat = animal;  // error: cat extends animal

  let animalArr: Animal[] = [animal];
  let catArr: Cat[] = [cat];

  // catArr = animalArr;
  catArr[0].meow();

  animalArr = catArr;
  animalArr.push(new Animal('another animal'));
  // catArr.forEach(c => c.meow());
}

export default TypeCompatibility;