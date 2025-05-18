import Login from "./components/login";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Reg from "./components/Register";
import Home from "./components/Home";
import Pets from "./components/Pets";
import P1details from "./components/p1details";
import P2details from "./components/p2details";
import P3details from "./components/p3details";
import P4details from "./components/p4details";
import Cimg from "./components/c1-carousel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/petfantasy' element={<Pets/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Reg/>}/>
     <Route path='/p1details' element={<P1details/>}/>
     <Route path='/p2details' element={<P2details/>}/>
     <Route path='/p3details' element={<P3details/>}/>
     <Route path='/p4details' element={<P4details/>}/>
     <Route path='/c1carousel' element={<Cimg/>}/>
      </Routes>
    </BrowserRouter>
  );

}
export default App;
