import React from 'react';
import binary from '../images/binary.jpg';
import Services from '../images/services.png';
import QR from '../images/qrcode.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Index(){
    return(
        <div className='first_div'>
            <h2>WELCOME TO OUR WEBSITE</h2>
            <p>Our website serve your disired services and products</p>
            <p>เว็บไซต์ของพวกเรานำเสนอการบริการตามความต้องการของคุณ</p>

            {/* <div>
                <img src={Services} height={500} width={400} />
                <br></br>
                <label>สนใจติดต่องาน เพิ่มLINEเพื่อเข้ามาพูดคุยได้ครับ </label>
            </div> */}

            <div>
                <p className='rainbow-text'>เราให้บริการหลักๆ คือ</p>

                <p>
                    <h4>1. รับวิเคราะห์ข้อมูลและทำนายแนวโน้มของข้อมูล</h4> 
                    ✅รับวิเคราะห์ข้อมูล <br></br>
                    ✅ทำนายแนวโน้มของข้อมูลในอนาคตด้วย AI <br></br>
                    ✅เป็นที่ปรึกษาพร้อมให้คำแนะนำแก่ท่าน <br></br>
                    ✅นำเสนอข้อมูลให้ดูเข้าใจมากยิ่งขึ้น <br></br>
                    <button>
                    <nav>
                        <Link to='/analytics'>ดูรายละเอียดเพิ่มเติม</Link>
                    </nav>
                    </button>
                </p>
                    <h4>2. หลักสูตรเรียนเขียนโปรแกรมออนไลน์แบบตัวต่อตัว เริ่มจากพื้นฐานของการเรียนเขียนโปรแกรมโดยใช้ภาษา Python ไปสู่ขั้นประยุกต์ได้ </h4>
                    ✅เริ่มจากพื้นฐานของการเรียนเขียนโปรแกรมโดยใช้ภาษา Python ไปสู่ขั้นประยุกต์ได้ <br></br>
                    ✅เรียนแบบตัวต่อตัว <br></br>
                    ✅ไม่มีพื้นฐานก็เรียนกับเราได้ <br></br>
                    ✅ตอบทุกข้อคำถาม <br></br>
                    ✅สิทธิพิเศษอื่นๆอีกมากมาย <br></br>
                    <button>
                    <nav>
                        <Link to='/learnOnebyOne'>ดูรายละเอียดเพิ่มเติม</Link>
                    </nav>
                    </button>
                <p>

                </p>

            </div>
        
            <div>
                <h3>สนใจติดต่องานหรือเรียน สามารถติดต่อผ่านไลน์หรือฝากข้อความผ่านเว็บไซต์นี้ได้</h3>
                <img src={QR} />
            </div>

        </div>
        
    );
}

export default Index;