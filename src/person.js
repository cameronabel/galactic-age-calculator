export default class Person {
  constructor (age) {
    this.ages = new Map([
      ['Mercury', Math.round(age / .24)],
      ['Earth', age]
    ]);
  }
}