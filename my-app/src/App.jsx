
import {Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import withOptionRegister from './components/hoc/withOptionRegister';
import withRegisterLogin  from './components/hoc/withRegisterLogin';
import NavbarComponent from './components/NavbarComponent';

const LoginForm = withOptionRegister(withRegisterLogin);

function App() {
 
  return (
    <>
      <NavbarComponent />      
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginForm isLogin={true}/>} />
        <Route path="/register" element={<LoginForm isLogin={false} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
