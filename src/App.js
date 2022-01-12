import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCss from './components/Navbar/NavbarCss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Cart/Cart';
import Formulario from './Cart/Formulario';







const App = () => {

    return (
        <div className='hooks-app' >
            <BrowserRouter>
                <NavbarCss />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer />} />
                    <Route exact path='/categoria' element={<ItemListContainer />} />
                    <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
                    <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/formulario' element={<Formulario />} />
                </Routes>
            </BrowserRouter>

        </div >
    )
}

export default App


