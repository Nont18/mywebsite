import React, {useState} from 'react';
import axios from 'axios';
const API = 'http://localhost:8000' || process.env.REACT_APP_API_URL; //https://mywebsite-c4634ejog-nont18s-projects.vercel.app

function Signed() {
  const [form, setForm] = useState({name:"", email:"", service:"", message:""});
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`https://mywebsite-hr43uke0n-nont18s-projects.vercel.app/api/send`, form)
    // const res = await axios.post("http://localhost:8000/api/send", form)

    if(res.data.success){

      // const data = await res.json().catch(() => ({}));
      alert('ส่งข้อมูลเรียบร้อยแล้ว ขอบคุณครับ!');
      console.log(res.data.data);
      // e.target.reset();
      // console.log('server response:', data);
      }
    if(!res.data.success){
      console.log("Cannot send the message.")
    }
  };

  return (
    <div>
      <h2>If you are interested in my services, please register your name, services, and message below.</h2>
      <h2>ในกรณีที่สนใจการบริการของเรา กรุณากรอกชื่อ-นามสกุล, ประเภทบริการ, และข้อความ</h2>

      <form onSubmit={handleSubmit}>
        <div className='text-container'>
          <input className='textarea' type="text" name="name" placeholder="Enter your name" value={form.email} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}/><br /><br />
          <input className='textarea' type="text" name="email" placeholder="Enter your services" value={form.name} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}/><br /><br />
          <input className='textarea' type="text" name="service" placeholder="Enter your services" value={form.service} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}/><br /><br />
          <textarea className='textarea' type="text" name="message" rows={15} cols={50} placeholder="Leave Your Message Here" value={form.message} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}/><br /><br />
          <button className='button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signed;


