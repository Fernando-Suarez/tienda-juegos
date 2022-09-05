import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer}  from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart} from './components/Cart/Cart.jsx'





function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
          <header>
            <NavBar></NavBar>
          </header>
          <div className='custom-body'>
            <Routes>
            <Route path="/" element={<ItemListContainer greeting="Tienda Juegos"></ItemListContainer>}></Route>
            <Route path="/categoria/:categoriaId" element={<ItemListContainer greeting="Tienda Juegos"></ItemListContainer>}></Route>
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            </Routes>
          </div>    
      </div>
    </BrowserRouter>
    
  );
}

export default App;
