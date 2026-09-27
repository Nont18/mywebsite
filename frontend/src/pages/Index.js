// import React from 'react';
// import binary from '../images/binary.jpg';
// import Services from '../images/services.png';
// import QR from '../images/qrcode.png';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// function Index(){
//     return(
//         <div className='first_div'>
//             <h2>WELCOME TO OUR WEBSITE</h2>
//             <p>Our website serve your disired services and products</p>
//             <h3>เว็บไซต์ของพวกเรานำเสนอการบริการตามความต้องการของคุณ</h3>

//             {/* <div>
//                 <img src={Services} height={500} width={400} />
//                 <br></br>
//                 <label>สนใจติดต่องาน เพิ่มLINEเพื่อเข้ามาพูดคุยได้ครับ </label>
//             </div> */}

//             <div>
//                 <p className='rainbow-text'>เราให้บริการหลักๆ คือ</p>

//                 <p>
//                     <h4>1. รับวิเคราะห์ข้อมูลและทำนายแนวโน้มของข้อมูล</h4> 
//                     ✅รับทำความสะอาดข้อมูล (Data Cleaning) <br></br>
//                     ✅รับวิเคราะห์ข้อมูล <br></br>
//                     ✅ทำนายแนวโน้มของข้อมูลในอนาคตด้วย AI <br></br>
//                     ✅เป็นที่ปรึกษาพร้อมให้คำแนะนำแก่ท่าน <br></br>
//                     ✅นำเสนอข้อมูลให้ดูเข้าใจมากยิ่งขึ้น <br></br>
//                     <button>
//                     <nav>
//                         <Link to='/analytics'>ดูรายละเอียดเพิ่มเติม</Link>
//                     </nav>
//                     </button>
//                 </p>
//                     <h4>2. หลักสูตรเรียนเขียนโปรแกรมออนไลน์แบบตัวต่อตัว เริ่มจากพื้นฐานของการเรียนเขียนโปรแกรมโดยใช้ภาษา Python ไปสู่ขั้นประยุกต์ได้ </h4>
//                     ✅เริ่มจากพื้นฐานของการเรียนเขียนโปรแกรมโดยใช้ภาษา Python ไปสู่ขั้นประยุกต์ได้ <br></br>
//                     ✅เรียนแบบตัวต่อตัว <br></br>
//                     ✅ไม่มีพื้นฐานก็เรียนกับเราได้ <br></br>
//                     ✅ตอบทุกข้อคำถาม <br></br>
//                     ✅สิทธิพิเศษอื่นๆอีกมากมาย <br></br>
//                     <button>
//                     <nav>
//                         <Link to='/learnOnebyOne'>ดูรายละเอียดเพิ่มเติม</Link>
//                     </nav>
//                     </button>
//                 <p>

//                 </p>

//             </div>
        
//             <div>
//                 <h3>สนใจติดต่องานหรือเรียน สามารถติดต่อผ่านไลน์หรือฝากข้อความผ่านเว็บไซต์นี้ได้</h3>
//                 <img src={QR} />
//             </div>

//         </div>
        
//     );
// }

// export default Index;





import React from 'react';
import { Link } from 'react-router-dom';
import QR from '../images/qrcode.png';
import '../App.css';

