import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Services from '../images/services.png';
import binary from '../images/binary.jpg';

function Service(){
    return(
        <div>
            <h2>Our Services</h2>

            <div className='Image-index-container'>
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
            </div>


        </div>
    );
}

export default Service;