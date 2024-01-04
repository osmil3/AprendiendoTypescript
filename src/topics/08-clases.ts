export class Person {
    // public name:string;
    // public addres: string;

    constructor(
        public name: string,
        private address: string = 'No addres'
    ){}
}

export class hero {
    //public person: Person;
        constructor(
            public alterEgo: string,
            public age: number,
            public realName: string,
            public person: Person,
        ){
           //this. person = new Person(realName);
        }
}

const toño = new Person('Tony', 'New York')
const bebedor = new hero ('ironman', 45, 'Tony' ,toño);
console.log(bebedor)