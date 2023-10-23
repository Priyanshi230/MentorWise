import React from 'react';
import logo02 from "../../../assets/images/logo02.png";

import {Link} from "react-router-dom";
// import logo from "../";
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube,AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className='pb-16 pt-10'>
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
         <img src ={logo02} alt ="hello" className='h-[40px] w-[100px]'/>
         <p className='text-[16px] leading-7 font-[400] text-textColor'>Copyright @ {year} developed by Priyanshi Sharma all rights reserved
         </p>
          <div>

           

          </div>
        </div>
      </div>
    </div>
  </footer>
    
};

export default Footer;

