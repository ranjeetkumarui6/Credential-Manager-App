import React, { Children } from 'react'
import styles from './Index.module.css'
const Container = ({children}) => {
  return (
    <>
     <div className={styles.container}>
        {children}
    </div> 
    </>
  )
}

export default Container
