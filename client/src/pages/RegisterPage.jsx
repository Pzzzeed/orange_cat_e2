import React, { useState } from 'react'
import Layout from '../components/Layout';

import '../assets/styles/Register.css'

function FormRegister(){
const [photo,setPhoto] = useState('')
const [userName,setUserName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState(null)
const [confirmPassword,setConfirmPassword] = useState(null)
const [gender,setGender] = useState('')
const [inputs,setInputs] = useState([])

console.log({inputs})
const inputPhoto = (event) =>{
    setPhoto(event.target.value)
    console.log({photo})
}
const inputUsername = (event) =>{
    setUserName(event.target.value)
    console.log({userName})
}
const inputEmail = (event) =>{
    setEmail(event.target.value)
    console.log({email})
}
const inputPassword = (event) =>{
    setPassword(event.target.value)
    console.log({password})
}
const inputConfirmPassword = (event) =>{
    setConfirmPassword(event.target.value)
    console.log({confirmPassword})
}
const inputGender = (event) =>{
    setGender(event.target.value)
    console.log({gender})
}
const saveInput = (event) =>{
    event.preventDefault()
    const data={
        photo:photo,
        userName:userName,
        email:email,
        password:password,
        confirmPassword:confirmPassword,gender:gender
    }
    setInputs({...data})
  setPhoto('')
  setUserName('')
  setEmail('')
  setPassword(null)
  setConfirmPassword(null)
  setGender('')
}
    return(
        <Layout>
       <section className='fullpage'>
        <div className ="left-form">

        <div className ="form">
        <h1>Register</h1>
        <div className='wrap'>
        <input onChange={inputPhoto} className='photo' type='file'/><br/>
        </div>
        
        <label>Username* :</label><br/>
<input onChange={inputUsername} value={userName} type='text'className='input'/><br/>
<label>Email* :</label><br/>
<input onChange={inputEmail}  value={email} type='email'className='input'/><br/>
<label>Password* :</label><br/>
<input onChange={inputPassword} value={password} type='password'className='input'/><br/>
<label>Confirm Password* :</label><br/>
<input onChange={inputConfirmPassword} value={confirmPassword} type='password'className='input'/><br/>
<div className='radio'>
<input onChange={inputGender} value='male' name ="genger" id="1" type='radio'/><label>Male</label>
<input onChange={inputGender} type='radio' name ="genger" id="2" value='female'/><label>Female</label><br/>
</div>
<button onClick={(saveInput)} className='btn'>SAVE</button>
</div>
        </div>
        <div className ="right">
        <img src='/public/mascot.png'/>
        </div>
       </section>
       </Layout>
    );
}
export default FormRegister