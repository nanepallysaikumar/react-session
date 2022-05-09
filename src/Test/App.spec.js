import {add} from "./Sample";


describe("Test Sample class",() => {
    test("Test add method giving two input values", () => {
        expect(add(2,3)).toEqual(5)
    });
    test("Test add method giving two input values", () => {
        expect(add(1,3)).toEqual(4)
    })
})