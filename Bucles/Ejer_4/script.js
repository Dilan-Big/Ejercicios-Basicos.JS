let animes = [
  "Naruto",
  "Dragon Ball",
  "One Piece",
  "Attack on Titan",
  "Death Note",
  "Demon Slayer",
  "Jujutsu Kaisen",
  "My Hero Academia",
  "Tokyo Ghoul",
  "Fullmetal Alchemist"
];

let animeMasLargo = animes[0];
let animeMasCorto = animes[0];

for (let i = 0; i < animes.length; i++) {
  let nombre = animes[i];


  console.log(nombre + " tiene " + nombre.length + " caracteres");

  if (nombre.length > animeMasLargo.length) {
    animeMasLargo = nombre;
  }

  if (nombre.length < animeMasCorto.length) {
    animeMasCorto = nombre;
  }
}

console.log("El anime con el nombre mas largo es: " + animeMasLargo);
console.log("El anime con el nombre mas corto es: " + animeMasCorto);