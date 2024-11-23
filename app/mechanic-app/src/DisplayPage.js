import React, { useState } from 'react';
import "./display.css"



const people = [
  { name: 'Alice', age: 25, occupation: 'Engineer' },
  { name: 'Bob', age: 30, occupation: 'Developer' },
  { name: 'Charlie', age: 35, occupation: 'Designer' },
  { name: 'Alice', age: 25, occupation: 'Engineer' },
  { name: 'Bob', age: 30, occupation: 'Developer' },
  { name: 'Charlie', age: 35, occupation: 'Designer' },
];

function Profile({ person }) {
  return (
    <>
    <div className='man'>
      <h2>{person.name}</h2>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
    </>
  );
}

function Display() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  function handlePersonClick(person) {
    setSelectedPerson(person);
  }
  

  return (
    <>
    <div className='section'>
      <h1>People Profiles</h1>
      <ul>
        {people.map((person, index) => (
          <li key={index} onClick={() => handlePersonClick(person)}>
            {person.name}
          </li>
        ))}
      </ul>
      {selectedPerson && <Profile person={selectedPerson} />}
    </div>
    
    </>
  );
}

export default Display;
