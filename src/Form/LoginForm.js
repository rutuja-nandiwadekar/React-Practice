
import React, { useState} from 'react'
import './LoginForm.css';

export default function LoginForm() {

    const [userName, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nameRegex, setNameRegexError] = useState("");
    const [emailRegex, setEmailRegexError] = useState("");
    const [passwordRegex, setPasswordRegexError] = useState("");

    
    function getFormData(event) {
        console.log(userName, password, email)
        event.preventDefault()

        localStorage.setItem("userName", userName)
        localStorage.setItem("password", password)
        localStorage.setItem("email", email)

        alert("Logged in Successfully !!")
    }

    function nameValidationHandler(event){
          let nameRegex =RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
          if(nameRegex.test(event.target.value)){
            setNameRegexError("");
          }else{
            setNameRegexError("Name is incorrect")
          }
      }

      function emailValidationHandler(event){
          let emailRegex =RegExp("^[a-z]+[+-_.]*[a-z]*[@][a-z]+[.][a-z]{2,4}[.]*([a-z]{2})*$");
          if(emailRegex.test(event.target.value)){
            setEmailRegexError("");
          }else{
            setEmailRegexError("Email is incorrect")
          }
      }

      function passwordValidationHandler(event){
        let passwordRegex =RegExp("^[0-9a-zA-Z!,@#$&*().]{8,}$");
        if(passwordRegex.test(event.target.value)){
          setPasswordRegexError("");
        }else{
          setPasswordRegexError("password is incorrect")
        }
    }

    return (
        <div id="login" >
            <form onSubmit={getFormData}>
                <div className="container">
                    <center>
                        <h1> Login Form</h1>
                    </center>
                    <hr />

                    <div>
                        <label >UserName</label>   
                        <input type="text" id="uname" placeholder="Enter your name" required onChange={(event) => { nameValidationHandler(event); setName(event.target.value);}} />{nameRegex}
                    </div>

                    <div>
                        <label >Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required onChange={(event) => { emailValidationHandler(event); setEmail(event.target.value);}} />{emailRegex}
                    </div>

                    <div>
                        <label >Password</label>
                        <input type="password" id="Password" required onChange={(event) => { passwordValidationHandler(event); setPassword(event.target.value);}} />{passwordRegex}
                    </div>

                    <button type="submit" id="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
