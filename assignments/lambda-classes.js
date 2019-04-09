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
        console.log(`Hello, my name is ${this.name}, and I am from ${this.location}.`);
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
        console.log(`Today, we are learning about ${subjToday}!`);
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

class ProjectManagers extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }

    standUp (slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @${slackChannel} standy times!`);
    }

    debugsCode (studentObj,subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}!`);
    }
}

// this.name = props.name;
// this.age = props.age;
// this.location = props.location;
// this.gender = props.gender;
// this.previousBackground = studentInfo.previousBackground;
// this.className = studentInfo.className;
// this.favSubjects = studentInfo.favSubjects;

//Instructor Traits

// this.specialty = teach.specialty;
// this.favLanguage = teach.favLanguage;
// this.catchPhrase = teach.catchPhrase;


const Nguyen = new Student ({
    name:"Nguyen",
    age:24,
    location:"New Orleans",
    gender:"M",
    previousBackground:"Biology/Education",
    className:"CS19",
    favSubjects:"HTML/CSS/JS/Biology"
});

console.log(Nguyen);

const Josh = new Instructor ({
    specialty:"HTML/CSS/JS",
    favLanguage:"JS",
    catchPhrase:"How it do?"
})

Josh.demo("CSS");
Josh.grade(Nguyen,"CSS");

