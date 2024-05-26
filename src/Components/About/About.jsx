import React from "react";
import "./About.css";
import profile_img from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="profile-about" src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Saya mahasiswa Sistem Informasi Universitas Trunojoyo Madura yang aktif dalam berbagai program pelatihan IT, memiliki dasar yang kuat untuk mengejar karir sebagai Front-end Web Developer.</p>
            <p>Memiliki kemampuan berbicara di publik, sifat pekerja keras, rajin, dan suka belajar hal baru.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "74%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Vue JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>12+</h1>
          <p>Project Selesai</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Pelatihan Coding</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>EX Magang IT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
