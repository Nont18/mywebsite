import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function CodingDetails(){
    return(
        <div>
            <h2>รับเขียนโปรแกรม/โปรเจค</h2>
            <label>รายละเอียด : </label>
            <p>- รับพัฒนาโปรแกรมด้วยภาษา C, Python, C++ และอื่นๆ</p>
            <p>- เมื่องานเสร็จเรียบร้อย จะมีการอธิบายอย่างละเอียด</p>
            <p>ราคาเริ่มต้นที่ 400.-</p>
            <p>สนใจติดต่องาน สามารถลงทะเบียนหรือติดต่อผ่านไลน์ได้ครับ</p>

            <Link to='/signed'>ลงทะเบียนหรือบอกให้เรารู้ได้ที่นี่ </Link>

        </div>
    );
};

export default CodingDetails