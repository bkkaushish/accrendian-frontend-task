
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  //outlet used to add any thing between header and footer:

  return (
    <>
  <Header/>
  <Outlet/> 
  <Footer/>
       
    
    </>
  )
}

export default App
