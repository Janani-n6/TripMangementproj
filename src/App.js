import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div>
      <Router>
          <div>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/Sign" element={<SignUpPage/>}/>
              <Route path="/Login" element={<LoginPage/>}/> 
            </Routes>
          </div>
      </Router>
      
    </div>
  )
}
export default App;