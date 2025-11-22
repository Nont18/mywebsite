import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function ModelDevelopment(){
    return(
        <div>
            <h2>พัฒนาโมเดล AI</h2>
            <label>รายละเอียด : </label>
            <p>- รับพัฒนาโมเดล AI ต่างๆ เช่น Object Detection, Image/Video Classification และอื่นๆ ด้วยข้อมูลที่ท่านมี</p>
            <p>- พัฒนาระบบAIที่อัจฉริยะที่มีความแม่นยำสูง</p>
            <p>- พร้อมพัฒนาโมเดลสู่ระดับ Ready-Production พร้อมใช้งาน</p>
            <p>ราคาเริ่มต้นที่ 4900.-</p>
            <p>สนใจติดต่องาน สามารถลงทะเบียนหรือติดต่อผ่านไลน์ได้ครับ</p>

            <Link to='/signed'>ลงทะเบียนหรือบอกให้เรารู้ได้ที่นี่ </Link>

        </div>
    );
};

export default ModelDevelopment