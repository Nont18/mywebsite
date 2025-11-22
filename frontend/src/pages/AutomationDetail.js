import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function AutomationDetails(){
    return(
        <div>
            <h2>รับทำระบบเขียน/ดึงข้อมูลอัตโนมัติ Automation</h2>
            <label>รายละเอียด : </label>
            <p>- รับพัฒนาระบบสำหรับจัดเก็บข้อมูลอัตโนมัติ</p>
            <p>- ผู้ใช้งานสามารถเขียนหรือดูข้อมูลได้</p>
            <p>- กำหนดให้ผู้อื่นเข้าถึงระบบได้</p>
            <p>ราคาเริ่มต้นที่ 3500.-</p>
            <p>สนใจติดต่องาน สามารถลงทะเบียนหรือติดต่อผ่านไลน์ได้ครับ</p>

            <Link to='/signed'>ลงทะเบียนหรือบอกให้เรารู้ได้ที่นี่ </Link>

        </div>
    );
};

export default AutomationDetails