import React,{useState} from 'react'



export default function Textform(props) {


    const [text,setText]=useState("Enter Your Text Here ");
    const handleUpcase=()=>{
        let newTxt=text.toUpperCase();
        setText(newTxt)
        props.showAlert("Converted to Uppercase","Success")
    }
const handleLocase=()=>{
    let newTxt=text.toLowerCase();
    setText(newTxt)
    props.showAlert("Converted to Lowercase","Success")

}
const handleRev=()=>{

    let i;
    let newTxt="";
    for(i=text.length-1;i>0;i--){
        newTxt+=text[i];
        setText(newTxt)
        props.showAlert("String Reversed","Success")
    }
}
 const handleOnChange=(Event)=>{

    setText(Event.target.value)
 }

 

    

    
        
 

  return (
    
    
<>
    

    
    
    <div className="con my-4">

    
    <h1>
        {props.heading}
    </h1>
   
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea class="form-control" id="exampleFormControlTextarea1"  onChange={handleOnChange} value={text} rows="8"  > </textarea>
  <div className="he my-4">

  <button type="button" class="btn btn-primary mx-4" onClick={handleUpcase} >Convert To Uppercase</button>
  <button type="button" class="btn btn-primary mx-4" onClick={handleLocase}  > Convert To Lowercase</button>
  <button type="button" class="btn btn-primary mx-4" onClick={handleRev}  > Reverse</button>
  
  
  </div>
</div>
    
</div>
     <div>
<h3> Your Text Has {text.split(" ").length} words and {text.length} characters</h3>
<h2>
    Prreview
</h2>
<p>{text}</p>
     </div>
     </>
  )
  }
    
      
    