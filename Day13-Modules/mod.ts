export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
      throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}


type PersonO = {
  name: string;
  age: number;
  getInfo(): string;
};

export const personO:PersonO = {
  name: "Furqan",
  age: 23,
  getInfo() {
    return `${this.name} is ${this.age} years old`;
  },
};
