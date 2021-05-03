const IndexSignatre = (): void => {
  let foo: any = {};
  foo['hello'] = 'world';
  console.log(foo['hello']);

  class Foo {
    constructor(public message: string){};
    log() {
      console.log(this.message);
    }
  }
  let fooInstance: any = {}
  fooInstance['hello'] = new Foo('world');
  fooInstance['hello'].log();

  let obj = {
    toString() {
      console.log('toString called');
      return 'Hello';
    }
  }
  let foo2: any = {};
  foo2[obj.toString()] = 'world';
  console.log(foo2[obj.toString()]);
  console.log(foo2['Hello']);

  let foo3: {
    [index: string]: {message: string}
  } = {};
  foo3['a'] = {
    message: 'some message'
  };
  console.log(foo3['a'].message);

  interface NestedCSS {
    color?: string;
    nest?: {
      [selector: string]: NestedCSS;
    }
  }
  const example: NestedCSS = {
    color: 'red',
    nest: {
      '.subclass': {
        color: 'blue'
      }
    }
  }
  console.log(example);

  // type FieldState = {
  //   value: string
  // }
  // type FormState = {
  //   isValid: boolean
  // } & {
  //   [fieldName: string]: FieldState
  // }
  // declare const foo4: FormState;
  // const isValidBool = foo4.isValid;
  // const somethingFieldState = foo4['something'];
  // const bar: FormState = {
  //   isValid: false
  // }
}

export default IndexSignatre;