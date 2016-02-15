'use strict';

export const variableChars = ['a', 'd', 'n', 'p'];
export const equalityHtmlEntities = ['&gt;', '&lt;', '='];
export const operationsMap = new Map([
    [ '+', '+' ],
    [ '-', '-' ],
    [ '*', 'x' ],
    [ '/', '&divide;']
]);

class EquationGenerator {

    constructor() {
    }

    getEquation() {
        //return 'a + 5 = 12';
        let variable = this._getVariable();
        let operator = this._getOperator();
        let operand = Math.floor((Math.random() * 99) + 1);
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

    _getResult(variable, operand, operator) {
        return eval(variable.value + operator.operation + operand);
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
            value : Math.floor((Math.random() * 99) + 1)
        };
    }

    toString() {
        return '()';
    }
}

export default EquationGenerator;