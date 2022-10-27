
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './component/Error/Error';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Order from './component/Order/Order';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
      <Route path='/shop' element={<Shop></Shop>}></Route>
      <Route path='/order' element={<Order></Order>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      <Route path='*' element={<Error></Error>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
