import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Container from "../../Container/Index";
import Button from "../../Widgets/Buttons/Button";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useCookies } from "react-cookie";


function Credential(props) {
  const [editmodal,seteditmodal]=useState(false)
  const [name, setname] = useState("");
  const [social, setsocial] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [uname, setuname] = useState("");
  const [usocial, setusocial] = useState("");
  const [uemail, setuemail] = useState("");
  const [upassword, setupassword] = useState("");
  const [update,setupdate]=useState("")

  // const [username, setusername] = useState("");
  // const [userpassword, setuserpassword] = useState("");

  const [getdeails, setgetdetails] = useState([]);


  const [readcookie,createcookie,removecookie]=useCookies()


  

  
  //   const getuserdetails = async () => {
  //   const re = await fetch("http://localhost:7000/Usersignup", {
  //     method: "GET",
  //     headers: { "Content-Type": "Application/json" },
  //   });
  //   const data = await re.json();
  //   setusername(data[0].Username);
  //   setuserpassword(data[0].Userpassword);
  //   getdetails();

  // };
  useEffect(() => {
    getdetails();
  }, []);
  const getdetails = async () => {
    const re = await fetch("http://localhost:7000/details", {
      method: "PATCH",
      headers: { "Content-Type": "Application/json" },
      body:JSON.stringify({
        UserName:readcookie["UserData"],
        Token:readcookie["UserPassword"]
      })
    });
    const data = await re.json();
    setgetdetails(data);
  };
  

  const handlesave = async () => {
    const re = await fetch("http://localhost:7000/details", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        name: name,
        social: social,
        email: email,
        password: password,
        username: readcookie["UserData"],
        token: readcookie["UserPassword"],
      }),
    });
    const data = await re.json();
    alert(data.msg);
    setname("");
    setsocial("");
    setemail("");
    setpassword("");
    getdetails()
    props.setadd(!props.add);

  };

  const handledelete=async(id)=>{
   if(window.confirm("Want to delete")){
      const re=await fetch("http://localhost:7000/details",{
        method:"DELETE",
        headers:{"Content-Type":"Application/json"},
        body:JSON.stringify({
          id:id
        })
      })    
    const data=await re.json();
    getdetails();
   }
  }

  

  const handleedit=async(id)=>{
    const re=await fetch("http://localhost:7000/details/"+id,{
      method:"GET",
      headers:{"Content-Type":"Application/json"}
    })
    const data=await re.json();
    setuname(data[0].Name);
    setusocial(data[0].Social);
    setuemail(data[0].Email);
    setupassword(data[0].Password);
    setupdate(id)
    seteditmodal(!editmodal)
  }

  const handleupdate=async()=>{
    const re=await fetch("http://localhost:7000/details",{
      method:"PUT",
      headers:{"Content-Type":"Application/json"},
      body:JSON.stringify({
        id:update,
        Name:uname,
        Social:usocial,
        Email:uemail,
        Password:upassword
      })
    })
    const data=await re.json();
    alert(data.msg)
    seteditmodal(!editmodal)
    getdetails();
  }
  return (
    <>
       <div className={props.userdetail ?styles.userdetails2:styles.userdetails1} >

       <div className={styles.details}>
        <h3>{props.bgcolor}</h3>

          <input type="color" value={props.bgcolor} onChange={(e)=>props.setbgcolor(e.target.value)} className={styles.color}/>
          <h3>Table Color</h3>
       
        </div>
       <div className={styles.details}>
        <h3>{props.btncolor}</h3>

          <input type="color" value={props.btncolor} onChange={(e)=>props.setbtncolor(e.target.value)} className={styles.color}/>
          <h3>Button Color</h3>
      
        </div>
        <div className={styles.details}>
        <h3>{props.navcolor}</h3>

          <input type="color" value={props.navcolor} onChange={(e)=>props.setnavcolor(e.target.value)} className={styles.color}/>
       <h3>Nav Color</h3>
        
        </div>
         </div>
        
         
      <div className={props.add ? styles.toggledivtrue : styles.togglediv}>
      <h2>ADD Details</h2>
        <div className={styles.formcontainer}>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter The Name"
          />
           <input
            type="text"
            value={social}
            onChange={(e) => setsocial(e.target.value)}
            placeholder="Enter The Social Media Name "
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter The Email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter The Password"
          />
        </div>
        <div className={styles.button}>
          <Button handlesave={handlesave} name="Save" />
        </div>
      </div>
      <div className={ editmodal ? styles.editform1: styles.editform2}>
        <h2>Edit Your Information</h2>
        <div className={styles.formcontainer}>
          <input
            type="text"
            value={uname}
            onChange={(e) => setuname(e.target.value)}
          />
          <input
            type="text"
            value={usocial}
            onChange={(e) => setusocial(e.target.value)}
          />
          <input
            type="text"
            value={uemail}
            onChange={(e) => setuemail(e.target.value)}
          />
          <input
            type="text"
            value={upassword}
            onChange={(e) => setupassword(e.target.value)}
          />
        </div>
        <div className={styles.button}>
          <Button handlesave={handleupdate} name="update" />
        </div>
      </div>

      <main  className={props.add ? styles.blurerate : styles.tablecontainer}>
        <Container>
          <table style={{backgroundColor:props.bgcolor}} className={styles.table}>
            <thead>
              <tr>
                <th>SNo</th>
                <th>Name</th>
                <th>SocialMedia</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getdeails.map((item,index) => {
                return (
                  <>
                    <tr key={item._id}>
                      <td>{index+1}</td>
                      <td>{item.Name}</td>
                      <td>{item.Social}</td>
                      <td>{item.Email}</td>
                      <td>{item.Password}</td>
                      <td>
                        <span><FaEdit size={25} color="blue" onClick={()=>handleedit(item._id)}/></span>&nbsp;&nbsp;&nbsp;
                        <span><FaTrash size={22} color="red" onClick={()=>handledelete(item._id)}/></span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </Container>
      </main>
    </>
  );
}

export default Credential;
