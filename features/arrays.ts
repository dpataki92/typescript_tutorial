const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates =[new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

const carsByMake2: string[][] = [] // it will be an array of array of strings

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
const importanDates2: (Date | string)[] = [];
importantDates.push(200);

// Tuples
const drink: [string, boolean, number] = ['brown', true, 5]

type Drink = [string, boolean, number];
const tea: Drink = ['brown', true, 3]