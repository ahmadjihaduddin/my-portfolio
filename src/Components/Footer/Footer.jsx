import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>Terimakasih sudah mengunjungi profile saya, saya harap kita dapat lebih upgrade skill untuk kedepannya</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">Copyright © 2024 Ahmad Jihaduddin | Powered by React JS </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};
import "./Footer.css";

export default Footer;
