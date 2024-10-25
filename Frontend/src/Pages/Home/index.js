import React, { useState } from 'react'
import Container from '../../Container/Index'
import Navbar from '../../Shared/Navbar'
import Credential from '../Credentail'
import { FaUserSecret } from "react-icons/fa";
import Client from '../Client/Index';
import { useCookies } from 'react-cookie';

const Home = () => {
  const [readcookie,setcookie,removecookie]= useCookies()

  const handleviewrecord=()=>{
    alert(readcookie["UserData"])
  }

  return (
    <>
    <Container>
      <Navbar view="AddRecord"  handleviewrecord={handleviewrecord} logo={<FaUserSecret/>}/>
      <Client   />
      </Container>
    </>
  )
}

export default Home
