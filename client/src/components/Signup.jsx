import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Signup() {
    const[credentials,setCredentials] = useState({name:"",email:"",password:""})
    let navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const{name,email,password} = credentials
        const response = await fetch(`http://localhost:8000/users/signup`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
        })
        const json = await response.json()
        console.log(json.authtoken);
        if(json.authtoken){
            localStorage.setItem('token',json.authtoken)
            navigate("/home")
          }else{
            alert("Invalid Details!!")
          }
      
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
   <div className='bdy'>
    <div className='main'>
     <div className='container mt-3 headline '>
        <h2>Create an account</h2>
         <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name'  aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email'  aria-describedby="emailHelp" onChange={onChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' required onChange={onChange}/>
                </div>

                <button type="submit" className="" >Submit</button>
            </form>
            <p className='para'>
        Already have an account?{' '}
        <Link to='/login'>Login</Link>
      </p>
    </div>
   </div>
   </div>
  )
}

export default Signup