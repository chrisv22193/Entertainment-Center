import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Trending from './Pages/Trending/Trending';
import TV from './Pages/TV/TV';

function App() {
  return (
    <BrowserRouter>    
      <Header/>
      <div className="app">
        <Container>
          <Routes>
            <Route path='/' element={<Trending/>} exact/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/tv' element={<TV/>}/>
            <Route path='/search' element={<Search/>}/>
          </Routes>
        </Container>
      </div>

      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
