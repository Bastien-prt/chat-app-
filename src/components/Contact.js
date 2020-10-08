import React from 'react';
import './Contact.css';

const isOnline = true;

function Contact(){
    return(
        <div className="Contact"> 
            <img className="avatar" src="https://randomuser.me/api/portraits/men/87.jpg"/>

            <div>
                 <h2 className="name"> Saint Juan De La Puenta </h2>

                <div className="status">
                    {isOnline ? 
                       <div className= "blockStatus"> <span className= "status-online"> </span> <p>Online</p> </div>:
                       <div className= "blockStatus"> <span className= "status-offline"> </span> <p>Offline</p> </div>}
                </div>               
            </div>

        </div>
    );
};

export default Contact;