console.log('ENV', process.env)

// server.js
export default {
  port: Number(process.env.PORT ?? 3000),
  fetch(request) {
    return new Response(
      `
      <html>
        <main>
          <h1>Hello World</h1>
        </main>
      </html>`,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  },
};
