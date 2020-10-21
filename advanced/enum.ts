enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
enum Color {Red, Green, Blue = "blue".length};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Color["Blue"]); // 4

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];  //编译后 var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];