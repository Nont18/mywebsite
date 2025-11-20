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
    const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
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
