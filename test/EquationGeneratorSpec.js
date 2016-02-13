import { expect } from 'chai';
import EquationGenerator from '../dist/js/EquationGenerator';
import * as assert from 'assert';

describe("Should return true", () => {
    it('should show true equals true', () => {
        assert.equal(true, true);
    });
});

describe("Equation Generator", () => {
    it('should return 5', () => {
        let generator = new EquationGenerator();

        assert.equal(generator.foobar(), 5);
        expect(generator.foobar()).to.equal(5);
    });

    it('should return a function', () => {
        let generator = new EquationGenerator();

        expect(generator.getEquation()).to.equal('a + 5 = 12');
    });
});