function Index() {
    return (
        <div className="home">

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-container">

                    <div className="logo">
                        รับพัฒนาโปรแกรมและ<span>เขียนโปรแกรม</span>
                    </div>

                    <div className="nav-links">
                        <Link to="/">หน้าแรก</Link>
                        <Link to="/analytics">บริการ</Link>
                        <Link to="/learnOnebyOne">คอร์สเรียน</Link>
                        <a href="#contact">ติดต่อเรา</a>
                    </div>

                </div>
            </nav>


            {/* Hero */}
            <section className="hero">

                <div className="hero-content">

                    <div className="hero-text">

                        <p className="hero-label">
                            AI • DATA • SOFTWARE • CONSULTANT
                        </p>

                        <h1>
                            พัฒนาซอฟท์แวร์/โปรแกรม
                            <br />
                            วิเคราะห์ข้อมูล
                            <br />
                            และพัฒนาระบบ <span>AI</span> ให้คุณ
                        </h1>

                        <p className="hero-description">
                            เราช่วยเปลี่ยนข้อมูลและไอเดียของคุณ
                            ให้กลายเป็นโปรแกรมและโซลูชัน
                            ที่สามารถนำไปใช้งานได้จริง
                        </p>

                        <div className="hero-buttons">

                            <Link
                                to="/analytics"
                                className="btn btn-primary"
                            >
                                ดูบริการของเรา
                            </Link>

                            <a
                                href="#contact"
                                className="btn btn-secondary"
                            >
                                ติดต่อเรา
                            </a>

                        </div>

                    </div>


                    <div className="hero-visual">

                        <div className="code-card">

                            <div className="code-header">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <pre>
{`import pandas as pd
from sklearn.ensemble import RandomForestRegressor

data = pd.read_csv("data.csv")

X = data.drop("target", axis=1)
y = data["target"]

model = RandomForestRegressor()
model.fit(X, y)

prediction = model.predict(X)`}
                            </pre>

                        </div>

                    </div>

                </div>

            </section>


            {/* Services */}
            <section className="section">

                <div className="section-title">

                    <p className="section-label">
                        OUR SERVICES
                    </p>

                    <h2>
                        บริการของเรา
                    </h2>

                    <p>
                        บริการด้าน Programming, Data และ AI
                        ที่สามารถปรับให้เหมาะกับความต้องการของคุณ
                    </p>

                </div>


                <div className="service-grid">

                    <div className="service-card">

                        <div className="service-icon">
                            📊
                        </div>

                        <h3>
                            Data Processing / Analytics 
                        </h3>

                        <p>
                            วิเคราะห์และจัดการข้อมูล
                            เพื่อช่วยให้คุณเข้าใจข้อมูล
                            และนำไปใช้ประกอบการตัดสินใจงานของคุณ
                        </p>

                        <ul>
                            <li>Data Cleaning</li>
                            <li>Data Analysis</li>
                            <li>Data Visualization</li>
                            <li>Data Processing</li>
                        </ul>

                        <Link to="/analytics">
                            ดูรายละเอียด →
                        </Link>

                    </div>


                    <div className="service-card">

                        <div className="service-icon">
                            🤖
                        </div>

                        <h3>
                            AI / Machine Learning / Chatbot / RAG 
                        </h3>

                        <p>
                            - พัฒนาและประยุกต์ใช้ Machine Learning
                            เพื่อวิเคราะห์ข้อมูลและสร้างระบบ Prediction <br></br>
                            - พัฒนาระบบถาม-ตอบ 24 ชั่วโมง
                        </p>

                        <ul>
                            <li>Machine Learning</li>
                            <li>Prediction</li>
                            <li>Classification</li>
                            <li>AI Application</li>
                        </ul>

                        <Link to="/analytics">
                            ดูรายละเอียด →
                        </Link>

                    </div>


                    <div className="service-card">

                        <div className="service-icon">
                            🖥️
                        </div>

                        <h3>
                            Software Development 
                        </h3>

                        <p>
                            พัฒนาโปรแกรมและซอฟท์แวร์
                            รวมถึงระบบ Automation
                            และโปรแกรมจัดการข้อมูล
                        </p>

                        <ul>
                            <li>Automation</li>
                            <li>Data Processing</li>
                            <li>Custom Software เช่น ระบบออกเอกสารอัตโนมัติ</li>
                        </ul>

                        <Link to="/analytics">
                            ดูรายละเอียด →
                        </Link>

                    </div>

                </div>

            </section>


            {/* Capabilities */}
            <section className="section capabilities">

                <div className="section-title">

                    <p className="section-label">
                        CAPABILITIES
                    </p>

                    <h2>
                        สิ่งที่เราสามารถช่วยคุณได้
                    </h2>

                </div>


                <div className="capability-grid">

                    <div className="capability-item">
                        <span>✓</span>
                        Data Cleaning
                    </div>

                    <div className="capability-item">
                        <span>✓</span>
                        Data Analysis
                    </div>

                    <div className="capability-item">
                        <span>✓</span>
                        Data Visualization
                    </div>

                    <div className="capability-item">
                        <span>✓</span>
                        Machine Learning
                    </div>

                    <div className="capability-item">
                        <span>✓</span>
                        Software Development 
                    </div>

                    <div className="capability-item">
                        <span>✓</span>
                        Automation System
                    </div>

                    <div className="capability-item">
                        <span>✓</span>
                        AI Application
                    </div>

                    <div className="capability-item">
                        <span>✓</span>
                        Data Prediction
                    </div>

                </div>

            </section>


            {/* Process */}
            <section className="section">

                <div className="section-title">

                    <p className="section-label">
                        HOW IT WORKS
                    </p>

                    <h2>
                        ขั้นตอนการทำงาน
                    </h2>

                </div>


                <div className="process-grid">

                    <div className="process-item">

                        <div className="process-number">
                            01
                        </div>

                        <h3>
                            พูดคุย
                        </h3>

                        <p>
                            ทำความเข้าใจ Requirement
                            และปัญหาของคุณ
                        </p>

                    </div>


                    <div className="process-item">

                        <div className="process-number">
                            02
                        </div>

                        <h3>
                            วิเคราะห์
                        </h3>

                        <p>
                            วิเคราะห์ข้อมูลและหาแนวทาง
                            ที่เหมาะสม
                        </p>

                    </div>


                    <div className="process-item">

                        <div className="process-number">
                            03
                        </div>

                        <h3>
                            พัฒนา
                        </h3>

                        <p>
                            พัฒนาโปรแกรมหรือ Solution
                            ตาม Requirement
                        </p>

                    </div>


                    <div className="process-item">

                        <div className="process-number">
                            04
                        </div>

                        <h3>
                            ส่งมอบ
                        </h3>

                        <p>
                            ทดสอบและส่งมอบงาน
                            พร้อมคำแนะนำการใช้งาน
                        </p>

                    </div>

                </div>

            </section>


            {/* Python Course */}
            <section className="course-section">

                <div className="course-content">

                    <div>

                        <p className="section-label">
                            Programming Course
                        </p>

                        <h2>
                            เรียนเขียนโปรแกรม
                            <br />
                            แบบตัวต่อตัว
                        </h2>

                        <p>
                            เริ่มตั้งแต่พื้นฐานการเขียนโปรแกรม
                            ไปจนถึงการนำ
                            ไปประยุกต์ใช้กับงานจริง
                        </p>

                        <Link
                            to="/learnOnebyOne"
                            className="btn btn-light"
                        >
                            ดูหลักสูตร
                        </Link>

                    </div>


                    <div className="course-roadmap">

                        <div>
                            <strong>01</strong>
                             The History of Computer 
                        </div>

                        <div>
                            <strong>02</strong>
                            Basic Programming 
                        </div>

                        <div>
                            <strong>03</strong>
                            Excercises
                        </div>

                        <div>
                            <strong>04</strong>
                            Advanced/Specialized
                        </div>

                    </div>

                </div>

            </section>


            {/* Contact */}
            <section
                className="contact-section"
                id="contact"
            >

                <div className="contact-content">

                    <div>

                        <p className="section-label">
                            CONTACT US
                        </p>

                        <h2>
                            มีโปรเจกต์ที่ต้องการให้เราช่วย?
                        </h2>

                        <p>
                            พูดคุยเกี่ยวกับงานของคุณได้เลย
                            เราพร้อมช่วยวิเคราะห์ Requirement
                            และหาแนวทางที่เหมาะสม
                        </p>

                    </div>


                    <div className="qr-container">

                        <img
                            src={QR}
                            alt="QR Code"
                        />

                        <p>
                            Scan QR Code
                            <br />
                            เพื่อติดต่อและพูดคุยเพิ่มเติม
                        </p>

                    </div>

                </div>

            </section>

            {/* Footer */}
            <footer className="footer">

                <p>
                    © 2026 รับพัฒนาโปรแกรมและเขียนโปรแกรม.
                    All rights reserved.
                </p>

            </footer>

        </div>
    );
}

export default Index;