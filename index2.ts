const res = await fetch('http://localhost:3333');
const text = await res.text();

console.log(text);
