/**
 * Add counts to country and people names.
 */
function countData(data) {
  return data.map(country => {
    const people = country.people.map(person => ({
      ...person,
      name: `${person.name} [${person.animals.length}]`
    }));
    return {
      ...country,
      name: `${country.name} [${country.people.length}]`,
      people
    };
  });
}

module.exports = countData;
