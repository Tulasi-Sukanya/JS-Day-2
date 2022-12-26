// 1.By using object litreal:{};

    let personn={
        name:"ram",
        age:23
    };
    console.log(personn)
    console.log(personn.name)
    console.log(personn.age)

// 2.By using new keyword
    let person= new object({
        name:"sam",
        age:20
    });
    console.log(person)
    console.log(person.name)
    console.log(person.age)
// 3.By using constructor function.

    function Person(){
        this.name="Shiv",
        this.age=22
        this.hobbies=['swim','reading books','browsing net']
    }
    const data = new Person();
    console.log(Person)
    console.log(Person.name)
    console.log(Person.age)
    console.log(Person.hobbies[1])

// function constructor
function user(name,age){
    this.name=name;
    this.age=age;
}
var user1= new user('pinky',22);
var user2=new user('sweety',21);
// callbacks
function person1(myFunction){
    return myFunction();
}
function person2(){
    return ("Hi Everyone!!!")
}
let persondata=person1(person2);
console.log(persondata);