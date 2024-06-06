// Fonction qui additionne deux nombres et retourne le résultat
function additionner(a, b) {
  return a + b;
}

// Appel de la fonction avec les nombres 10 et 50
let resultat = additionner(15, 55);
console.log(resultat); // Affiche 8


////////////////////
const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

function countArray(arr) {
  return arr.length;
}

console.log(countArray(array));


////////////////////
const phrase = "Je veux un café";

function countWord(sentence) {
  const words = sentence.split(' ');
  return words.length;  
}

console.log(countWord(phrase));


////////////////////
const animaux = ['chat', 'rat', 'chien', 'pingouin', 'dauphin'];

// // Version with For Loop
function findAnimal(tab, animal) {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === animal) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

// // Version with forEach Loop
function findAnimal2(tab, animal) {
  tab.forEach((element) => {
    if (element === animal) {
      return true;
    }
  })
  return false;
}

// Version with includes
function findAnimal3(tab, animal) {
  return tab.includes(animal);
}