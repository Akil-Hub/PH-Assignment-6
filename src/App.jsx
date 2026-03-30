import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import MainToolsSection from './components/MainToolsSection'

const getData = async() => {
    const res = await fetch('/data.json')
    return res.json()
    
};

const promiseData = getData()

const App = () => {

  const [cart, setCart] = useState([])

console.log(cart)
  return (
    < >
    <Navbar/>
    <Banner/>
    <Testimonials/>
    <MainToolsSection promiseData={promiseData} cart={cart} setCart={setCart}/>
    </>
  )
}

export default App