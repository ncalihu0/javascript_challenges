// let PPI = {
//     name: 'John',
//     SSN: "123-456-789",



//     getName() {
//         return this.name;
//     },

//     getSSN() {
//         return this.SSN;
//     }
// }

// console.log(PPI.name);

function theDatabase(person, code) {
    let PPI = {
        name: person,
        ssn: code,
    };

    function getName() {
        return PPI.name;
    }

    function getSSN() {
        return PPI.ssn;
    }

    return {
        getName: getName,
        getSSN: getSSN
    }


};

let patient2 = theDatabase("john", "123-456-789");

console.log(patient2.name);
console.log(patient2.ssn);

console.log(patient2.getName());
console.log(patient2.getSSN());






