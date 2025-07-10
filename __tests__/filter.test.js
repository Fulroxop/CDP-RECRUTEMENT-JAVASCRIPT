const filterData = require('../src/domain/filter');

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

describe('filterData', () => {
  it('filters animals by pattern', () => {
    expect(filterData(testData, 'Dog')).toEqual([
      {
        name: 'A',
        people: [
          { name: 'B', animals: [{ name: 'Dog' }] }
        ]
      }
    ]);
  });

  it('removes empty people and countries', () => {
    expect(filterData(testData, 'Zebra')).toEqual([]);
  });
});
