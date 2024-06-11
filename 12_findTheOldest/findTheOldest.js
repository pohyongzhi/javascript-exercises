const findAge = (person) => {
    let yearOfBirth = person.yearOfBirth;
    let yearOfDeath = person.yearOfDeath;

    if (yearOfDeath === undefined) {
        let today = new Date();

        return today.getFullYear() - yearOfBirth;
    }

    return yearOfDeath - yearOfBirth;
};

const findTheOldest = function (people) {
    let oldestAge = 0;
    let oldestPerson = undefined;

    // Find the oldest age
    people.forEach((p) => {
        let currAge = findAge(p);

        if (currAge > oldestAge) {
            oldestAge = currAge;
            oldestPerson = p;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
