import React, { useState } from 'react'
import Button from '../../Widgets/Buttons/Button'
import styles from './index.module.css'
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoMdUnlock } from "react-icons/io";
import { useCookies } from 'react-cookie';



const Login = () => {
  const [username,setusername]=useState("")
  const [userpassword,setuserpassword]=useState("")

  const [readcookie,createcookie,removecookie]=useCookies();

  const jump=useNavigate();
  const handlelogin=async()=>{
    const re=await fetch("http://localhost:7000/Userlogin",{
      method:"PATCH",
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({
        username:username,
        userpassword:userpassword,
      })
    })
    const data=await re.json()
    if(data.msg==="Valid User"){
      alert(data.msg)
      createcookie("UserData",username);
      createcookie("UserPassword",userpassword);
      jump("/user")

    }else{
      alert(data.msg)
    }
  }
  return (
    <>
     <div className={styles.loginformcontainer}>
        <div className={styles.form}>
          <i className={styles.icon}><FaUserCircle size={70} color='#B9E5E8'/></i>
            <h3 className={styles.login}>Login Form</h3>
            <div className={styles.name}>
            <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Enter Your Name' />
            <i><MdDriveFileRenameOutline/></i>
            </div>
            <div className={styles.name}>
            <input type="text" value={userpassword} onChange={(e)=>setuserpassword(e.target.value)} placeholder='Enter Your Password' />
            <i><IoMdUnlock/></i>
            </div>
            <div className={styles.button}>
                <Button name="Submit" handlesave={handlelogin}/><span><Link to="/registration"><span className={styles.loginspan}> Don`t Have An Account</span></Link></span>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Login
