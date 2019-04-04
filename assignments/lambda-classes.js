// CODE here for your Lambda Classes
// Testing

class Person {
    constructor (props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor (teach) {
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }

    demo (subjToday) {
        `Today, we are learning about ${subjToday}!`;
    }

    grade (studentObj,subjStudent) {
        console.log(`${studentObj.name} receives a perfect score on ${subjStudent}!`);

    }
}

class Student extends Person {
    constructor (studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;

    }

    listSubjects () {
        console.log(this.favSubjects);
    }

    PRAssignment (studentSubj) {
        console.log(`${this.name} has begun Sprint Challenge on ${studentSubj}!`);
    }

    sprintChallenge (studentSubj) {
        console.log(`${this.name} has begun Sprint Challenge on ${studentSubj}!`);
    }
}
