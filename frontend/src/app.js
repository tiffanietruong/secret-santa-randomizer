import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import Landing from "./components/pages/Landing/Landing";
import NavBar from './components/NavBar/NavBar';
import ThisYear from './components/pages/ThisYear/ThisYear';
import UniRenegades from './components/pages/UniRenegades/UniRenegades';

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/randomize' element={<Landing />} />
                    <Route path='/uni-renegades' element={<UniRenegades />} />
                    <Route path='/uni-renegades/this-year' element={<ThisYear />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
