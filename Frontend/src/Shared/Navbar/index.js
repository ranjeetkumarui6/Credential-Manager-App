import React from 'react'
import styles from './Index.module.css'
import { Link } from 'react-router-dom'
import Container from '../../Container/Index';

const Navbar = (props) => {

  return (
    <>
    <header>
      <Container>
     <nav className={styles.Navbarcontainer} style={{backgroundColor:props.navcolor}}>
        <div className={styles.Navleft}>
            <span className={styles.credential}>
              {props.logo}
            </span>
        </div>
        <div className={styles.Navright}>
           {props.view &&<div className={styles.ViewDetails} style={{backgroundColor:props.btncolor}}><Link to="/login"><span className={styles.veiwdeta}>{props.view}</span></Link></div>} 
            { props.add && <div className={styles.ViewDetails} style={{backgroundColor:props.btncolor}} onClick={props.HandleAddDetail}>AddDetail</div>}
           {props.userdetail && <div className={styles.ViewDetails} style={{backgroundColor:props.btncolor}} onClick={props.handleuserdetail}>Options</div>}
           {props.logout && <div className={styles.ViewDetails} style={{backgroundColor:props.btncolor}} onClick={props.handlelogout}>LogOut</div>}
        </div>
     </nav> 
     </Container>
     </header>
    </>
  )
}

export default Navbar
