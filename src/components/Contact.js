import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="Contact">
      <img src={props.avatar} className="avatar" alt="avatar"></img>
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div
            className={props.online ? "status-online" : "status-offline"}
          ></div>
          <p className="status-text">
            {props.online ? "online" : "offline"}
          </p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
