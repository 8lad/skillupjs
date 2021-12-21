const filterByLength = require('./task/test_05');

describe('Filtering arrays by their lenghts', () => {
    const testCase = [
        {
            enter: ['mi', 'car', 'pepsi', 'horse', 'cucumber'],
            out: ['pepsi', 'horse', 'cucumber']
        },
        {
            enter: ['yo', 'room', 'si', 'empty', 'flex'],
            out: ['room', 'empty', 'flex']
        }
    ];
    testCase.forEach(test => {
        it(
            `Entering array: ${test.enter}, expecting output: ${test.out}`,
            ()=> {
                const res = filterByLength(test.enter);
                expect(res).toEqual(test.out);
            }
        )
    })
})
