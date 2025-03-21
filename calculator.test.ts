import {add} from './StringCalculator.ts'

describe('test calcultor', ()=>{
    test('Empty string returns 0', ()=>{
        expect(add('')).toBe(0)
    })
})