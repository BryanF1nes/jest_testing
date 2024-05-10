import capitalize from "../src/utils/capitalize";

test("Does capitalize function exist", () => {
  expect(capitalize);
});

test("Capitalize first letter and return a new string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
