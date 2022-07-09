import Home from './routes/home/home.component'

import { Route, Routes, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/navigationbar.component'
import Signin from './routes/Authentication/authentication'
import Shop from './routes/Shop/shop.component'
import { useContext, useEffect } from 'react'
import { ProductContext, ProductProvider } from './Context/product-context'
import SHOP_DATA from './shop-data.json'
import Checkout from './routes/card-checkout/checkout'


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Signin />} />
          <Route path='cart-item' element={<Checkout />} />
        </Route>
      </Routes>

  )
}

export default App;
