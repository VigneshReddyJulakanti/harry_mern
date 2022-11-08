import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";






function App() {
 

  const [alertText, setalertText] = useState(null)
  const showAlertText=(msg,statee)=>{
    setalertText({
      msg:msg,
    statee:statee,
   

    })

    setTimeout(() => {
      setalertText(null);
    }, 1500);
    
  }
  const [mode, setmode] = useState('light')
  const togglemode=()=>{
    if(mode=='light'){
      setmode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlertText("Light mode Enabled","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlertText("Dark mode Enabled","success");
    }
  }
  return (
   <>
<Router>
<Navbar mode={mode} toggleMode={togglemode} />

<Alert alertText={alertText}/>


<Routes>
          <Route exact path="/about" element={<About/>} >
          
          </Route>
          <Route exact path="/" element={
            <div className='container my-3'>
          <Textform mode={mode} heading="Enter the text to analyze"/>
          
          </div>
          }>
          
          </Route>
    </Routes>




{/* <About></About> */}
</Router>
   </>
  );
}

export default App;
