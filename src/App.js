// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';

  
function App() {
  const [mode,setMode]=useState("light")
  const toggleMode=()=>{
if(mode==="light"){
  setMode("dark")
  showAlert("Dark mode is enabled" ,"success")
}else{
  setMode("light")
  showAlert("light mode is enabled" ,"success")
}



  }
  
  const [alert,setAlert]=useState("null")
  const showAlert=(message,type)=>{
     setAlert({
         message:message,
         type:type
     })
    
    setTimeout(() => {
      showAlert(null)
    }, 3000);}
  return (
    <>
   
   
    <Navbar title="TextUtils" about="About Us"  toggleMode={toggleMode} mode={mode} />
    <Alert alert={alert}/>
    <div className="container mx-8" >
      
      
    <Textform  showAlert={showAlert}heading={"Enter Your Text To Analyze"} />
    
    </div>
    
    </>
  );
}

export default App;
