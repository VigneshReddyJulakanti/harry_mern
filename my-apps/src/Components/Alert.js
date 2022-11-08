import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{
        return word.charAt(0).toUpperCase() +word.slice(1).toLowerCase(); 

    } 
    return (
        props.alertText && <div>
         
            
            <div className={`alert alert-${props.alertText.statee} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alertText.statee)}</strong> {props.alertText.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>

            
        </div>
    )
}
