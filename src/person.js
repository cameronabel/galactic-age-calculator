export default class Person {
  constructor (age) {
    this.ages = new Map([
      ['Mercury', Math.round(age / 0.24)],
      ['Earth', age]
    ]);
  }
}