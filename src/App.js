import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import { useState } from 'react';
import Style from './Pages/Style';

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = ()=> {
  if(mode === 'light') {
    setMode('dark')
    document.body.style.backgroundColor = 'gray';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';

  }
}

  return (
    <>
<Router>
<Navbar mode={mode} toggleMode={toggleMode}/>
  <Routes>
    <Route path='/' element={<Home mode={mode}/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/style' element={<Style/>}/>
  </Routes>
  <Footer mode={mode}/>
</Router>
    </>
  );
}

export default App;
