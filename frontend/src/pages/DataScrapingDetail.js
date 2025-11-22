import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function DataScrapingDetails(){
    return(
        <div>
            <h2>รับรวบรวมข้อมูลจากเว็บไซต์ (Data Scraping)</h2>
            <label>รายละเอียด : </label>
            <p>- รับดึงข้อมูลต่างๆจากเว็บไซต์ เช่น ข้อความ, รูปภาพ และอื่นๆ</p>
            <p>- สามารถรวบรวมข้อมูลได้ภายในเวลาอันสั้น</p>
            <p>ราคาเริ่มต้นที่ 400.-</p>
            <p>สนใจติดต่องาน สามารถลงทะเบียนหรือติดต่อผ่านไลน์ได้ครับ</p>

            <Link to='/signed'>ลงทะเบียนหรือบอกให้เรารู้ได้ที่นี่ </Link>

        </div>
    );
};

export default DataScrapingDetails