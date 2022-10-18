
import './App.css';
import { About } from './Component/About';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import { Header } from './Component/Header';
import { Home } from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import { NewsStateProvider } from './Context/NewsContext'
// import 

export function App() {

  return (
    <>
    <NewsStateProvider>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
     </NewsStateProvider>
    </>
   
  );
}

