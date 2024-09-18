import React, {useState} from 'react'

export default function FomeValid() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");


  const [nameErr, setNameErr] = useState("");
  const [subjectErr, setSubjectErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (name) {
      console.log("name required");
      setNameErr("name required");
    } else {
      setNameErr("")
    }
    if (!subject){
      console.log("subject required");
      setSubjectErr("subject required")
    } else {
      setSubjectErr("")
    }
    if (!email) {
      console.log("email required");
      setEmailErr("email required")
    }else if (!email.includes("@")) {
      setEmailErr("email is not valid") 
    }else if (!/^ [\w -\.] + @([\w -] +\.) +[\w -]{ 2, 4}$/.test(email)) {
      setEmailErr("email is not regex valid")
    }else{
      setEmailErr("")
    }
    
  }

  
  return (

    <div>
      <h1>FomeValid</h1> 
      <form onSubmit={(e) => handelSubmit(e)} >
        <input required type="text" placeholder='First Name' onChange={(e) => setName(e.target.value)} />
        <span>{nameErr}</span> <br /> <br />
        <input type="text" placeholder='Last Name' onChange={(e) => setSubject(e.target.value)} />
        <span>{subjectErr}</span><br /> <br />
        <input type="text" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
        <span>{emailErr}</span><br /> <br />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">category</option>
          <option value="electronic">Electronic</option>
          <option value="clothing">clothing</option>
        </select>
 <br /><br />

        {category === "electronic" && (
          <div id='cat'>
            <div className="card" >
              <img style={{height:"300px"}} src="https://www.macworld.com/wp-content/uploads/2024/09/All-the-iphones-2023-to-2024.jpg?quality=50&strip=all&w=1024" className="card-img-top" alt="..." />
              <div className="card-body">
                <input type="text" placeholder='iPhone buying guide: Best iPhone to buy in 2024
'/>
                <input type="text" placeholder='$1,8400'/><br /> <br />
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
            </div>
            <div className="card" >
              <img style={{height:"300px"}} src="https://images.unsplash.com/photo-1413708617479-50918bc877eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhZGdldHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
              <div className="card-body">
              <input type="text" placeholder='iPhone buying guide: Best iPhone to buy in 2024
'/>
                <input type="text" placeholder='$1,9400'/><br /> <br />
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
            </div>
            <div className="card" >
              <img style={{height:"300px"}} src="https://miro.medium.com/v2/resize:fit:2000/1*5u_poRM5GU9kfY3DG0hMFA.jpeg" className="card-img-top" alt="..." />
              <div className="card-body">
              <input type="text" placeholder='iPhone buying guide: Best iPhone to buy in 2024
'/>
                <input type="text" placeholder='$3,5400'/><br /> <br />
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
            </div>

          </div>
        )}
        {
          category == "clothing" && <input type="text" placeholder='Enter return period' />
        }
        <br />
        <button type='submit' style={{margin: "20px 0"}} >submit</button>

      </form>
      </div>
  )}