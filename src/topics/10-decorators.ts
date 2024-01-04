function CLassDecorator(
    constructor: any ){
    return class extends constructor {
        newPropety = 'New Propeti';
        hello = 'override';
    }


}


@CLassDecorator
class SUperClass {
    public myPropety: string = 'Abc123';
    print(){
        console.log('Hola Mundo')
    }
}

console.log(SUperClass);

const myClass = new SUperClass();
console.log(myClass);
