import fetch from 'node-fetch';

let count = 1000;
const time = Date.now();
let err_count = 0;
async function runTest() {
  while (count > 0) {
    try {
      const res = await fetch('http://localhost:3000/');
      await res.text();
      count--;
    } catch (error) {
      err_count++;
    }
  }
  console.log(`node-fetch: ${Date.now() - time}ms, error: ${err_count}`);
}

runTest();
