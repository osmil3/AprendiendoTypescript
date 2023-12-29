//juego con personajes con diferentes habilidades para probar interface
const habilidades: string[] = ['ataque','contraataque','curacion'];

interface Personaje {
    nombre: string;
    vida: number;
    habilidades: string[];
    origen?: string;
}

const enemigo:Personaje ={
    nombre:'enemigo',
    vida: 100,
    habilidades: ['ataque','contraataque'],

};

enemigo.origen= 'Barrancas';

console.table(enemigo);

export{};