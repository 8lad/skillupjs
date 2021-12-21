const reversString = require( './task/task_01');

// test(
//     'Checking string reverse',
//     ()=> {
//         expect(reversString('hello www')).toBe('www olleh');
//     }
// ); 

describe('My checking',

() => {
    const testCase = [
        {
            inString: 'hello',
            expected: 'olleh'
        },
        {
            inString: 'finally',
            expected: 'yllanif'
        },
        {
            inString: 'lobanov',
            expected: 'vonabol'
        }
    ];
    testCase.forEach(test => {
        it(
            `Entry string: ${test.inString}, expected: ${test.expected}`,
            ()=> {
                const res = reversString(test.inString);
                expect(res).toBe(test.expected);
            }
        )
    }) 
});
