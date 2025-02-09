import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='login-page'>
       <h2>   Login </h2>
       <form className='login-form'>
        <div className='form-group'>
         <label>  Username </label>
         <input type=" text" name="username" required/>
         </div>
         <div className='form-group'>
          <label>   Password :</label>
          <input type="password" name="password " required/>
          </div>

          <button type="submit" className='login-button'>Login</button>

         
        
        </form>

</div>
  );
}

export default Login
