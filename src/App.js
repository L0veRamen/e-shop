import { Routes, Route } from 'react-router-dom'

import Authentication from './routes/authentication/authentication.components'
import Home from './routes/home/home.components'
import Navigation from './routes/navigation/navigation.components'
import Checkout from './routes/checkout/checkout.components'
import Shop from './routes/shop/shop.components'




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> 
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
