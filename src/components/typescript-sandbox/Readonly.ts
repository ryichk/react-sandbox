const Readonly = (): void => {
  function foo(config: {
    readonly bar: number,
    readonly bas: number
  }) {
    console.log(config, config.bar, config.bas);
  }
  const config = { bar: 1222, bas: 3333 };
  foo(config);

  class Foo {
    readonly bar = 2233;
    readonly baz: string;
    constructor() {
      this.baz = "hello readonly!";
    }
  }
  const fooInsatnce = new Foo;
  console.log(fooInsatnce.baz);

  type Piyo = {
    bar: number;
    bas: number;
  }
  type PiyoReadonly = Readonly<Piyo>;
  let piyo: Piyo = {bar: 2334, bas: 33444};
  let piyoReadonly: PiyoReadonly = {bar: 345, bas: 311};
  piyo.bar = 12233;
  console.log(piyo, piyoReadonly);

  let readonlyArray: ReadonlyArray<number> = [1, 2, 3];
  console.log(readonlyArray[0]);

  class Person {
    firstName: string = "John";
    lastName: string = "Doe";
    get fullName() {
      return this.firstName + this.lastName;
    }
  }
  const person = new Person();
  console.log(person.fullName);

  let hoge: {
    readonly bar: number;
  } = {
    bar: 1222
  };
  function iMutateHoge(foo: { bar: number }) {
    foo.bar = 34444;
  }
  iMutateHoge(hoge);
  console.log(hoge.bar);
}

export default Readonly;