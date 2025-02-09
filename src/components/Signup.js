import React from 'react'
import './Signup.css';
function Signup() {
  return (
    <div className='auth-page'>
      <h2> Signup</h2>
      <div className='form-group'>
         <label>  Username </label>
         <input type=" text" name="username" required/>
         </div>
         <div className='form-group'>
         <label>  Email </label>
         <input type=" text" name="Email" required/>
         </div>
        <div className='form-group'>
          <label>   Password :</label>
          <input type="password" name="password " required/>
          </div>
          

          <button type="submit" className='auth-button'>Signup</button>

      
    </div>
  )
}

export default Signup;
