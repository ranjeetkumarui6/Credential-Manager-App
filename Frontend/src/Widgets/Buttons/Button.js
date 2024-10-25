import React from 'react'
import styles from './Button.module.css'
const Button = ({name,handlesave}) => {
  return (
    <>
    <div className={styles.buttoncontainer}>
      <button onClick={handlesave}>{name}</button>
      </div>
    </>
  )
}

export default Button
