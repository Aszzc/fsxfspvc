export function GET() {
  return new Response('google-site-verification: googlef69cee79eb10367e.html', {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
