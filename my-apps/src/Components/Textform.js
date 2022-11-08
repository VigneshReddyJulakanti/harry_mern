import React , {useState} from 'react'



export default function Textform(props) {
    const toupper = ()=>{
        console.log("to upper is clicked");
        let newtext=text.toUpperCase();

        setText(newtext);
    }
    const tolower = ()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }

    const handleclear = ()=>{
        let newtext="";
        setText(newtext);
    }
    const onChange =(event)=>{
        console.log("onChange");
        setText(event.target.value)

    }



    const [text ,setText]=useState("")

    return (
        <>
        <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
    
 
  <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} value={text} onChange={onChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={toupper}  >Convert to UpperCase</button>
<button className='btn btn-primary mx-1' onClick={tolower}  >Convert to LowerCase</button>
<button className='btn btn-primary mx-1' onClick={handleclear}  >Clear</button>
</div>
<div className='container' >
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s/).length} words and {text.length} characters</p>
    <p>{text.split(" ").length * 0.008} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above box to preview it here."}</p>
</div>
</>
            
    
    )
}
