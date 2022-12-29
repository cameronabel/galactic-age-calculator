import './css/styles.css';
import Person from './person';

localStorage.planet = 'Earth';

function compareAges(e, person){
  e.preventDefault();
  const targetAge = document.getElementById('target-age').value;
  const targetPerson = new Person(parseInt(targetAge));
  document.getElementById('target-age-btn').classList.add('hidden');
  document.getElementById('second-age-label').innerHTML = `Your target age on Earth: ${targetPerson.ages.get('Earth')}<br>`;
  fillTimeDeltas(person, targetPerson);
  document.getElementById('right-chev').addEventListener('click', nextPlanet);
  document.getElementById('left-chev').addEventListener('click', prevPlanet);
  document.getElementById('right-chev').classList.remove('dim');
  document.getElementById('left-chev').classList.remove('dim');
}

function fillTimeDeltas(person, targetPerson) {
  const planets = ['Mercury', 'Venus', 'Mars', 'Jupiter'];
  planets.forEach(function(planet) {
    const div = document.createElement('div');
    div.classList.add('info');
    div.classList.add('hidden');
    div.id = `${planet}-info`;
    const p1 = document.createElement('p');
    p1.append(`On ${planet}, you would be ${person.ages.get(planet)} years old.`);
    div.append(p1);
    const p2 = document.createElement('p');
    const ageDiff = person.ageDifference(targetPerson).get(planet);
    if (ageDiff >= 0) {
      p2.append(`${Math.round(ageDiff)} ${planet} years have yet to pass.`);
    } else {
      p2.append(`${Math.round(ageDiff)} ${planet} years have passed.`);
    }
    
    div.append(p2);
    document.getElementById('info-box').append(div);
  });
}

document.getElementById('person-info').addEventListener('submit', e => {
  e.preventDefault();
  const ageField = document.getElementById('age');
  const person = new Person(parseInt(ageField.value));
  document.getElementById('age').classList.add('hidden');
  document.getElementById('age-btn').classList.add('hidden');
  document.getElementById('age-label').innerHTML = `Your age on Earth: ${person.ages.get('Earth')}<br>`;
  document.getElementById('second-age-form').classList.remove('hidden');
  document.getElementById('second-age-form').addEventListener('submit', (e) => {
    compareAges(e, person);
  });
  document.getElementById('target-age').focus();
});

function nextPlanet() {
  document.getElementById(localStorage.planet).classList.add('hidden');
  document.getElementById(`${localStorage.planet}-info`).classList.add('hidden');
  switch (localStorage.planet) {
  case 'Mercury':
    document.getElementById('Venus').classList.remove('hidden');
    localStorage.planet = 'Venus';
    document.getElementById('left-chev').classList.remove('dim');
    document.getElementById('left-chev').addEventListener('click', prevPlanet);
    break;
  case 'Venus':
    document.getElementById('Earth').classList.remove('hidden');
    document.getElementById('arrow').classList.remove('hidden');
    localStorage.planet = 'Earth';
    break;
  case 'Earth':
    document.getElementById('Mars').classList.remove('hidden');
    document.getElementById('arrow').classList.add('hidden');
    localStorage.planet = 'Mars';
    break;
  case 'Mars':
    document.getElementById('Jupiter').classList.remove('hidden');
    localStorage.planet = 'Jupiter';
    document.getElementById('right-chev').classList.add('dim');
    document.getElementById('right-chev').removeEventListener('click', nextPlanet);
  }
  document.getElementById(`${localStorage.planet}-info`).classList.remove('hidden');
}

function prevPlanet() {
  document.getElementById(localStorage.planet).classList.add('hidden');
  document.getElementById(`${localStorage.planet}-info`).classList.add('hidden');
  switch (localStorage.planet) {
  case 'Venus':
    document.getElementById('Mercury').classList.remove('hidden');
    localStorage.planet = 'Mercury';
    document.getElementById('left-chev').classList.add('dim');
    document.getElementById('left-chev').removeEventListener('click', prevPlanet);
    break;
  case 'Earth':
    document.getElementById('Venus').classList.remove('hidden');
    document.getElementById('arrow').classList.add('hidden');
    localStorage.planet = 'Venus';
    break;
  case 'Mars':
    document.getElementById('Earth').classList.remove('hidden');
    document.getElementById('arrow').classList.remove('hidden');
    localStorage.planet = 'Earth';
    break;
  case 'Jupiter':
    document.getElementById('Mars').classList.remove('hidden');
    localStorage.planet = 'Mars';
    document.getElementById('right-chev').classList.remove('dim');
    document.getElementById('right-chev').addEventListener('click', nextPlanet);
  }
  document.getElementById(`${localStorage.planet}-info`).classList.remove('hidden');
}