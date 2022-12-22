const multipliers = {
  mercury: 0.24,
  venus: 0.62,
  mars: 1.88,
  jupiter: 11.86
}


export default class Person {
  constructor (age) {
    this.ages = new Map([
      ['Mercury', Math.round(age / multipliers.mercury)],
      ['Venus', Math.round(age / multipliers.venus)],
      ['Earth', age],
      ['Mars', Math.round(age / multipliers.mars)],
      ['Jupiter', Math.round(age / multipliers.jupiter)]
    ]);
  }
  ageDifference (other) {
    return new Map();
  }

}