
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './component/Error/Error';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import Order from './component/Order/Order';
import Shop from './component/Shop/Shop';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/order' element={<Order></Order>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<Error></Error>}></Route> 
     </Routes>
    
    </div>
  );
}

export default App;
