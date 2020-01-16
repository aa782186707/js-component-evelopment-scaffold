class Animal {
    // static a = 2;
    static foo() {
        return 2;
    }
    constructor(type) {
        this.type = type;
    }
    eat() {
        console.log(this.type + ' can eat.');
    }
}
class Dog extends Animal {
    eat() {
        console.log(this.type + ' can‘t eat ');
    }
}
export default Animal;
console.log(Dog.i);
console.log('adadas')
