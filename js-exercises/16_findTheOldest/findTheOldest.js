const findTheOldest = function(people) {
  return people.reduce((oldPerson, nextPerson) => {
    const currentYear = new Date().getFullYear();
    const oldPersonDeath = oldPerson.yearOfDeath || currentYear;
    const nextPersonDeath = nextPerson.yearOfDeath || currentYear;

    const oldAge = oldPersonDeath - oldPerson.yearOfBirth;
    const nextAge = nextPersonDeath - nextPerson.yearOfBirth;

    return nextAge > oldAge ? nextPerson : oldPerson;
  });

};


// Do not edit below this line
module.exports = findTheOldest;
