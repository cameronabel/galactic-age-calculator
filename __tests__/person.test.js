import Person from "../src/person";

describe('Person', () => {
  test('It should return a Person object with an age map.', () => {
    const person = new Person();
    expect(person.ages).toBeInstanceOf(Map);
  });
  test('The person.ages Map should initialize with the Earth age input into the constructor.', () => {
    const person = new Person(25);
    expect(person.ages.get('earth')).toEqual(25);
  });
});

