// import { useState } from "react";
import { useCalculatorContext } from "../components/context.tsx";
import { Digit } from "../components/Digit";

export const sortCalculation = (calculation: any[]) => {
    const context = useCalculatorContext();
    // const precedence: { [key: string]: number } = {
    //     "+": 1,
    //     "-": 1,
    //     "×": 2,
    //     "÷": 2,
    //     "%": 2,
    //     "x!": 3,
    //     "xʸ": 3,
    //     "√": 3,
    //     "ln": 3,
    //     "log": 3,
    //     "sin": 3,
    //     "cos": 3,
    //     "tan": 3,
    // };

    // Join all numbers in between operators as one number in string format.
    // This is to handle cases like [2, 3, ×, 4] where we want to treat 2, 3 as 23 so the calculation will be 23 * 4.
    for (let i = 0; i < calculation.length; i++) {
        if (i===0) context.setUpdatedCalculation([]);
        const element = calculation[i];
        const newElement = Digit({
                key: element.key,
                type: element.type,
                value: element.value});
        if (element.props.type === "number") {
            newElement.props.value = newElement.props.value + element.props.value;
            context.setUpdatedCalculation([...context.updatedCalculation, newElement]);
        }
        else if (element.type === "operator") {
            context.setUpdatedCalculation([...context.updatedCalculation, newElement]);
        }
    }

    for (let i = 0; i < context.updatedCalculation.length; i++) {
        const element = context.updatedCalculation[i];
        if (element.type === "operator"){
            element.props.precedence
        }
    }
    return context.updatedCalculation;
    // return calculation.sort((a, b) => {
    //     return (precedence[a] || 0) - (precedence[b] || 0);
    // });
}

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

export const percentage = (a: number): number => {
    return a / 100;
}

export const factorial = (n: number): number => {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

export const power = (base: number, exponent: number): number => {
    return Math.pow(base, exponent);
}

export const squareRoot = (n: number): number => {
    if (n < 0) {
        throw new Error("Square root is not defined for negative numbers");
    }
    return Math.sqrt(n);
}

export const naturalLog = (n: number): number => {
    if (n <= 0) {
        throw new Error("Natural logarithm is not defined for non-positive numbers");
    }
    return Math.log(n);
}

export const logarithm = (n: number, base: number): number => {
    if (n <= 0 || base <= 0 || base === 1) {
        throw new Error("Logarithm is not defined for non-positive numbers or base 1");
    }
    return Math.log(n) / Math.log(base);
}

export const sine = (angle: number): number => {
    return Math.sin(angle * (Math.PI / 180)); // Convert angle to radians
}

export const cosine = (angle: number): number => {
    return Math.cos(angle * (Math.PI / 180)); // Convert angle to radians
}

export const tangent = (angle: number): number => {
    return Math.tan(angle * (Math.PI / 180)); // Convert angle to radians
}

export const pi = (): number => {
    return Math.PI;
}

export const eulerNumber = (): number => {
    return Math.E;
}

export const equals = (calc:any[]): number => {
    calc = sortCalculation(calc);
    let total = 0;
    calc.forEach(element => {
        if (element.type === "number") {
            total += parseFloat(element.value);
        } else if (element.type === "operator") {
            // Handle operator logic here
            // For simplicity, we assume the last number is the total
            // and apply the operator to it
            console.log(`Applying operator: ${element.value}`);
        }
    });
    console.log("Equals function called");
    console.log("");
    return 1;
}

export const operators = () => {
    const context = useCalculatorContext();
    return {
        "C": ()=>{
            // "C" resets the entire calculation (all clear)
            console.log("Clear clicked");
            context.setCalculation([]);
            context.setDisplayedDigits([]);
        },
        "CE": ()=>{
            // "CE" clears the current entry only
            console.log("Clear Entry clicked");
            context.setDisplayedDigits([]);
            // Remove digits from calculation array until the last operator
            const operatorsSet = new Set(["+", "-", "×", "÷", "%", "xʸ"]);
            let calc = [...context.calculation];
            while (calc.length > 0 && !operatorsSet.has(calc[calc.length - 1])) {
            calc.pop();
            }
            context.setCalculation(calc);
            context.calculation.forEach(element => {
                console.log("value in digit: ", element.value)
            });
            console.log("Updated calculation array: ", calc);
            console.log("Updated displayed array: ", []);
        },
        "(": ()=>{
            console.log("Left Parenthesis clicked");
        },
        ")": ()=>{
            console.log("Right Parenthesis clicked");
        },
        "×": ()=>{
            console.log("Multiply clicked");
        },
        "-": ()=>{
            console.log("Subtract clicked");
        },
        "+": ()=>{
            console.log("Add clicked");
        },
        "=":()=>{
            console.log("Equals clicked");
            return equals(context.calculation);
        },
        "÷": ()=>{
            console.log("Divide clicked");
        },
        "%":()=>{
            console.log("Percentage clicked");
        },
        "π":()=>{
            console.log("Pi clicked");
        },
        "√":()=>{
            console.log("Square Root clicked");
        }, 
        "x!":()=>{
            console.log("Factorial clicked");
        },
        "xʸ":()=>{
            console.log("Power clicked");
        },
        "ln":()=>{
            console.log("Natural Log clicked");
        },
        "e":()=>{
            console.log("Euler's Number clicked");
        },
        "sin":()=>{
            console.log("Sine clicked");
        },
        "cos":()=>{
            console.log("Cosine clicked");
        },
        "tan":()=>{
            console.log("Tangent clicked");
        },
        "log":()=>{
            console.log("Logarithm clicked");
            // Typically, on a scientific calculator, "log" expects the user to input a number and then press the "log" key to compute log base 10 of that number.
            // For example: input "100", then press "log" to get "2".
            return logarithm(1, 2); // Example usage, replace with actual logic
        },
        "+/-":()=>{
            console.log("Plus/Minus clicked");
        }
    };
}