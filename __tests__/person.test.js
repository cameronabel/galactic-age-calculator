import Person from "../src/person";

describe('Person', () => {
  test('It should return a Person object with an age map.', () => {
    const person = new Person();
    expect(person.ages).toBeInstanceOf(Map);
  });
});

