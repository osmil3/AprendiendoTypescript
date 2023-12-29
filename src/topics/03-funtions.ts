
// function agregarnumeros(a:any, b:any){
//     return a+b;
// }

// const sumarnumerosflecha = (a:number, b:number) => {
//     return `${a+b}`;
// }

// function multiplay(primero:number, segundo?:number, base:number=2){
//     return primero*base;
// }

// const result= agregarnumeros(1,2)
// const resultado2= sumarnumerosflecha(1,2)
// const MUltiresultado: number = multiplay(5)

interface Personaje {
    name: string;
    vida: number;
    mostrarVida:() =>void;
}

const VidaPersonaje = (personaje: Personaje, cantidad: number) =>{
    
    personaje.vida += cantidad;
}

const enemigo: Personaje={
    name: 'Enemigo',
    vida: 50,
    mostrarVida() {
        console.log(`Puntos de vida ${this.vida}`);
    }
}

VidaPersonaje(enemigo,10);

enemigo.mostrarVida();

export {};