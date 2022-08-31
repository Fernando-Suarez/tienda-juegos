import spiderman from '../img/spiderman.jpg'
import elderRing from '../img/elderRing.jpg'
import halo from '../img/halo.jpg'
import godOfWar from '../img/godOfWar.jpg'
import granTurismo from '../img/granTurismo.jpg'
import warhammer from '../img/warhammer.jpg'
import ascent from '../img/ascent.jpg'
import residentEvil from '../img/residentEvil.jpg'
import hogwarts from '../img/hogwarts.jpg'
import sifu from '../img/sifu.jpg'
import mario from '../img/mario.jpg'
import smashBros from '../img/smashBros.jpg'

const juegos = [{
    id: 1,
    title:"Spider-Man" ,
    description: "Marvel's Spider-Man es un videojuego de acción y aventura basado en el popular superhéroe hómonimo de la editorial Marvel Comics.",
    price: 1200,
    image: spiderman,
    stock: 5,
    category: "ps4"
},
{
    id:2,
    title:"Elder Ring",
    description:"Elden Ring es un videojuego de rol de acción que surge de una colaboración entre el director y diseñador Hidetaka Miyazaki y el novelista George R. R. Martin",
    price:1500,
    image:elderRing,
    stock: 10,
    category:"ps4"
},
{
    id:3,
    title:"Halo Infinite",
    description:"Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios.",
    price: 1400,
    image:halo,
    stock: 7,
    category: "Xbox"
},
{
    id: 4,
    title: "God of War" ,
    description: "God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment." ,
    price: 1000 ,
    image: godOfWar,
    stock: 6,
    category: "ps4",
},
{
    id: 5,
    title: "Gran Turismo 7" ,
    description: " Gran Turismo 7 es un videojuego de simulación de carreras de 2022 desarrollado por Polyphony Digital y publicado por Sony Interactive Entertainment." ,
    price: 1600,
    image: granTurismo,
    stock: 12,
    category: "ps5" ,
},
{
    id: 6,
    title: "Warhammer 40,000: Darktide" ,
    description: "Warhammer 40,000: Darktide es un videojuego de acción-aventura en primera persona creado por la compañía sueca Fatshark .",
    price: 1350,
    image: warhammer,
    stock: 4 ,
    category:"xbox" ,
},
{
    id: 7,
    title: "The Ascent" ,
    description: "The Ascent es un videojuego de rol de acción con temática cyberpunk desarrollado por el estudio de juegos independiente sueco Neon Giant y publicado por Curve Digital.",
    price: 1600,
    image: ascent,
    stock: 8,
    category:"xbox" ,
},
{
    id: 8,
    title:"Resident Evil Village" ,
    description: "Resident Evil Village es un videojuego shooter en primera persona perteneciente al género de los videojuegos de terror desarrollado por Capcom.",
    price: 1800,
    image: residentEvil ,
    stock:11 ,
    category:"ps5" ,
},
{
    id: 9,
    title:"Hogwarts Legacy" ,
    description: "Hogwarts Legacy está ambientado en la segunda mitad del siglo XIX en el Universo del Mundo Mágico de Harry Potter creado por la escritora J. K. Rowling" ,
    price:1650 ,
    image: hogwarts ,
    stock: 3 ,
    category: "ps5",
},
{
    id: 10,
    title: "Sifu",
    description: " Ambientado en la China moderna, los jugadores controlan al hijo del sifu de una escuela de artes marciales que busca vengarse de los responsables de la muerte de su padre.",
    price:1500 ,
    image: sifu,
    stock: 9,
    category: "ps5",
},
{
    id:11,
    title: "Mario Kart 8",
    description: "Mario Kart 8 es un videojuego de carreras desarrollado y publicado por Nintendo para la consola Wii U. Es la undécima entrega de la serie Mario Kart, octava en consolas de Nintendo.",
    price: 1350,
    image: mario,
    stock: 5,
    category: "nintendo"
},
{
    id:12,
    title: "Super Smash Bros",
    description: "Super Smash Bros. Ultimate es un videojuego de lucha desarrollado por Sora Ltd. y Bandai Namco Entertainment y distribuido por Nintendo para la consola Nintendo Switch. ",
    price: 1200,
    image: smashBros ,
    stock: 12,
    category: "nintendo"
}
]
//se crea una promesa que simula traer de una base de datos despues de 3 segundos 
export const getJuegos = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(juegos);
        reject(err => console.log(err))
    },3000)
})