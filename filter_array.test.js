const arrayFilter = require('./task/task_02');

describe(
    'Filtering array', 
    () => {
    const testCase = [
        {
            in: [1,2,3,4,5,6,7,8,9,0],
            expected: [1,3,5,7,9]
        }, 
        {
            in: ['Audi', 'WV', 'Toyota', 'Tesla', 'BMW', 'ZAZ'],
            expected: ['Audi', 'Toyota', 'BMW']
        }
    ];
    testCase.forEach(test => {
        it(
            `Entry value: ${test.in}, expected value: ${test.expected}`,
            ()=> {
                const res = arrayFilter(test.in);
                expect(res).toEqual(test.expected);
            }
        )
    })
});
