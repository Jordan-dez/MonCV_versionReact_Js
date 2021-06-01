import React from 'react';
import "./User.css";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

function  User() {
  
    return (
    <div className="user">
      <img src="../images/avatar.jpeg" alt="mon profil" width="150px"/>
      <h1 className="user__name">Jordan KAYA</h1>
      <p className="user__profession">Developpeur Front-End</p>
      <div className="user__infos">
        <p className="user__info"> <HomeIcon/>  95800 Cergy </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:kayajordan21@gmail.com"> kayajordan21@gmail.com</a>
         
        </p>
        <p className="user__info"> <PhoneIcon /><a href="+33784771827">0784771827</a> </p>
        <p className="user__info"><AirplanemodeActiveIcon/> France </p>
      </div>
    </div>
    );
}

export default User;