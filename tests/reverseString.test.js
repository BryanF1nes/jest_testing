import reverseString from "../src/utils/reverseString"

test("Does reverse string exist", () => {
    expect(reverseString)
})

test("Takes in a string and returns the reversed string", () => {
    expect(reverseString("hello")).toMatch("olleh")
})