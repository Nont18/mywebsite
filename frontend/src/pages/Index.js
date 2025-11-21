import React from 'react';
import binary from '../images/binary.jpg';
import Services from '../images/services.png';
import QR from '../images/qrcode.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Index(){
    return(
        <div className='first_div'>
            <h2>WELCOME TO MY WEBSITE</h2>
            <p>Our website serve your disired services and products</p>
            <p>เว็บไซต์ของพวกเรานำเสนอการบริการตามความต้องการของคุณ</p>

            <div>
                <img src={Services} height={500} width={400} />
                <br></br>
                <label>สนใจติดต่องาน เพิ่มLINEเพื่อเข้ามาพูดคุยได้ครับ </label>
            </div>
        
            <div>
                <img src={QR} />
            </div>

        </div>
        
    );
}

export default Index;