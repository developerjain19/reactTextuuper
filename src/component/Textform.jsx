import { useState } from "react"


export default function Textform(props) {
  const [text, settext] = useState('Enter Your Text Here');

  const handleUpClick = () =>
  {
    let newtext = text.toUpperCase();
    settext(newtext)
    props.showAlert("text converted to upper case" , "success");
  }
  const handlelowerClick = () =>
  {
    let newtext = text.toLowerCase();
    settext(newtext)
    props.showAlert('text converted to lower case' , 'success');
  }
  const handlecopyClick = () =>
  {
    

   let  newtext = navigator.clipboard.writeText(text)
    settext(newtext);
  }
  const handleOnChange = (event) =>
  {
    settext(event.target.value);

    
  }



  return (
    <>   
  <div class="mb-3 container">
    <h1>{props.title}</h1>
  <textarea className="form-control" id='mybox' onChange={handleOnChange}  value={text} rows="8" ></textarea>
  <button className='btn btn-primary mt-3' onClick={handleUpClick} >Convert this text To upper</button>
  <button className='btn btn-success mt-3' onClick={handlelowerClick} >Convert this text to lower</button>
  <button className='btn btn-success mt-3' onClick={handlecopyClick} >Copy Text</button>
  </div>


  <div class="mb-3 container">
    <h2>Your Text Summery</h2>
    <p>{text.split(" ").length} word {text.length} latters</p>
    <p>{0.008 * text.split(" ").length} minute read </p>
    <h2>preview</h2>
    <p>{text}</p>
  </div>
    </>
  )
}
