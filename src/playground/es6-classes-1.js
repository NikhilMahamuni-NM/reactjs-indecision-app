
class Person {              // es6 class defination
    constructor(name="Anonymous", age=0) {     // es6 constructor for class
        this.name = name;
        this.age = age
    }

    getGreeting() {         // es6 function defination for class
        return 'Hi! GOod MorNinG, I am ' + this.name + '!';
    }


    getIntro() {         // es6 function defination for class
        return `My Name is ${this.name}`; // template string
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old !!`
    }
}

class Student extends Person {      // subclass
    constructor(name, age, major) { // overriding parent constructor to add subclass values
        super(name,age);            // acessing values of parent class constructor
        this.major = major;
    }

    hasMajor() {                    // adding new functions to subclass
        return !!this.major;
    }

    getDescription() {              // overriding parent function
        let description = super.getDescription(); // getting values from parent function output

        if (this.hasMajor()) {
            description += " and is in CSE...."
        }

        return description;
    }
}

const me = new Student('Java', 33, 'CSE');  // object creation of classes

console.log(me.getDescription());
console.log(me.hasMajor())

console.log("-----------------------------------------------")
const other = new Student();
console.log(other.getDescription());