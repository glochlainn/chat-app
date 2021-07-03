import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <img
        src="https://randomuser.me/api/portraits/men/34.jpg"
        className="avatar"
        alt="avatar"
      ></img>
      <div>
        <h4 className="name">Lochlainn</h4>
        <div className="status">
          <div className="status-online"></div>
          <p className="status-text">online</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
