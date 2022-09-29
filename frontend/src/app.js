import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import Landing from "./components/Landing/Landing";
import NavBar from './components/NavBar/NavBar';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/randomize' element={<Landing />} />
                    <Route path='/uni-renegades' element={<Landing />} />
                    <Route path='/2022' element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
