import React from 'react';
import Paper from '@material-ui/core/Paper';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import Chip from '@material-ui/core/Chip';
import InstagramIcon from '@material-ui/icons/Instagram';

const Navbar =(props)=> {

  const info = [
    {icon: <WhatsAppIcon /> ,title:"+91-7303256619", url:"https://wa.me/917303256619"},
    {icon: <EmailIcon /> ,title:"yashp2411@gmail.com", }
  ]

  return (
    <div>
      <div style={{height:20,marginBottom:5,display:"flex"}}>
        <div style={{flexGrow:1}}></div>
        <span style={{fontSize:14}}>
          {
            info.map((item,index)=>{
              return (
              <a style={{color:"gray",textDecoration: "none"}} target="_blank" href={item.url} key={index}>
                <Chip label={item.title} size="small" key={index} icon={item.icon} 
                  variant="outlined" style={{borderColor:'transparent'}}   
                />
              </a>
              );
            })
          }
        </span>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Navbar;
