import Home from './routes/home/home.component'

import { Route, Routes, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/navigationbar.component'
import Signin from './routes/Authentication/authentication'
import Shop from './routes/Shop/shop.component'
import { useContext, useEffect } from 'react'
import SHOP_DATA from './shop-data.json'
import Checkout from './routes/card-checkout/checkout'
import Cart_Checkout from './routes/Cart-checkout/checkout'
import axios from './axios'
import { useDispatch } from 'react-redux'
import { setCategories } from './redux/store/categories/categories.action'



const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const setP = async () => {
      await axios.get('api/categories').then((results) => {
        dispatch(setCategories(results["data"]["hydra:member"]))
        // setCategories(results["data"]["hydra:member"])
      })
    }
    setP()

  }, [])

  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Signin />} />
          <Route path='cart-item' element={<Checkout />} />
        </Route>
        <Route path='cart-checkout' element={<Cart_Checkout />} />
      </Routes>


  )
}

export default App;
