const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'matty',
  age: 25,
  hobbies: ["basketball", "movie"],
  role: [2, 'author']
};

person.role.push('admin');

console.log(person);