// // /api/send.js (Vercel / Netlify style)
// export default async function handler(req, res) {
//   // CORS สำหรับการทดสอบ - แต่เมื่อ deploy กับ Vercel หน้าเว็บจะอยู่บนโดเมนเดียวกัน
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');

//   if (req.method === 'OPTIONS') {
//     return res.status(204).end();
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).json({ status: 'error', message: 'Method not allowed' });
//   }

//   try {
//     const { name, services, message } = req.body || {};

//     if (!name || !services || !message) {
//       return res.status(400).json({ status: 'error', message: 'Missing fields' });
//     }

//     // เอา URL ของ Apps Script (หรือ API ปลายทาง) จาก environment
//     const scriptUrl = process.env.APPS_SCRIPT_URL;
//     if (!scriptUrl) {
//       return res.status(500).json({ status: 'error', message: 'APPS_SCRIPT_URL not configured' });
//     }

//     const forwarded = await fetch(scriptUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, services, message }),
//     });

//     // พยายามอ่าน JSON ถ้าเป็นไปได้
//     let payload;
//     try {
//       payload = await forwarded.json();
//     } catch (e) {
//       payload = { status: 'ok' };
//     }

//     return res.status(forwarded.ok ? 200 : 500).json({ status: 'ok', forwardedStatus: forwarded.status, payload });
//   } catch (err) {
//     console.error("API /api/send error:", err);
//     return res.status(500).json({ status: 'error', message: err.message || 'Internal error' });
//   }
// }


// api/send.js (Vercel / Node)
// import { google } from "googleapis";

// export default async function handler(req, res) {
//   if (req.method === "OPTIONS") {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers","Content-Type");
//     return res.status(200).end();
//   }

//   if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

//   try {
//     const { name, services, message } = req.body;

//     // service account key should be stored in ENV (e.g. process.env.GOOGLE_SERVICE_ACCOUNT)
//     const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
//     const jwtClient = new google.auth.JWT(
//       serviceAccount.client_email,
//       null,
//       serviceAccount.private_key,
//       ["https://www.googleapis.com/auth/spreadsheets"]
//     );

//     await jwtClient.authorize();

//     const sheets = google.sheets({ version: "v4", auth: jwtClient });
//     const spreadsheetId = process.env.SPREADSHEET_ID;
//     const range = "Sheet1!A:D";

//     const values = [[ new Date().toISOString(), name || "", services || "", message || ""]];
//     await sheets.spreadsheets.values.append({
//       spreadsheetId,
//       range,
//       valueInputOption: "USER_ENTERED",
//       requestBody: { values }
//     });

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     return res.status(200).json({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     return res.status(500).json({ error: err.message });
//   }
// }


const express = require("express");
const {google} = require("googleapis");
const cors = require("cors");
const app = express();
const fetch = require('node-fetch');


app.use(cors({
  methods: ["GET", "POST"]
}));
app.use(express.json())


// app.get("/api/send", (req,res) => {
//   res.json({message: "CORS issue resolved"});
// })

app.post("/api/send", async (req, res) => {
  try{
    const {email, name, message} = req.body;
    
    const auth = new google.auth.GoogleAuth({
    keyFile: "../frontend/api/credentials.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });

    // Creat client instance for auth
    const client = await auth.getClient();

    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: client});

    const spreadsheetId = "1vDxDOITzun1m1bXpzi-hQO22_0Qv2EdI1EIArozCeIc"
    // Get metadata about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
      spreadsheetId,
    });

    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:C",
    });

    // Write row(s) to spreadsheet
    await googleSheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [email, name, message]
        ]
      }
    });
    
    // res.send(metaData.data)
    // res.send(getRows.data)
    res.json({success: true, data:{email, name, message}})
  }
  catch(err){
    console.log(err)
  }
});

const port = 8000;
app.listen(port, () => console.log(`Server is running on ${port}`));




