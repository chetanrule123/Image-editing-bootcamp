import React, { useContext, useState } from 'react'
import '../css/login.css'

//import contexts
import {contextUserContext} from '../App'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ltype, setLtype] = useState("Login")
    const userContext = useContext(contextUserContext)
    return (
        <div className="login_con center">
            <div className="login">
                <img src={require('../assets/login_illustration.jpg')} alt=""/>
                <form action="">
                    <p className="form_title">Instructor {ltype}</p>
                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="button" type="submit" onClick={(e)=>{
                        e.preventDefault()
                        if(email==="" || password==="")
                            alert("Input fields should not be empty")
                        else if(password.length<6) alert("Password should contain atleast 6 chars")
                        else userContext.setUser({email: email.split("@")})
                    }}>{ltype}</button>
                    <p className="form_control">
                        {
                            ltype==="Login" ? "Don't have an account?" : "Already had an account?"
                        }
                        
                        <button onClick={(e)=>{
                            e.preventDefault()
                            ltype==="Login" ? setLtype("Register") : setLtype("Login")
                        }}>{ltype==="Login" ? "Register" : "Login"}</button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
