import React from 'react'

const Style = () => {

    const handelPri = () => {
    let id = document.getElementById('exampleFormControlTextarea1')
    let myS = 'color: blue; font-family: cursive; font-size: 30px'
    id.setAttribute("style", myS)
}

const handelSec = () => {
    let id = document.getElementById('exampleFormControlTextarea1')
    let myS = 'color: gray; font-family: fantasy; font-size: 30px'
    id.setAttribute("style", myS)
}

const handelSuc = () => {
    let id = document.getElementById('exampleFormControlTextarea1')
    let myS = 'color: green; font-family: monospace; font-size: 30px'
    id.setAttribute("style", myS)
}

const handelLig = () => {
    let id = document.getElementById('exampleFormControlTextarea1')
    let myS = 'color: lightgray; font-family: fangsong; font-size: 30px'
    id.setAttribute("style", myS)
}

const handelDan = () => {
    let id = document.getElementById('exampleFormControlTextarea1')
    let myS = 'color: red; font-family: serif; font-size: 30px'
    id.setAttribute("style", myS)
}

const handelWar = () => {
    let id = document.getElementById('exampleFormControlTextarea1')
    let myS = 'color: orange; font-family: sans-serif; font-size: 30px'
    id.setAttribute("style", myS)
}

const handelInf = () => {
    let id = document.getElementById('exampleFormControlTextarea1')
    let myS = 'color: darkturquoise; font-family: math; font-size: 30px'
    id.setAttribute("style", myS)
}

const handelDar = () => {
    let id = document.getElementById('exampleFormControlTextarea1')
    let myS = 'color: black; font-family: emoji; font-size: 30px'
    id.setAttribute("style", myS)
}

return (
    <>
        <nav className="navbar navbar-light bg-gray">
            <span className="navbar-brand mb-0 h1">Choose your style from <strong>Style Palet</strong></span>
            <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={handelPri} style={{ height: '30px', width: '30px', cursor: 'pointer', border:'2px solid black'}} ></div>
                <div className="bg-secondary rounded mx-2" onClick={handelSec} style={{ height: '30px', width: '30px', cursor: 'pointer', border:'2px solid black'}}></div>
                <div className="bg-success rounded mx-2" onClick={handelSuc} style={{ height: '30px', width: '30px', cursor: 'pointer', border:'2px solid black'}}></div>
                <div className="bg-light rounded mx-2" onClick={handelLig} style={{ height: '30px', width: '30px', cursor: 'pointer', border:'2px solid black'}}></div>
                <div className="bg-danger rounded mx-2" onClick={handelDan} style={{ height: '30px', width: '30px', cursor: 'pointer', border:'2px solid black'}}></div>
                <div className="bg-warning rounded mx-2" onClick={handelWar} style={{ height: '30px', width: '30px', cursor: 'pointer', border:'2px solid black'}}></div>
                <div className="bg-info rounded mx-2" onClick={handelInf} style={{ height: '30px', width: '30px', cursor: 'pointer', border:'2px solid black'}}></div>
                <div className="bg-dark rounded mx-2" onClick={handelDar} style={{ height: '30px', width: '30px', cursor: 'pointer', border:'2px solid black'}}></div>
            </div>
        </nav>
        <div className="container">
            <form>
                <div className="form-group my-3">
                    <label htmlFor="exampleFormControlTextarea1"><strong>Enter Your Text Below</strong></label>
                    <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </form>
        </div>
    </>
)
}

export default Style