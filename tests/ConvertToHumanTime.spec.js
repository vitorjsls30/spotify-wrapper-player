import { expect } from 'chai';
import ConvertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {

    // 0ms => 0:00
    it('should return 0:00 when duration is 0ms', () => {
        expect(ConvertToHumanTime(0)).to.be.equal('0:00');
    });

    // 1000ms => 1s
    it('should return 0:01 when duration is 1000ms', () => {
        expect(ConvertToHumanTime(1000)).to.be.equal('0:01');
    });
    
    // 11000 => 0:11
    it('should return 0:11 when duration is 11000ms', () => {
        expect(ConvertToHumanTime(11000)).to.be.equal('0:11');
    });
    
    // 60000ms => 1:00
    it('should return 1:00 when duration is 60000ms', () => {
        expect(ConvertToHumanTime(60000)).to.be.equal('1:00');
    });
});