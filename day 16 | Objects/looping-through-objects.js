// Objects in JavaScript

// Looping Through Objects

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};


// exercise
let spaceship = {
    crew: {
	    captain: { 
	        name: 'Lily', 
	        degree: 'Computer Engineering', 
	        cheerTeam() { console.log('You got this!') } 
	        },
	    'chief officer': { 
	        name: 'Dan', 
	        degree: 'Aerospace Engineering', 
	        agree() { console.log('I agree, captain!') } 
	        },
	    medic: { 
	        name: 'Clementine', 
	        degree: 'Physics', 
	        announce() { console.log(`Jets on!`) } },
	    translator: {
	        name: 'Shauna', 
	        degree: 'Conservation Science', 
	        powerFuel() { console.log('The tank is full!') } 
	        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

// ref
for (let variableName in outerObject.innerObject) {
  console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
};