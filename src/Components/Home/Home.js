import React from 'react';
import About from '../About/About';
import Classes from '../Classes/Classes';
import Searvices from '../Services/Searvices';
import img from '../../images/bgHome-one.jfif';


const Home = () => {
    return (
        // home section and display all component section 
        <div>
            <div>
                <div className="mx-32 text-4xl text-headerTitle py-10 font-bold ">
                    <p className="text-headerTitle">We are determind to</p>
                    <p>Achive the highest</p>
                    <p>Standards</p>
                </div>
                <div className="w-3/4 m-auto">
                    <img src={img} alt="Empty!"/>
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