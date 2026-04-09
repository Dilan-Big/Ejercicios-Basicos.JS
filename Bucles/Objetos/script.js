let estudiantes = [
  { nombre: "Juan", apellido: "Perez", calificacion: 2.5 },
  { nombre: "Maria", apellido: "Gomez", calificacion: 3.2 },
  { nombre: "Carlos", apellido: "Lopez", calificacion: 4.5 },
  { nombre: "Ana", apellido: "Martinez", calificacion: 1.8 },
  { nombre: "Luis", apellido: "Rodriguez", calificacion: 3.8 },
  { nombre: "Sofia", apellido: "Hernandez", calificacion: 4.0 }
];

for (let i = 0; i < estudiantes.length; i++) {
  let estudiante = estudiantes[i];

  let estado = "";

  if (estudiante.calificacion >= 1 && estudiante.calificacion < 3) {
    estado = "Perdio";
  } else if (estudiante.calificacion >= 3 && estudiante.calificacion < 4) {
    estado = "Debe nivelar";
  } else if (estudiante.calificacion >= 4 && estudiante.calificacion <= 5) {
    estado = "Aprobo";
  }

  console.log(
    estudiante.nombre + " " + estudiante.apellido +
    " tiene una nota de " + estudiante.calificacion +
    " → " + estado
  );
}