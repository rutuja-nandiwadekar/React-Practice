
import React, { useState} from 'react'

export default function LoginForm() {

    const [userName, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    
    function getFormData(event) {
        console.log(userName, password, email)
        event.preventDefault()

        localStorage.setItem("userName", userName)
        localStorage.setItem("password", password)
        localStorage.setItem("email", email)

        alert("Logged in Successfully !!")
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
                        <input type="text" id="uname" placeholder="Enter your name" required onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div>
                        <label >Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div>
                        <label >Password</label>
                        <input type="password" id="Password" required onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <button type="submit" id="submit">Login</button>
                </div>
            </form>
        </div>
    )
}
