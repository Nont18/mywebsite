// /api/send.js (Vercel / Netlify style)
export default async function handler(req, res) {
  // CORS สำหรับการทดสอบ - แต่เมื่อ deploy กับ Vercel หน้าเว็บจะอยู่บนโดเมนเดียวกัน
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
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

    // เอา URL ของ Apps Script (หรือ API ปลายทาง) จาก environment
    const scriptUrl = process.env.APPS_SCRIPT_URL;
    if (!scriptUrl) {
      return res.status(500).json({ status: 'error', message: 'APPS_SCRIPT_URL not configured' });
    }

  const forwarded = await fetch(scriptUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, services, message }) });

  // อ่าน raw text เสียก่อน (safely)
  const text = await forwarded.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    parsed = text; // เก็บ raw text ถ้าไม่ใช่ JSON
  }
  console.log('Forwarded status:', forwarded.status, 'responseText:', text);

  return res.status(forwarded.ok ? 200 : 500).json({ status: forwarded.ok ? 'ok' : 'error', forwardedStatus: forwarded.status, payload: parsed });

  }
}