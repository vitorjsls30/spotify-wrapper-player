/* global describe it */
/**
 * Desafio FizzBuzz
 *
 * Write a lib that receives a number and :
 *
 * If the number is divisible by 3, returns fizz
 * If the number is divisible by 5, returns buzz
 * If the number is divisible by 3 and 5 returns fizzbuzz
 * If its anyone multiple, returns the number itself
 */

import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';

describe('Main', () => {
  it('should return "Fizz" when nultiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return "Buzz" when nultiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return "FizzBuzz" when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number itself when multiple of none', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('should return 0 when 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });

});
