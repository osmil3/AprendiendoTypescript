interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details:Details
}

interface Details {
    author: string;
    year: number;
}

const AudioPlayer: AudioPlayer={
    audioVolumen: 90,
    songDuration: 36,
    song: "expresso",
    details:{
        author: 'twice',
        year: 2021
    }
}

const song = 'FILA'

const{song:anotherSong, songDuration:duration, details} = AudioPlayer;
const {author} = details;

// console.log('song', anotherSong)
// console.log('Song', AudioPlayer.song)
// console.log('Author:', author);

const [,,sana= 'not found']: string[] = ['mina', 'momo', 'sana']

console.error('Personaje 3:', sana)

export{};