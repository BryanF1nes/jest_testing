import { calculator } from '../src/utils/calculator'

test("Does calculator exist", () => {
    expect(calculator);
})

test("Add Method", () => {
    expect(calculator.add(2, 2)).toEqual(4)
    expect(calculator.add(12, 20)).toEqual(32)
})

test("Subtract method", () => {
    expect(calculator.sub(4, 2)).toEqual(2)
    expect(calculator.sub(10, 2)).toEqual(8)
})

test("Multiplication method", () => {
    expect(calculator.multiply(5, 2)).toEqual(10)
    expect(calculator.multiply(20, 2)).toEqual(40)
})

test("Division method", () => {
    expect(calculator.divide(10, 5)).toEqual(2)
    expect(calculator.divide(100, 10)).toEqual(10)
})