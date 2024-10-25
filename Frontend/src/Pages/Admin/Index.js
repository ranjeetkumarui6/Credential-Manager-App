import React, { useState } from 'react'
import Container from '../../Container/Index'
import Navbar from '../../Shared/Navbar'
import Credential from '../Credentail'
import { RiAdminFill } from 'react-icons/ri';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const[add,setadd]=useState(false)
    const HandleAddDetail=()=>{
      setadd(!add)
    }

  
    const [userdetail,setuserdetail]=useState(true);
  
    const handleuserdetail=()=>{
      setuserdetail(!userdetail)
    }
    const [bgcolor,setbgcolor]=useState("")
    const [btncolor,setbtncolor]=useState("")
    const [navcolor,setnavcolor]=useState("")  
    const [readcookie,setcookie,removecookie]= useCookies()

    const jump=useNavigate()

    const handlelogout=()=>{
      removecookie("UserData")
      jump("/")
    }

  return (
    <div>
      <Container>
      <Navbar handlelogout={handlelogout} navcolor={navcolor} btncolor={btncolor} logout="LogOut"  handleuserdetail={handleuserdetail}  userdetail="Options" add="AddDetail"  logo={<RiAdminFill/>} HandleAddDetail={HandleAddDetail}/>
      <Credential bgcolor={bgcolor} userdetail={userdetail}  navcolor={navcolor} setnavcolor={setnavcolor} setbtncolor={setbtncolor} btncolor={btncolor} setbgcolor={setbgcolor}  setadd={setadd}  add={add}/>
      </Container>
    </div>
  )
}

export default Admin
