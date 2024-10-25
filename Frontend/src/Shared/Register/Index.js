import React, { useState } from 'react'
import styles from './index.module.css'
import { FaUserCircle } from 'react-icons/fa'
import Button from '../../Widgets/Buttons/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
const Register = () => {

   const [username,setusername]=useState("");
   const [userpassword,setuserpassword]=useState("");
   const [userconfirmpassword,setuserconfirmpassword]=useState("");
   const jump=useNavigate("")
   const handleregister=async()=>{
    if(userpassword===userconfirmpassword && username!==" " && userpassword!=="" && userconfirmpassword!==""){
      const re=await fetch("http://localhost:7000/Usersignup",{
        method:"POST",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify({
          username:username,
          userpassword:userpassword
        })
      })
      const data= await re.json();
      setusername(" ")
      setuserpassword(" ")
      alert(data.msg)
      jump("/login")

    }else{
      alert("Please Enter Valid Data")
    }
   }
  return (
    <>
     <div className={styles.registerformcontainer}>
        <div className={styles.registerform}>
            <h3 className={styles.register}>SignUp Form</h3>
            <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Enter Your Name' />
            <input type="text" value={userpassword} onChange={(e)=>setuserpassword(e.target.value)} placeholder='Enter Your Password' />
            <input type="text" value={userconfirmpassword} onChange={(e)=>setuserconfirmpassword(e.target.value)} placeholder='Enter Confirm Password' />
            <div className={styles.button}>
                <Button name="Submit" handlesave={handleregister}/><span><Link to="/login"><span className={styles.loginspan}>Already Have An Account</span></Link></span>
            </div>
        </div>
    </div>  
    </>
  )
}

export default Register
