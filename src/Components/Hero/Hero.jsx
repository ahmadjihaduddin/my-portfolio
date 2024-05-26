import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img className="logo-profile" src={profile_img} alt="" />
      <h1>
        <span>Hi saya Ahmad jihad,</span> saya senang belajar hal baru.
      </h1>
      <p>Sebagai seorang mahasiswa, tentunya saya menyiapkan masa depan. sehingga saya memilih menekuni bidang frontend dan UI/UX yang dapat menuangkan jiwa seni dan logika saya</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Hubungi saya
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <AnchorLink className="anchor-link" offset={50} href="#services">
            Explore
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
