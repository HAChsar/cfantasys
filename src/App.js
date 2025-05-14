import Login from "./components/login";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Reg from "./components/Register";
import Home from "./components/Home";
import Pets from "./components/Pets";
import P1details from "./components/p1details";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/petfantasy' element={<Pets/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Reg/>}/>
     <Route path='/p1details' element={<P1details/>}/>
     </Routes>
    </BrowserRouter>
  );

}
export default App;
