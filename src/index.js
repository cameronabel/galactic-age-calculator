import './css/styles.css';
import Person from './person';

function compareAges(e, person){
  e.preventDefault()
  const targetAge = document.getElementById('target-age').value;
  const targetPerson = new Person(parseInt(targetAge));
  document.getElementById('target-age-btn').classList.add('hidden');
  document.getElementById('second-age-label').innerHTML = `Your target age on Earth: ${targetPerson.ages.get('Earth')}<br>`
  const ageMap = person.ageDifference(targetPerson);
  fillTimeDeltas(ageMap);
}

function fillTimeDeltas() {}

document.getElementById('person-info').addEventListener('submit', e => {
  e.preventDefault();
  const ageField = document.getElementById('age');
  const person = new Person(parseInt(ageField.value));
  document.getElementById('age').classList.add('hidden');
  document.getElementById('age-btn').classList.add('hidden');
  document.getElementById('age-label').innerHTML = `Your age on Earth: ${person.ages.get('Earth')}<br>`
  document.getElementById('second-age-form').classList.remove('hidden');
  document.getElementById('second-age-form').addEventListener('submit', (e) => {
    compareAges(e, person);
  });
});