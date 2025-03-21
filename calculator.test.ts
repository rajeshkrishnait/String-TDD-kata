import {add} from './StringCalculator'

describe('test calcultor', ()=>{
    test('Empty string returns 0', ()=>{
        expect(add('')).toBe(0)
    })
    test('single number should return the same number', ()=>{
        expect(add('1')).toBe(1)
    })
    test('two numbers should return the sum of the two numbers', ()=>{
        expect(add('1, 4')).toBe(5)
    })
    test('allow new line format with \n', ()=>{
        expect(add('1,4\n4')).toBe(9)
    })
    test('supports custom delimeters', ()=>{
        expect(add('//;\n1;2')).toBe(3)
        expect(add('//]\n1]2')).toBe(3)
    })
    test("throws an error for negative numbers", () => {
        expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
    });
    test('numbers bigger than 1000 should be ignored', ()=>{
        expect(add('1, 1001')).toBe(1)
        expect(add('1,\n 1001')).toBe(1)
        expect(add('//;\n1; 1001')).toBe(1)
    })
    test("handles multi-character delimiters", () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });
})