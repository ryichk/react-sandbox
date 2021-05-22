const LiteralTypes = (): void => {
  type CardinalDirection =
    | "North"
    | "East"
    | "South"
    | "West";
  function move(distance: number, direction: CardinalDirection) {
    console.log(distance, direction);
  }
  move(1, "North");
  move(3, "East");

  function iTakeFoo(foo: 'foo') {
    console.log(foo)
  }
  type Test = {
    someProp: 'foo'
  }
  const test: Test = {
    someProp: 'foo'
  };
  iTakeFoo(test.someProp);

  function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
      res[key] = key;
      return res;
    }, Object.create(null));
  }
  const Direction = strEnum([
    'North',
    'South',
    'East',
    'West'
  ]);
  type Direction = keyof typeof Direction;
  let sample: Direction;
  sample = Direction.North;
  console.log(sample);
  sample = 'North';
  console.log(sample);
}

export default LiteralTypes;