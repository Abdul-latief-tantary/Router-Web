import React from 'react'
import './Home.css'
function Home() {
  return (
  
    <div className='Home'>
      <header className='home-header'>
      <h1>  Welcome to the School Learning Management System </h1>
      <p> Your gateway to manage all school activities </p>
      
      <section className='features'>
        <div className='feature'>
          <h2>  Manage Students </h2>
          <p> Keep track of student information , attendance  and grades </p>
          <div className='feature'>
            <h2> Organise Classes </h2>
            <p>  Schedule and manage class efficiently</p>

          </div>
          <div className='feature'>
            <h2> Access Resources </h2>
            <p> Provide  and access learning  material for all students </p>
          </div>
        

          </div>

          </section>
  </header>
       </div>
  )
}

export default Home;
