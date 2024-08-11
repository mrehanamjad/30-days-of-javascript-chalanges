// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getGreeting(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    
    setAge(age:number){
        this.age;
    }

    getAge():number{
        return this.age;
    }
}

const person = new Person('Rehan',22)
console.log(person.getGreeting());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
person.setAge(12)
console.log(person.getAge())

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person{
    studentID:string;
    static studentCount:number = 0;
    constructor(name: string, age: number,id:string){
        super(name,age)
        this.studentID = id;
        Student.studentCount++;
    }
    getID() {return this.studentID}

    getGreeting(): string {
        return `Hi,My name is ${this.name} and my student Id is ${this.studentID} and i am ${this.age} years old`
    }
}

const s1 = new Student('Rehan',20,"23-CS-65")
console.log(s1.getID());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log(s1.getGreeting());

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person2 {
    static genericGreeting():string{
        return 'Welcome Sir!'
    }
}

console.log(Person2.genericGreeting())

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
    const s2 = new Student("Abdul",14,"24-IT-2");
    console.log(Student.studentCount);
    
// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class PersonTwo {
    fname:string;
    lname:string;
    constructor(fname:string,lname:string) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullName(){
        return `your full name is ${this.fname} ${this.lname}`
    }

    setFname(fname:string){
        this.fname = fname
    }

    setlname(Lname:string){
        this.lname = Lname
    }

}

const p2 = new PersonTwo('Rehan','Amjad');
console.log(p2.getFullName());

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
p2.setFname('Furqan')
console.log(p2.getFullName());

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
    class Account {
        private balance:number = 0;
        constructor(){
            console.log('Account created successfully, Your balance is RS.'+this.balance);
        }

        Withdraw(amount:number) {
            if(this.balance >= amount){
                this.balance--;
                return `Amount Withdraw: Rs.${amount} , Balance remaining RS.${this.balance}`
            }
            if(this.balance < amount) return `you have Rs.${this.balance} in your account`
        }

        deposit(amount:number){
            this.balance +=amount;
            return `You have successfully deposited Rs.${amount} to your account, Now you Current Balance is Rs.${this.balance}`
        }

    }
// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const myAccount = new Account();
console.log(myAccount.deposit(20000))
console.log(myAccount.Withdraw(30000))
console.log(myAccount.Withdraw(3000))
