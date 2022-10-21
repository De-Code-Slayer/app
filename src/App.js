import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} 
from "react-router-dom";
import SignupPage from './pages/Register';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="">
    <div className="">
     <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/account/:id" element={<AccountPage/>} />
            

        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;