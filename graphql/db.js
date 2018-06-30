export const people = [
  {
    id: '0',
    name: 'Nicolas',
    age: 18,
    gender: 'female',
  },
  {
    id: '1',
    name: 'Kunho',
    age: 19,
    gender: 'male',
  },
  {
    id: '2',
    name: 'James',
    age: 25,
    gender: 'male',
  },
  {
    id: '3',
    name: 'Sherry',
    age: 23,
    gender: 'female',
  },
  {
    id: '4',
    name: 'Joy',
    age: 21,
    gender: 'female',
  },
];

export const getById = id => people.find(person => person.id === `${id}`);