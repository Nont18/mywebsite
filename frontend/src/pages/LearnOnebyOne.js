import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function LearnOnebyOne(){
    return(
        <div>
            <h2>เรียนเขียนโปรแกรมพื้นฐาน/ประยุกต์</h2>
            <label>รายละเอียด : </label>
            <p>- รับสอนเขียนโปรแกรมด้วยภาษา Python, C แบบตัวต่อตัว</p>
            <p>- เหมาะกับผู้ที่ต้องการเรียนรู้พื้นฐานหรือมีพื้นฐานแล้วแต่อยากได้ความรู้ขั้นประยุกต์</p> 
            <p>- ให้ความรู้หรือสาธิตเกี่ยวกับ Wi-Fi attacking (Optinal)</p> 
            <p>- สามารถสอบถามได้ทุกข้อสงสัย</p>
            <p>- ราคาเริ่มต้นที่ 350.-</p>
            <p>สนใจติดต่อเรียน สามารถลงทะเบียนหรือติดต่อผ่านไลน์ได้ครับ</p>

            <Link to='/signed'>ลงทะเบียนหรือบอกให้เรารู้ได้ที่นี่ </Link>

        </div>
    );
};

export default LearnOnebyOne