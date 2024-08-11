export const PI = 3.14;
export const E = 2.71;

export function calculateArea(radius: number): number {
    return PI * radius * radius;
}

export function calculateCircumference(radius: number): number {
    return 2 * PI * radius;
}
