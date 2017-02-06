import { CalculatorActions } from '../reducers';

var numbersArr = [];
for (let i=0; i<10; i++) {
    var obj = {name: i, action: i};
    numbersArr.push(obj);
}
numbersArr.push({
                name: '+',
                action: '+'
            },
            {
                name: '-',
                action: '-'
            },
            {
                name: '*',
                action: '*'
            },
            {
                name: '/',
                action: '/'
            },
            {
                name: '=',
                action: '='
            },
            {
                name: '(',
                action: '('
            },
            {
                name: ')',
                action: ')'
            },
            {
                name: 'C',
                action: 'C'
            }

            );

export default {
    numbers: numbersArr
    };