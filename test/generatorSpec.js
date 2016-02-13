import { square } from '../dist/js/generator'
import { expect } from 'chai';

describe("square", () => {
    it('should return the square', () => {

        expect(square(3)).to.equal(9);
    });
});