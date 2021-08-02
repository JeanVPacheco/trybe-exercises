const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
// Adicione seu código aqui
emailListInData.forEach((email) => showEmailList(email));

// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (numbers) => {
  return numbers.find((number) => (number % 3 === 0) && (number % 5 === 0))
}
console.log(findDivisibleBy3And5(numbers));

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const names2 = ['João', 'Josué','Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = (names) => {
  return names.find((name) => name.length === 5)
}
console.log(findNameWithFiveLetters(names2));

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
function findMusic(array, id) {
  return array.find((musica) => musica.id === id
  );
}
console.log(findMusic(musicas, '31031685'));

// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  return arr.some((toCheck) => toCheck === name);
}
console.log(hasName(names, 'Ana'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, minimumAge) => {
  return arr.every ((person) => person.age >= minimumAge);
}
console.log(verifyAges(people, 18));

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const crescente = people.sort((a,b) => a.age - b.age);
const decrescente = people.sort((a,b) => b.age - a.age);
console.log(crescente);
console.log(decrescente);