interface Person {
    name: string;
    age: number;
    text: string | number;
    greet(): string;
}

const personInstance: Person = {
    name: "Froshi",
    age: 28,
    text: "custom message here, okay?",
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old. Message: ${this.text}`;
    }
};

console.log(personInstance.greet());


