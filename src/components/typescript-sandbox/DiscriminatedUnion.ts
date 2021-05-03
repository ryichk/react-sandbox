const DiscriminatedUnion = ():void => {
  interface Square {
    kind: 'square';
    size: number;
  }
  interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }
  interface Circle {
    kind: 'circle';
    radius: number;
  }
  type Shape = Square | Rectangle | Circle;

  function area(s: Shape) {
    if (s.kind === 'square') {
      return s.size * s.size;
    } else if (s.kind === 'rectangle') {
      return s.width * s.height;
    } else if (s.kind === 'circle') {
      return Math.PI * (s.radius **2);
    } else {
      // const _exhaustiveCheck: never = s;
      // return _exhaustiveCheck;
      return assertNever(s);
    }
  }
  function assertNever(x: never): never {
    throw new Error(`${x} Unexpected value. Should have been never.`);
  }
  const square: Shape = {
    kind: 'square',
    size: 5
  }
  const rectangle: Shape = {
    kind: 'rectangle',
    width: 4,
    height: 7,
  }
  const circle: Shape = {
    kind: 'circle',
    radius: 20
  }
  const square_area = area(square);
  const rectangle_area = area(rectangle);
  const circle_area = area(circle);
  console.log(square_area, rectangle_area, circle_area);

  type DTO =
  | {
      version: undefined,
      name: string,
    }
  | {
      version: 1,
      firstName: string,
      lastName: string,
    }
  | {
      version: 2,
      firstName: string,
      middleName: string,
      lastName: string,
  }
  // function printDTO(dto: DTO) {
  //   if (dto.version == null) {
  //     console.log(dto.name);
  //   } else if (dto.version == 1) {
  //     console.log(dto.firstName, dto.lastName);
  //   } else if (dto.version == 2) {
  //     console.log(dto.firstName, dto.middleName, dto.lastName);
  //   } else {
  //     return assertNever(dto);
  //   }
  // }
  const dto0: DTO = {
    version: undefined,
    name: 'dto0'
  }
  const dto1: DTO = {
    version: 1,
    firstName: 'dto',
    lastName: 'one'
  }
  const dto2: DTO = {
    version: 2,
    firstName: 'data',
    middleName: 'transfer',
    lastName: 'object2'
  }
  // printDTO(dto0);
  // printDTO(dto1);
  // printDTO(dto2);
  console.log(dto0);
  console.log(dto1);
  console.log(dto2);
}

export default DiscriminatedUnion;