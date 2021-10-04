import React from 'react';
import imgTwo from '../../images/shool_Pic.jpg';

const About = () => {
    return (
        <div className="p-20">
            <div className="grid grid-cols-2 gap-x-10">
                <div>
                    <h1 className="text-2xl font-bold">Our High School</h1>
                    <p className="text-sm mt-5 font-light">Describe our Elashpur High School Education system. 
                        The second level is High School which incorporates grade 6 to 10. There are both English Medium and Bangla Medium school in Bangladesh. Government prefer Bangla medium schools. Though there are some cadet colleges which are also government owned institutions and they offer English medium studies. Usually, the private schools are offer English medium.
                    </p>
                </div>
                <div>
                    <img src={imgTwo} alt="Empty!"/>
                </div>
            </div>
            
            
        </div>
    );
};

export default About;