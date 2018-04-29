function sum(a, b) {
  return a + b;
}

// Named export - we can havve multiple exports like this
// we must call the method by tis name
// the import statement must be like  { sub }
export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

const PI = 3.14;

export { mult as multiply, div, PI };

// Default method at file, we can only have one of it
// we can call it with the name we want and we dont need {}
export default sum;
