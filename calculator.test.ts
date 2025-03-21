import {add} from './StringCalculator'

describe('test calcultor', ()=>{
    test('Empty string returns 0', ()=>{
        expect(add('')).toBe(0)
    })
    test('single number should return the same number', ()=>{
        expect(add('1')).toBe(1)
    })
})