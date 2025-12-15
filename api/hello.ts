export const config = {
  runtime: 'edge',
};

export default function handler(request: Request) {
  return new Response(
    JSON.stringify({
      message: 'Hello from the  Backend! 🚀',
      time: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  );
}
