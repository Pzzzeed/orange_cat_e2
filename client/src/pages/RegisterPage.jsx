import React, { useState } from 'react'
import Layout from '../components/Layout';

import '../assets/styles/Register.css'

function FormRegister(){
const [allInput,setAllInput] = useState({
photo:'',
userName:'',
email:'',
password:0,
confirmPass:0,
gender:''
}
    
)


const inputAllForm= () =>{
    console.log('img')
}

    return(
        <Layout>
       <section className='full'>
        <div className ="left-form">

        <div className ="form">
        <h1>Register</h1>
        <div className='wrap'>
        <input onChange={inputAllForm} className='photo' type='file'/><br/>
        </div>
        
        <label>Username* :</label><br/>
<input onChange={inputAllForm} type='text'className='input'/><br/>
<label>Email* :</label><br/>
<input onChange={inputAllForm} type='email'className='input'/><br/>
<label>Password* :</label><br/>
<input onChange={inputAllForm} type='password'className='input'/><br/>
<label>Confirm Password* :</label><br/>
<input onChange={inputAllForm} type='password'className='input'/><br/>
<div className='radio'>
<input onChange={inputAllForm} type='radio' name='gender'/><label>Male</label>
<input onChange={inputAllForm} type='radio' name='gender'/><label>Female</label><br/>
</div>
<button className='btn'>SAVE</button>
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
