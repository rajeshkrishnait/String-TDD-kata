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
})