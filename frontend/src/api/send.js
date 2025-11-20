// api/send.js (diagnostic)
export default async function handler(req, res) {
  const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || '*';

  // CORS headers (ตอบ preflight ด้วย)
  res.setHeader('Access-Control-Allow-Origin', ALLOW_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    console.log('Received OPTIONS (preflight)');
    return res.status(204).end();
  }

  console.log('--- /api/send invoked ---');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);

  // อ่าน body ให้แน่นอน (กรณีบาง runtime ไม่ parse ให้)
  let body = req.body;
  if (!body || Object.keys(body || {}).length === 0) {
    try {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const raw = Buffer.concat(chunks).toString();
      if (raw) {
        try { body = JSON.parse(raw); }
        catch (e) { body = { raw }; }
      } else {
        body = {};
      }
    } catch (e) {
      console.error('Error reading raw body:', e);
      body = {};
    }
  }

  console.log('Body:', body);

  // คืน response สำหรับ debug
  return res.status(200).json({
    status: 'debug',
    method: req.method,
    headers: req.headers,
    body,
    message: 'This is a diagnostic response from /api/send. Check function logs too.'
  });
}
