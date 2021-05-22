const TypeGuard = (): void => {
  function doSomething(x: number | string) {
    if (typeof x === 'string') {
      console.log(x.substr(1));
    }
  }
  doSomething("dosomething");

  class Foo {
    foo = 123;
    common = '123';
  }
  class Bar {
    bar = 123;
    common = '123';
  }
  function doStuff(arg: Foo | Bar) {
    if (arg instanceof Foo) {
      console.log(arg.foo);
    }
    if (arg instanceof Bar) {
      console.log(arg.bar);
    } else {
      console.log(arg.common);
    }
  }
  doStuff(new Foo());
  doStuff(new Bar());

  interface A {
    x: number;
  }
  interface B {
    y: number;
  }
  function doStuff2(q: A | B) {
    if ('x' in q) {
      console.log(q);
    } else {
      console.log(q);
    }
  }
  let a: B = {
    y: 2
  };
  doStuff2(a)

  type TriState = 'yes' | 'no' | 'unknown';
  function logOutState(state: TriState) {
    if (state == 'yes') {
      console.log('User selected yes');
    } else if (state == 'no') {
      console.log('User selected no');
    } else {
      console.log('User has not made a selection yet');
    }
  }
  logOutState('yes');

  type Foo2 = {
    kind: 'foo',
    foo: number
  }
  type Bar2 = {
    kind: 'bar',
    bar: number
  }
  function doStuff3(arg: Foo2 | Bar2) {
    if (arg.kind === 'foo') {
      console.log(arg.foo);
    } else {
      console.log(arg.bar);
    }
  }
  let foo2: Foo2 = {
    kind: 'foo',
    foo: 3
  }
  doStuff3(foo2);

  interface Foo3 {
    foo: number;
    common: string;
  }
  interface Bar3 {
    bar: number;
    common: string;
  }
  function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
  }
  function doStuff4(arg: Foo3 | Bar3) {
    if (isFoo(arg)) {
      console.log(arg.foo, arg.common);
    } else {
      console.log(arg.bar, arg.common);
    }
  }
  doStuff4({ foo: 1234, common: '12222' });
  doStuff4({ bar: 3333, common: '33333' });
}

export default TypeGuard;