class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Sub class called Student:
class Student extends Person {
  constructor(name, age, subject) {
    // 'super' refers to the parent class (Person in this example)
    super(name, age);
    this.subject = subject;
  }
  hasSubject() {
    // returns true if the student has a subject (double neg)
    return !!this.subject;
  }
  getDescription() {
    // Overrides getDescription call *if they have a subject.
    let description = super.getDescription();
    if (this.hasSubject()) {
      description += ` Their subject is: ${this.subject}.`;
    }
    return description;
  }
}
// Changing Student to Person ignores the Student sub class.
// const me = new Student("Bob", 50, "Computer Science");
// // console.log(me);
// console.log(me.getGreeting());
// // console.log(me.hasSubject());
// console.log(me.getDescription());

// Sub class called Traveller:
class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  // Overrides getGreeting call *if they have a homeLocation.
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I live in ${this.homeLocation}.`;
    }
    return greeting;
  }
}
const me = new Traveller("Bob", 50, "London");
console.log(me.getGreeting());
