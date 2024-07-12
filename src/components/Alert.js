import React,{useState} from 'react'

export default function Alert(props) {

    
     
  return ( 
     <>

{/* {props.alert?.message!=null&&( */}
    <div class="alert alert-warning alert-dismissible fade show" >
  <strong> {props.alert.type}</strong> {props.alert.message}
 
</div>


     </>
   
  )
}
