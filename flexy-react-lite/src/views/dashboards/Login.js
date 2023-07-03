import React, { useEffect, useState } from 'react'
import {
    TextField,
    Button
 } from '@material-ui/core'
import LoginService from '../../service/LoginService'
import { useNavigate } from 'react-router-dom'
import UserService from '../../service/userService'

import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Auth from "./Auth"


const Login = () => {
    const [user, setUser] = useState([])
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [role,setRole] = useState("")
    const navigate =useNavigate()
    const US = new LoginService()
    const us = new UserService()
    var token="";
    var idUSER=""
    const AddLogin = (e) => {
      e.preventDefault()
        const data = {
            "email" : email,
            "password": password
        }
        US.create(data)
        .then((res) => {
          console.log("**token**", res.data.token.token)
          if(res.data.user)
          { console.log("***res.data",res.data.user)
             localStorage.setItem('token',res.data.token.token)
             localStorage.setItem('idUSER',res.data.user._id)
             //tes
             token=localStorage.getItem('token')
             console.log("token after getItem",token)
            if(res.data.user.role==="admin") {   navigate ('dashboards/dashboard1')}

            else {
              
              if(res.data.user.role==="user"){   navigate ('dashboards/DashboardUser')}
              else { navigate ('dashboards/dashboard2') }
         
          }
        }}
        )
    }

    const RegisterFunction= () => {
      navigate("/AddUserCandidat")
    }
  
  const ResetPassword =(e)=>{
    e.preventDefault();
    us.reset(email).then((res)=>{
      alert("check your email")
    })
  }
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={RegisterFunction}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email} onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password} onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={(e)=>AddLogin(e)}  >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a onClick={(e)=>ResetPassword(e)} text-align="justify" >password?</a>
            </p>
          </div>
        </form>
      </div>
    )


}
export default Login







