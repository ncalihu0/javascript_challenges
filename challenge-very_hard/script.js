//create a template person in order to store our data of name, job, age and methods
// classes shoukd always have constructor's 
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;

        this.exercise = function () {
            return "Running is fun-said no one ever";
        }
        this.fetchJob = function () {
            return this.name + " is a " + this.job;
        }
    }
}

// create another class using extend because it will be the child of the person class
class Programmer extends Person {
    constructor(name, job, age, languages) {
        // essentially allows us to call the parent constructor (Person) and allow us to access the properties and methods
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }


    completeTask() {
        this.busy = false;
    }
    acceptNewTask() {
        this.busy = true;
    }
    offerNewTask() {
        if (this.busy) {
            return this.name + " can't accept any new task right now.";
        } else {
            return this.name + " would love to take on a new responsibility."
        }
    }

    //push method allows us to input new elements onto our array
    learnLanguage(languages) {
        this.languages.push(languages);
    }

    //join method makes it so it return a new array based on the (seperator). in our case it adds a comma to our array
    listLanguage() {
        return this.languages.join(", ");
    }
}



const person1 = new Person("harold", 'backend engineer', 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);


//manny only shows 2 languages. only reading R from the parenthesis
const c3 = new Programmer("Manny", "SysOps", 31, [("HTML", "CSS", "JS", "R")]);


c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);


console.log(person1.exercise());
console.log(person1.fetchJob());

// when completeTask is commented out, it display that the programmer can't take a new task. vice versa with the other one
// c1.completeTask();
c1.acceptNewTask();


console.log(c1.offerNewTask());