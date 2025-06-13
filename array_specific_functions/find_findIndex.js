let users = [
    {id:1, name:'A'},
    {id:2, name:'B'}
];
console.log(users);

let user = users.find(u => u.id === 2);

console.log(user);

let index = users.findIndex(u => u.name === 'A');

console.log(index);