import React from 'react';

function Signed() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const services = e.target.services.value;
    const message = e.target.message.value;

    try {
      const res = await fetch('/api/send.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, services, message }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} - ${text}`);
      }

      const data = await res.json().catch(() => ({}));
      alert('ส่งข้อมูลเรียบร้อยแล้ว ขอบคุณครับ!');
      e.target.reset();
      console.log('server response:', data);
    } catch (err) {
      console.error('send error:', err);
      alert('เกิดข้อผิดพลาดเมื่อส่งข้อมูล: ' + err.message);
    }
  };

  return (
    <div>
      <h2>If you are interested in my services, please register your name, services, and message below.</h2>
      <h2>ในกรณีที่สนใจการบริการของเรา กรุณากรอกชื่อ-นามสกุล, ประเภทบริการ, และข้อความ</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Enter your name" required /><br /><br />
          <input type="text" name="services" placeholder="Enter your services" required /><br /><br />
          <input type="text" name="message" placeholder="Leave your message here" required /><br /><br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signed;
