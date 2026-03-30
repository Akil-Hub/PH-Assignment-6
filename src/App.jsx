import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Testimonials from './components/Testimonials'
import MainToolsSection from './components/MainToolsSection'
  import { ToastContainer } from 'react-toastify';
import GetStartedSection from './components/GetStartedSection'
const getData = async() => {
    const res = await fetch('/data.json')
    return res.json()
    
};

const promiseData = getData()

const App = () => {

  const [cart, setCart] = useState([])

  return (
    < >
    <Navbar cart={cart}/>
    <Banner/>
    <Testimonials/>
    <MainToolsSection promiseData={promiseData} cart={cart} setCart={setCart}/>
    <GetStartedSection/>


<ToastContainer/>
    </>
  )
}

export default App