enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const Enum = (): void => {
  enum AnimalFlags {
    None = 0,
    HasClaws = 1 << 0,
    CanFly = 1 << 1,
  }
  type Animal = {
    flags: AnimalFlags;
  };

  function printAnimalAbilities(animal: Animal) {
    const animalFlags = animal.flags;
    if (animalFlags & AnimalFlags.HasClaws) {
      console.log('animal has claws');
    }
    if (animalFlags & AnimalFlags.CanFly) {
      console.log('animal can fly');
    }
    if (animalFlags == AnimalFlags.None) {
      console.log('nothing');
    }
  }
  let animal: Animal = { flags: AnimalFlags.None };
  printAnimalAbilities(animal);
  animal.flags |= AnimalFlags.HasClaws;
  printAnimalAbilities(animal);
  animal.flags |= AnimalFlags.CanFly;
  printAnimalAbilities(animal);
  animal.flags &= ~AnimalFlags.HasClaws;
  printAnimalAbilities(animal);

  const mon = Weekday.Monday;
  const sun = Weekday.Sunday;
  console.log(Weekday.isBusinessDay(mon));
  console.log(Weekday.isBusinessDay(sun));
};

export default Enum;
