import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "563930ad-eba0-4908-8027-7606480abe5a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>lets talk</h1>
          <p>Dengan senang hati saya akan menerimanya</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>ahmadjihad3012@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>0810 9777 130</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Surabaya, Jawa Timur</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Nama</label>
          <input type="text" placeholder="Masukkan nama" name="name" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Masukkan email" name="email" />
          <label htmlFor="">Pesan</label>
          <textarea name="message" rows="8" placeholder="Masukkan pesan"></textarea>
          <button type="submit" className="contact-submit">
            Kirim!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
