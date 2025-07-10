const countData = require('../src/domain/count');

const testData = [
  {
    name: 'A',
    people: [
      {
        name: 'B',
        animals: [{ name: 'Dog' }, { name: 'Cat' }]
      }
    ]
  }
];

describe('countData', () => {
  it('adds counts to country and people names', () => {
    expect(countData(testData)).toEqual([
      {
        name: 'A [1]',
        people: [
          {
            name: 'B [2]',
            animals: [{ name: 'Dog' }, { name: 'Cat' }]
          }
        ]
      }
    ]);
  });
});
