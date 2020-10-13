import React from "react";
import "./Contact.css";
import propTypes from "prop-types";





class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      online: this.props.online,
    }
  }
  

  render() {
    return(
      <div className="Contact">
      <img className="avatar" src={this.props.avatar} alt={this.props.name} />
      <div>
        <p className="name"> {this.props.name} </p>

        <div className="status">

            <div className="sousStatus">
               <div className={this.state.online ? "statusOnline" : "statusOffline"}> </div>
               <p 
                 onClick={event => {
                 const newOnline= !this.state.online;
                 this.setState({online : newOnline})} }>
                 {this.state.online ? "online" : "offline"} 
              </p>
            </div>


        </div>

      </div>
    </div>
    )
  }
    
}


Contact.propTypes = {
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  online: propTypes.bool
};

export default Contact;
