export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return new Response('Only POST supported', { status: 405 });
    }

    const body = await request.text();

    const response = await fetch("https://9775-38-181-72-11.ngrok-free.app/crawl", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'firelichuan430'
      },
      body
    });

    const text = await response.text();
    return new Response(text, {
      status: response.status,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
