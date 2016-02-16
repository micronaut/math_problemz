import { expect, assert } from 'chai';
import EquationGenerator from '../src/js/EquationGenerator';
import { operationsMap, variableChars, equalityHtmlEntities } from '../src/js/EquationGenerator';
//import * as assert from 'assert';

describe('Equation Generator', () => {
    let generator, equation;

    beforeEach(() => {
        generator = new EquationGenerator();
        equation = generator.getEquation();
    });

    it('should return an equation containing a variable', () => {
        expect(equation).to.have.property('variable');
        var equationVariable = equation.variable;

        expect(equationVariable.character).to.satisfy(function(c) {
            return variableChars.indexOf(c) >= 0;
        });

        expect(equationVariable).to.have.property('value');
        expect(equationVariable.value).to.be.a('number');
    });

    it('should return an equation containing an operator', () => {
        expect(equation).to.have.property('operator');
        let eqOperator = equation.operator;

        expect(eqOperator.operation).to.satisfy(function(o) {
            return ['+', '-', '*', '/'].indexOf(o) >= 0;
        });
        expect(eqOperator.displayable).to.equal(operationsMap.get(eqOperator.operation));
    });

    it('should return an equation containing an operand', () => {
        expect(equation).to.have.property('operand');
        expect(equation.operand).to.be.a('number');
    });

    it('should return an equation containing an equality operator', () => {
        expect(equation).to.have.property('equality');
        expect(equation.equality).to.satisfy(function(e) {
            return equalityHtmlEntities.indexOf(e) >= 0;
        });
    });

    it('should return an equation containing a result', () => {
        expect(equation).to.have.property('result');
        expect(equation.result).to.be.a('number');
    });

    it('should return a valid result', () => {
        let {variable : {character, value}, operator : {displayable, operation}, operand, equality, result} = generator.getEquation();
        let calculatedResult = eval(value + operation + operand);

        expect(calculatedResult).to.equal(result);
    });
});