// api/send.js
export default async function handler(req, res) {
  // ปล่อยให้การทดสอบง่าย: ถ้าต้องการ production ให้เปลี่ยน '*' เป็น domain ของคุณ
  const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || '*';

  // ตอบ preflight
  res.setHeader('Access-Control-Allow-Origin', ALLOW_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  // ถ้าจะใช้ cookie/auth เพิ่ม:
  // res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    // preflight request
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    const { name, services, message } = req.body || {};

    if (!name || !services || !message) {
      return res.status(400).json({ status: 'error', message: 'Missing fields' });
    }

    const scriptUrl = process.env.APPS_SCRIPT_URL;
    if (!scriptUrl) {
      return res.status(500).json({ status: 'error', message: 'APPS_SCRIPT_URL not configured' });
    }

    // ส่งต่อไปยัง Apps Script (server-to-server => ไม่มี CORS ปัญหา)
    const forwarded = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, services, message }),
      // timeout/other options ถ้าต้องการ
    });

    const payload = await forwarded.text().catch(() => '');
    let jsonPayload = {};
    try { jsonPayload = JSON.parse(payload); } catch(e) { jsonPayload = { raw: payload }; }

    return res.status(forwarded.ok ? 200 : 502).json({
      status: forwarded.ok ? 'ok' : 'forward_error',
      forwardedStatus: forwarded.status,
      payload: jsonPayload
    });
  } catch (err) {
    console.error('API /api/send error:', err);
    return res.status(500).json({ status: 'error', message: err.message || 'Internal error' });
  }
}
