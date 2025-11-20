// import React from 'react';

// function Signed() {
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const name = e.target.name.value;
//     const services = e.target.services.value;
//     const message = e.target.message.value;

//     try {
//       const res = await fetch('/api/send', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, services, message }),
//       });

//       if (!res.ok) {
//         const text = await res.text().catch(() => '');
//         throw new Error(`HTTP ${res.status} - ${text}`);
//       }

//       const data = await res.json().catch(() => ({}));
//       alert('ส่งข้อมูลเรียบร้อยแล้ว ขอบคุณครับ!');
//       e.target.reset();
//       console.log('server response:', data);
//     } catch (err) {
//       console.error('send error:', err);
//       alert('เกิดข้อผิดพลาดเมื่อส่งข้อมูล: ' + err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>If you are interested in my services, please register your name, services, and message below.</h2>
//       <h2>ในกรณีที่สนใจการบริการของเรา กรุณากรอกชื่อ-นามสกุล, ประเภทบริการ, และข้อความ</h2>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <input type="text" name="name" placeholder="Enter your name" required /><br /><br />
//           <input type="text" name="services" placeholder="Enter your services" required /><br /><br />
//           <input type="text" name="message" placeholder="Leave your message here" required /><br /><br />
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signed;


// api/send.js (Vercel / Node)
import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const { name, services, message } = req.body;

    // service account key should be stored in ENV (e.g. process.env.GOOGLE_SERVICE_ACCOUNT)
    const serviceAccount = JSON.parse({
  "type": "service_account",
  "project_id": "sheetformywebsite",
  "private_key_id": "6652e2721fc4fafc797448a94c2386933db908f2",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCtU8GuZ5Ln/N7O\nft/BMGEjp7A9SXhHhh1G1bDTgXtf2Gl36PKy7QoyZiJ1elhqVVitri34ben7iXiw\nHdckWaG0tyewykk30hLuzy81lBNMA/bOPZB0AXzXBHskvRG1Kpyc0+mVNlF8/fiY\n6FPgoXC0/46IygpbWXCJ2uCoxSxGkCp/quEDvFKkWEFMphdAvRH0gAZGJUpbedbS\nwnIf3lvXOlX0DB6LLl8ED/L7owF6NnFb6piLOrgWwlDlmdN7E/bT1mTL+dqcHX4F\n0O2jwgyNw+GjCcEwjpV7g6WrNpCoJXxXN4RYMkYnr+YU10T/7vgeBXiTtAr7gH95\nO1nR9G0XAgMBAAECggEAQEtl+KJ+CaUxJytEKB8goX/GLe3PesSinpCNH+ATmmmm\nMe9M/BdW5Xwigy6HlqYjF4YZkmJ/XanQhZAEKv0+sVERnZBkGZtJH6HmMrtDbzq3\nNij7KTUWEJKedXHXHDt6zegD6TA1iSaSrXHdD2IDc3iq8E32Co3CY7i4BpLhiii6\n9DSitCuhCxq3g0xF9ESUxVp6yDpDd8ssKd/qitiLtfscRSNTpk1KqUWUcY1ldSu6\nRAJhbOToKTnUUy3hygbNi0E7gLtdDXtJ3IuLroqR2MpErIyc3IEQtFpH0Upp0abw\nlqNK7+tIFYvpeXlVfm+8F+InCZrniZGylOHlSp7ymQKBgQDW1TsISw6ua4dl6H1v\n+QoEVh1bss2dpG1iU+ZhM4fYn4V3u0CnjdCysSnwTe/Hok2qXdXP45ywDRt+c/BR\nPYCoyRjmS766X0BIDwTPixBE0aXRZPpTtLb3pvM+jm+qbMweEbpFZFMYJO9RZEz3\nJAnW2wLO4RuQXg4szahhwTPgiQKBgQDOim8ZkIcLk11AsZ4cyehmYrj+S6lPTIrb\nhlc1tripLJv8vd8/moMam7wjoyqFEnOFixvBcZvG/WZL2r+WDJpJKRYD9sSlI397\nKUf8D6rPbGwD7Hpe0aPDMsu4Cbrw3eufct8So2rBWVwdcxIlopi4h7aucFrE5vex\nym2x2S44nwKBgBKiupU0lZhxwXQIn+D3tHO92JwcvZNgMRDngEOMSctzwwso1iny\ntljZ3252BEfH/3641xRKhUwMRwdIHV+euytpDlzj0y6tlpDppJwwTv/5Q64PWVur\ngHepJs6VYoBhIa+2D/d3BXJBufTQg5CosqXNp8e0ZUS3s/kU+fdI4CwpAoGAKXVK\nNcR4Bw/OgSTmCvtQZfTdE1ZWpu9DVCtUKBkEWhj1OrdWL6sxM88c5b5j05BPlffF\nW4AVd8z3krRXDqR698KCg8stz8QfW7Z+l48Bh19JE0SNj6jfCViR4eA6IQ06tafW\nNSSOUj9AqTym4N0RcMD1H3C4F5wRDiQG/tMMXxsCgYBK3oCevCPu54o5yvkLA7LT\n3JCigD7sWx8zRTLzMUwaA42I+T72bGshBm2yUKRKQUap6iV9lLwaSugTdlYjxXUG\nOTw6ZKzpaRHhWlEttnLaxLf/x/Qe++xnXAZoVfu23HLexMqSKQjfPG9cmgB+wj55\n1AavWABvDXloEOT9YFDGYw==\n-----END PRIVATE KEY-----\n",
  "client_email": "sheetformywebsiteservice@sheetformywebsite.iam.gserviceaccount.com",
  "client_id": "105211130972333348352",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sheetformywebsiteservice%40sheetformywebsite.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
});
    const jwtClient = new google.auth.JWT(
      serviceAccount.client_email,
      null,
      serviceAccount.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    await jwtClient.authorize();

    const sheets = google.sheets({ version: "v4", auth: jwtClient });
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = "Sheet1!A:D";

    const values = [[ new Date().toISOString(), name || "", services || "", message || ""]];
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values }
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(500).json({ error: err.message });
  }
}
