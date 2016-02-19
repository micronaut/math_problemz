'use strict';

export const variableChars = ['a', 'd', 'n', 'p'];
export const equalityHtmlEntities = ['&gt;', '&lt;', '='];
export const operationsMap = new Map([
    [ '+', '+' ],
    [ '-', '-' ],
    [ '*', 'x' ],
    [ '/', '&divide;']
]);

export default class EquationGenerator {

    constructor() {
        this.randomNumber = this.random();
    }

    getEquation() {
        //return 'a + 5 = 12';
        let variable = this._getVariable();
        let operator = this._getOperator();
        let operand = this.randomNumber.next().value;
        let equality = equalityHtmlEntities[Math.floor(Math.random() * equalityHtmlEntities.length)];
        let result = this._getResult(variable, operand, operator);
        return {
            variable : variable,
            operator : operator,
            operand : operand,
            equality : equality,
            result : result
        };
    }

    *random() {
        const cond = true;
        while(cond) {
            yield Math.floor((Math.random() * 99) + 1);
        }
    }

    _getResult({c, value}, operand, {d, operation}) {
        return eval(value + operation + operand);
    }

    _getOperator() {
        let operators = [...operationsMap.keys()];
        let operator = operators[Math.floor(Math.random() * operators.length)];
        return {
            displayable : operationsMap.get(operator),
            operation : operator
        };
    }

    _getVariable() {
        return {
            character : variableChars[Math.floor(Math.random() * variableChars.length)],
            value : this.randomNumber.next().value
        };
    }

    toString() {
        return '()';
    }
}