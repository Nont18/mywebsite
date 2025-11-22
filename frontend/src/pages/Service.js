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
                    <p>ราคาเริ่มต้น : 350</p>
                    <nav>
                        <Link to='/learnOnebyOne' id='LearnOnebyOne'>View Details </Link>
                    </nav>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>เรียนเขียนโปรแกรมพื้นฐาน</p>
                    <p>ราคาเริ่มต้น : 2000</p>
                    <nav>
                        <Link to='/learncoding' id='LearnCoding'>View Details </Link>
                    </nav>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>รับเขียนโปรแกรม/โปรเจค </p>
                    <p>ราคาเริ่มต้น : 400 </p>
                    <nav>
                        <Link to='/codingdetails' id='Coding'>View Details </Link>
                    </nav>
                </div>
            
            </div>
            
            <div className='Image-index-container'> 
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>รวบรวมข้อมูลจากเว็บไซต์ (Data Scraping)</p>
                    <p>ราคาเริ่มต้น : 500 </p>
                    <nav>
                        <Link to='/datascraping' id='Coding'>View Details </Link>
                    </nav>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>ทำความสะอาดข้อมูล (Data Cleaning)</p>
                    <p>ราคาเริ่มต้น : 500 </p>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>วิเคราะห์ข้อมูลพร้อมทำนายแนวโน้ม (Data analytics)</p>
                    <p>ราคาเริ่มต้น : 1000 </p>
                </div>
                            
            </div>
                        
            <div className='Image-index-container'> 
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>พัฒนาโมเดล AI </p>
                    <p>ราคาเริ่มต้น : 4900 </p>
                    <nav>
                        <Link to='/modeldevelopment' id='Coding'>View Details </Link>
                    </nav>
                </div>
                <div className='Image-item'>
                    <img src={binary} height={300} width={350} />
                    <p>พัฒนาระบบ Automation </p>
                    <p>ราคาเริ่มต้น : 4500 </p>
                    <nav>
                        <Link to='/automationdetail' id='Coding'>View Details </Link>
                    </nav>
                </div>
            </div>


        </div>
    );
}

export default Service;