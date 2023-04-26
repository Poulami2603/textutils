import React, { useState } from 'react'


const Home = (props) => {

  const [text, setText] = useState()

  const handelUp = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handelLo = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handelCl = () => {
    setText(" ");
  }

  const handelSp = () => {
    let newText = text.replace(/\s+/g, ' ').trim()
    setText(newText)
  }

  const handelCp = () => {
    navigator.clipboard.writeText(text);
  }

  const handelOnChange = (event) => {
    setText(event.target.value)
  }
  
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <form>
          <div className="form-group my-3">
            <label htmlFor="exampleFormControlTextarea1"><strong>Enter Your Text Below</strong></label>
            <textarea className="form-control my-3" value={text} onChange={handelOnChange} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'grey' : 'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={handelUp}>Change to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={handelLo}>Change to Lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={handelCl}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={handelSp}>Remove Extra Space</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={handelCp}>Copy Text</button>
          </div>
        </form>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary :</h3>
        <p>{text && text.length<= 0 ? 0 : text && text.split(' ').length} words and {text && text.length<= 0 ? 0 : text && text.length} characters.</p>
        <p>{text && text.length<= 0 ? 0 : text && 0.008 * text.split(' ').length} Minutes is required to read this paragraph.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Home