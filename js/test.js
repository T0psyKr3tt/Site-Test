// 1. Créer l'objet student avec les propriétés spécifiées
let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// 2. Accéder et modifier les valeurs de l'objet

// Changer l'âge à 21
student.age = 21;

// Ajouter une nouvelle propriété grade avec la valeur "A"
student.grade = "A";

// 3. Travailler avec le tableau courses de l'objet

// Ajouter les cours "Math", "Physics" et "Chemistry" au tableau courses
student.courses.push("Math", "Physics", "Chemistry");

// Utiliser indexOf pour trouver l'indice de "Physics" dans le tableau courses
let physicsIndex = student.courses.indexOf("Physics");

// Utiliser slice pour créer un nouveau tableau contenant les deux premiers éléments de courses
let firstTwoCourses = student.courses.slice(0, 2);

// 4. Afficher les résultats dans la console

// Afficher l'objet student complet avec les modifications
console.log("Student object:", student);

// Afficher l'index de "Physics"
console.log("Index of 'Physics':", physicsIndex);

// Afficher le nouveau tableau créé avec slice
console.log("First two courses:", firstTwoCourses);
