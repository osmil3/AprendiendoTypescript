export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger={
    name: 'Oscar',
}

const passenger2: Passenger={
    name: 'Fernando',
    children: ['Natalia', 'Javiera']
}

const printChildren = (passenger: Passenger) => {
    
    const howManyChildren = passenger.children?.length;
    console.log(passenger.name, howManyChildren);

}

printChildren(passenger2);