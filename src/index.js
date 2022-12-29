import './css/styles.css';
import Person from './person';

localStorage.planet = 'earth';

function compareAges(e, person){
  e.preventDefault()
  const targetAge = document.getElementById('target-age').value;
  const targetPerson = new Person(parseInt(targetAge));
  document.getElementById('target-age-btn').classList.add('hidden');
  document.getElementById('second-age-label').innerHTML = `Your target age on Earth: ${targetPerson.ages.get('Earth')}<br>`
  const ageMap = person.ageDifference(targetPerson);
  fillTimeDeltas(ageMap);
  document.getElementById('right-chev').addEventListener('click', nextPlanet);
  document.getElementById('left-chev').addEventListener('click', prevPlanet);
  document.getElementById('right-chev').classList.remove('dim');
  document.getElementById('left-chev').classList.remove('dim');
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
  document.getElementById('target-age').focus();
});

function nextPlanet() {
  document.getElementById(localStorage.planet).classList.add('hidden');
  switch (localStorage.planet) {
    case 'earth':
      document.getElementById('mars').classList.remove('hidden');
      document.getElementById('arrow').classList.add('hidden');
      localStorage.planet = 'mars';
  }
}

function prevPlanet() {
  document.getElementById(localStorage.planet).classList.add('hidden');
  switch (localStorage.planet) {
    case 'mars':
      document.getElementById('earth').classList.remove('hidden');
      document.getElementById('arrow').classList.remove('hidden');
      localStorage.planet = 'earth';
  }
}