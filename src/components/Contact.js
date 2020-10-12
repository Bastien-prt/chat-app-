import React from "react";
import "./Contact.css";
import propTypes from "prop-types";


function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <p className="name"> {props.name} </p>

        <div className="status">
          <div className={props.online ? "statusOnline" : "statusOffline"} />
          <p className="status-text"> {props.online ? "online" : "offline"} </p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  online: propTypes.bool
};

export default Contact;
