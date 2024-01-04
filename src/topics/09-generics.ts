

export function whatsMytype<T>( argument: T):T{

    return argument;
}

const amIString = whatsMytype('Hola Mundo');
const amINUmber = whatsMytype([1,2,3,4,5]);
console.log(amIString.split(' '))
console.log(amINUmber.length)