const makeFirstCapital = require('./task/task_04');

describe('Testing first capital letter', () => {
    const testCase = [
        {
            entry: 'figaro',
            out: 'Figaro'
        },
        {
            entry: 'africa',
            out: 'Africa'
        },
        {
            entry: 'nix',
            out: 'Nix'
        }
    ];
    testCase.forEach(test => {
it(`Entered word: ${test.entry}, expected output: ${test.out}`,
()=> {
    const res = makeFirstCapital(test.entry);
    expect(res).toBe(test.out);
})
    });
});
