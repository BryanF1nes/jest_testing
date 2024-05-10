const Calculator = () => {
    const add = (a, b) => {
        let result = a + b;
        return result
    }

    const sub = (a, b) => {
        let result = a - b;
        return result;
    }

    const multiply = (a, b) => {
        let result = a * b;
        return result;
    }

    const divide = (a, b) => {
        let result = a / b;
        return result
    }

    return { add, sub, multiply, divide }
}

export const calculator = Calculator();