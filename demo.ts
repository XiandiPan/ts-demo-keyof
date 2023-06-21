// optional chaining && Nullish coalescing && keyof

/**Optional Chaining (?.)
 * purpose:
 * to safely access properties of an object
 * that may be null or undefined,
 * without causing a runtime error.
*/
/* Nullish Coalescing (??)
* allows you to provide a default value when
* encountering null or undefined values
*
*/

interface User {
  username: string,
  address: string | undefined,
}

//instance of User
const user: User = {
  username: "brian",
  address: undefined,
}

console.log(user.address?.toUpperCase() ?? "NO ADDRESS FOR USER");





/** keyof in typescript
 *
 * the 'keyof' keyword is used to get a list of all the keys
 * (property names) that exist in a particular object type
 */

// the purpose of keyof is to create a new type that represents
// only the keys of an object, without the associated values

interface Fruit {
  name: string;
  color: string;
  taste: string;
  amount: number;
}

function getPropertyValue(fruit: Fruit, key: keyof Fruit) {
  return fruit[key];
}
//The keyof operator is used to create a union type of
//all the keys in the Fruit interface,
// which in this case is "name" | "color" | "taste" | "amount".

//instance of Fruit
const apple: Fruit = {
  name: "Apple",
  color: "Red",
  taste: "Sweet",
  amount: 5,
};

const banana: Fruit = {
  name: "Banana",
  color: "Yellow",
  taste: "Sweet",
  amount: 3,
};

console.log(getPropertyValue(apple, "amount")); // Output: 5
console.log(getPropertyValue(banana, "color")); // Output: Yellow

console.log(getPropertyValue(apple, "age"))

