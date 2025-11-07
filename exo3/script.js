"use strict"; // Slide 51 : Mode strict pour éviter les erreurs de portée

// Slide 38-40 : Tableaux et objets

const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

// (Slide 45 : Fonctions / Slide 44 : Boucles)

function A() {
 

  // Parcours du tableau d'étudiants
  for (let i = 0; i < Students.length; i++) {
    const id = Students[i][0];   // identifiant
    const note = Students[i][4]; // note finale

    const admis = B(note);

    if (admis) {
      console.log(id + ": ADMIS");
    } else {
      console.log(id + ": AJOURNÉ");
    }
  }
}

//(Slide 42 : Conditions if/else)

function B(noteFinale) {
  if (noteFinale >= 3) {
    return true;
  } else {
    return false;
  }
}
