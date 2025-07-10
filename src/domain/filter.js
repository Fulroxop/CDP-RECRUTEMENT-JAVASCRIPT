/**
 * Filter animals by pattern and return the filtered data structure.
 * Empty people and countries are removed.
 */
function filterData(data, pattern) {
  return data
    .map(country => {
      const people = country.people
        .map(person => {
          const animals = person.animals.filter(animal =>
            animal.name.includes(pattern)
          );
          if (animals.length) {
            return { ...person, animals };
          }
          return null;
        })
        .filter(Boolean);
      if (people.length) {
        return { ...country, people };
      }
      return null;
    })
    .filter(Boolean);
}

module.exports = filterData;
