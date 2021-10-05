// no type inference for aguments
const add = (a: number, b: number) => {
  return a + b;
};

// it works for output but wouldn't detect the lack of return statement
const subtract = (a: number, b: number): number => {
  // a-b;
  return a-b;
}

function divide(a: number, b: number) {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a*b;
}

const logger = (message: string): void => {
  console.log(message);
  return null;
}

// we exit the function with error without returning anything
const throwError = (message: string): never => {
  throw new Error(message);
}

// it's ok if only possibily throwing the error
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message)
  }
  return "string";
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logWeather2 = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};