export default class Person {
  constructor (age) {
    this.ages = new Map([
      ['Mercury', Math.round(age / 0.24)],
      ['Venus', Math.round(age / 0.62)],
      ['Earth', age],
      ['Mars', Math.round(age / 1.88)],
      ['Jupiter', Math.round(age / 11.86)]
    ]);
  }
}