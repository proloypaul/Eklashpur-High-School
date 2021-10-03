import React from 'react';
import About from '../About/About';
import Classes from '../Classes/Classes';
import Searvices from '../Services/Searvices';

const Home = () => {
    return (
        <div className="border-4 border-black p-20">
            <h1>Home section</h1>
            <About></About>
            <Searvices></Searvices>
            <Classes></Classes>
        </div>
    );
};

export default Home;