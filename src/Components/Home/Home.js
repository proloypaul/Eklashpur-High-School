import React from 'react';
import About from '../About/About';
import Classes from '../Classes/Classes';
import Searvices from '../Services/Searvices';
import img from '../../images/bgHome-one.jfif';


const Home = () => {
    return (
        <div>
            <div>
                <div className="w-3/4 m-auto">
                    <img src={img} alt="Empty!"/>
                </div>
                <div className="mx-32 text-4xl py-10 font-bold ">
                    <p>We are determind to</p>
                    <p>Achive the highest</p>
                    <p>Standards</p>
                </div>
            </div>
            
            <div>
                <About></About>
                <Searvices></Searvices>
                <Classes></Classes>
            </div>
            
        </div>
    );
};

export default Home;