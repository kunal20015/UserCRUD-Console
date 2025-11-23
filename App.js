import React from 'react'
import Update from './Components/Main/Update';
import Read from './Components/Main/Read';
import Create from './Components/Main/Create';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Read/>}/>
        <Route path="/create" element = {<Create/>}/>
        <Route path="/update/:id" element = {<Update/>}/>
      </Routes>
    </Router>
  )
}

export default App