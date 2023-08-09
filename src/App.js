import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nest from './Nest'
import Login from './Login'
import Signup from './Signup'
const App = () => {
  return (
    <div>
     
     
     <BrowserRouter>
     
        <Routes>
<Route path='/ Nest/' element={< Nest/>}>
<Route path='/Login' element={<Login/>}/>
<Route path='/Signup' element={< Signup/>}/>
</Route>
        </Routes>
      
      </BrowserRouter> 
    </div>
  )
}

export default App;


    
   
    
  


