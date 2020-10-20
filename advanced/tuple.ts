let tom: [string, number] = ['Tom', 25];

let tom2: [string, number];
tom2[0] = 'Tom';

let tom3: [string, number];
// tom3 = ['Tom']; // Property '1' is missing in type '[string]' but required in type '[string, number]'

let tom4: [string, number];
tom = ['Tom', 25];
tom.push('male');
// tom.push(true); // Argument of type 'true' is not assignable to parameter of type 'string | number'