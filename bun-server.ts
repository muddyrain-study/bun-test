Bun.serve({
  port: 3001,
  fetch() {
    return new Response('Hello World');
  },
});

console.log(`Server started on port 3001!`);
