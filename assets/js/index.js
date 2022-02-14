import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/animales.js"

let arrayanimales = {};
let cardanimales = [];

(async() => {
    try {
        const res = await fetch("animales.json")
        const { animales } = await res.json()

        animales.forEach((item) => {
            arrayanimales[item.name] = item
        });
        //  console.log(arrayanimales)
    } catch (error) {
        console.log(error)
    }
})();
//console.log(arrayanimales)

const formulario = document.querySelector("#formulario")
const animales = document.querySelector("#Animales")
const animal = document.querySelector("#animal")
const edad = document.getElementById("edad")
const comentarios = document.getElementById("comentarios")
const preview = document.querySelector("#preview ")


//const animal1 = new Leon("Leoncito", 3, "leon.png", "Gigante", "")
//console.log(animal1);

animal.addEventListener("change", (e) => {
    // console.log(e.target.value);
    preview.innerHTML = `
    <img src="assets/imgs/${arrayanimales[e.target.value].imagen}" alt="" class="img-fluid">
    `
});


const pintaranimales = () => {
    animales.innerHTML = "";
    cardanimales.forEach((item) => {
        animales.innerHTML += `
        <article class="card m-1">
        <img src="assets/imgs/${item.img}" alt="" class="img-fluid ps-2" id="imgcard">
        <div class="card-body">
            <h5>${item.nombre}</h5>
            <p>${item.edad}</p>
            <p>${item.comentarios}</p>
            <p>${item.sonido}</p>
        </div>
    </article>  
        `
    })
}

formulario.addEventListener("submit", event => {
    event.preventDefault()
        // console.log(animal.value)
    if (animal.value === "Leon") {
        const leon1 = new Leon(animal.value, edad.value, arrayanimales[animal.value].imagen, comentarios.value, arrayanimales[animal.value].sonido);
        cardanimales.push(leon1);
    }

    if (animal.value === "Lobo") {
        const lobo1 = new Leon(animal.value, edad.value, arrayanimales[animal.value].imagen, comentarios.value, arrayanimales[animal.value].sonido);
        cardanimales.push(lobo1);

    }

    if (animal.value === "Oso") {
        const oso1 = new Oso(animal.value, edad.value, arrayanimales[animal.value].imagen, comentarios.value, arrayanimales[animal.value].sonido);
        cardanimales.push(oso1);

    }

    if (animal.value === "Serpiente") {
        const serpiente1 = new Serpiente(animal.value, edad.value, arrayanimales[animal.value].imagen, comentarios.value, arrayanimales[animal.value].sonido);
        cardanimales.push(serpiente1);

    }

    if (animal.value === "Aguila") {
        const aguila1 = new Aguila(animal.value, edad.value, arrayanimales[animal.value].imagen, comentarios.value, arrayanimales[animal.value].sonido);
        cardanimales.push(aguila1);
    }
    pintaranimales();
});