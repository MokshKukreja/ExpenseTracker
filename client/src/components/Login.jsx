import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Login() {
    const [credentials,setCredentials] = useState({email:"",password:""})
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch(`http://localhost:8000/users/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });
      const json = await response.json();
      if (json.authtoken) {
        localStorage.setItem('token', json.authtoken);
        navigate("/home");
        console.log(json.authtoken);
      }else{
        alert("Invalid credentials");
      }
    };
    
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className='bdy'>
      <div className='main'>
      <div className='headline'>
      <h2>Login to continue </h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" value={credentials.email} name='email' onChange={onChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
            </div>

            <button type="submit" className="" >Submit</button>
        </form>
        <p className='para'>
        Don't have an account?
        <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
    </div>
    </div>
  )
}

export default Login