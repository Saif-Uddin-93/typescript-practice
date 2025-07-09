export const add = (a: number, b: number): number => {
    return a + b;
}

export const subtract = (a: number, b: number): number => {
    return a - b;
}

export const multiply = (a: number, b: number): number => {
    return a * b;
}

export const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

export const sortCalculation = (calculation: string[]): string[] => {
    const precedence: { [key: string]: number } = {
        "+": 1,
        "-": 1,
        "×": 2,
        "÷": 2,
        "%": 2,
        "x!": 3,
        "xʸ": 3,
        "√": 3,
        "ln": 3,
        "log": 3,
        "sin": 3,
        "cos": 3,
        "tan": 3
    };

    return calculation.sort((a, b) => {
        return (precedence[a] || 0) - (precedence[b] || 0);
    });
}