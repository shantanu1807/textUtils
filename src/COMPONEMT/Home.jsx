import React,{useState} from 'react'

function Home() {
  const [btntext,setBtntext]=useState("Uppercase");
  const [text,setText]=useState("");
  const TextChange=()=>{
  setBtntext(btntext==="Uppercase"? "Lowercase" : "Uppercase");
  btntext==="Lowercase"? setText(text.toLowerCase()) : setText(text.toUpperCase());
  
  }
  const onChangeHandler=(event)=>
  {
    setText(event.target.value);
  }
  const ClearHandler=()=>
  {
    setText("");
  }


  return (
    <div className="container my-4">
      <h3>Enter Text Here</h3>
      <div class="input-group">
        <textarea class="form-control" rows="8" aria-label="With textarea" placeholder="Enter text here" value={text} onChange={onChangeHandler}></textarea>
      </div>
        <button className="btn btn-primary my-3" onClick={TextChange}>{btntext}</button>
        <button className="btn btn-primary my-3 mx-3" onClick={ClearHandler}>Clear</button>
        <button className="btn btn-primary my-3 mx-3">Uppercase</button>
        <button className="btn btn-primary my-3 mx-3">Uppercase</button>
        <button className="btn btn-primary my-3 mx-3">Uppercase</button>
    </div>
  );
}

export default Home