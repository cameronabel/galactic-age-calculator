import Person from "../src/person";

describe('Person', () => {
  test('It should return a Person object with an age map.', () => {
    const person = new Person();
    expect(person.ages).toBeInstanceOf(Map);
  });
  test('The person.ages Map should initialize with the Earth age input into the constructor.', () => {
    const person = new Person(25);
    expect(person.ages.get('Earth')).toEqual(25);
  });
  test('The person.ages Map should initialize with the Mercury age based upon the input Earth age.', () => {
    const person = new Person(25);
    expect(person.ages.get('Mercury')).toEqual(104);
  });
  test('The person.ages Map should initialize with the Venus age based upon the input Earth age.', () => {
    const person = new Person(25);
    expect(person.ages.get('Venus')).toEqual(40);
  });
  test('The person.ages Map should initialize with the Mars age based upon the input Earth age.', () => {
    const person = new Person(25);
    expect(person.ages.get('Mars')).toEqual(13);
  });
  test('The person.ages Map should initialize with the Jupiter age based upon the input Earth age.', () => {
    const person = new Person(25);
    expect(person.ages.get('Jupiter')).toEqual(2);
  });
});

describe('Person.ageDifference', () => {
  test('When passed an age in the future, it should return a Map object.', () => {
    const person1 = new Person(25);
    const person2 = new Person(30);
    expect(person1.ageDifference(person2)).toBeInstanceOf(Map);
  })
});

