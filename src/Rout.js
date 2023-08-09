import React from 'react'
import { useState, useEffect } from 'react';
const App = () => { const [userdata, setUserdata] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((result) =>result.json())
  .then((result) =>{ console.log(result);
     setUserdata(result);
  });

  },[]);



return(
  <div className='container mt-5'>
  <h2> Employee Details</h2>
  <table className='table table-striped table-hover'>
  <thead>
          <tr>
            <th> userid</th> 
            <th>iid</th>
            <th> title</th>
          </tr>
       </thead>

       
      <tbody>
      {userdata.map(({userId,id,title},index)=>(
          <tr>
          <td> {userId}</td> 
          <td>{id}</td>
          <td>{title}</td>
          </tr>))}
          </tbody>
       </table>
       </div>


);

  };
export default Rout;