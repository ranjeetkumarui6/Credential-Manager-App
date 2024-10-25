import React from "react";
import styles from "./index.module.css";
const Client = (props) => {
  return (
    <>
      <div className={styles.clientcontainer}>
        <span className={styles.aboutecredential}>
        <h3>Welcome To Our Credentail Manager Application</h3><br />
          A credential management system  is a software solution that helps
          organizations secure their systems and information by managing user
          credentials.
        </span>
      </div>
    </>
  );
};

export default Client;
