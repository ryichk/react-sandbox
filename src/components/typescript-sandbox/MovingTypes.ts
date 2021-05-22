namespace importing {
  export class Foo { }
}
import Bar = importing.Foo;

class Foo3 {
  foo: number;
}
declare let foo3: Foo3;

const MovingTypes = (): void => {
  // class Foo {}
  // var Bar = Foo;
  // var bar: Bar;

  const bar: Bar = {
    key: 'value'
  };
  console.log(bar);

  const foo2 = 123;
  let bar2: typeof foo2;
  bar2 = 123;
  console.log(bar2);

  let bar3: typeof foo3.foo;
  bar3 = 123;
  // bar3 = '333' error
  console.log(bar3);

  const foo4 = 'hello typescript';
  let bar4: typeof foo4;
  bar4 = 'hello typescript';
  // bar4 = 'hello world'; error
  console.log(bar4);

  const colors = {
    red: 'red',
    blue: 'blue'
  }
  type Colors = keyof typeof colors;
  let color: Colors;
  color = 'red';
  color = 'blue';
  // color = 'green'; error
  console.log(color);
}

export default MovingTypes;