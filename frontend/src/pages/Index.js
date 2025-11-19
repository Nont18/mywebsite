import React from 'react';
import binary from '../images/binary.jpg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Index(){
    return(
        <div>
            <h2>WELCOME TO MY WEBSITE</h2>
            <p>Our website serve your disired services and products</p>
            <p>เว็บไซต์ของพวกเรานำเสนอการบริการตามความต้องการของคุณ</p>

            {/* <div className='Image-index-container'>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>เรียนเขียนโปรแกรมแบบตัวต่อตัว</p>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>เรียนเขียนโปรแกรมพื้นฐาน</p>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>รับเขียนโปรแกรม/โปรเจค </p>
                </div>

            </div>

            <div className='Image-index-container'> 
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>รวบรวมข้อมูลจากเว็บไซต์ (Data Scraping)</p>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>ทำความสะอาดข้อมูล (Data Cleaning)</p>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>วิเคราะห์ข้อมูลพร้อมทำนายแนวโน้ม (Data analytics)</p>
                </div>
                
            </div>

            <div className='Image-index-container'> 
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>พัฒนาโมเดล AI </p>
                </div>
            </div> */}
        
        </div>
        
    );
}

export default Index;