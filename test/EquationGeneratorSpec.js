let expect = require('chai').expect;
//let generator = require('../dist/js/EquationGenerator');
import EquationGenerator from '../dist/js/EquationGenerator';
let assert = require('assert');

describe("Should return true", () => {
    it('should show true equals true', () => {
        assert.equal(true, true);
    });
});

describe("Equation Generator", () => {
    it('should return 5', () => {
        let generator = new EquationGenerator();
        assert.equal(generator.foobar(), 5);
    });
});