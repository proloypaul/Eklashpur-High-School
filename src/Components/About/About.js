import React from 'react';
import imgTwo from '../../images/shool_Pic.jpg';

const About = () => {
    return (
        <div className="p-20">
            <div className="grid grid-cols-2 g-5">
                <div>
                    <h1>Our High School</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis accusamus culpa, doloremque a necessitatibus amet veritatis labore architecto, possimus, nisi fuga nemo maxime repellat? Eum minus molestiae</p>
                </div>
                <div>
                    <img src={imgTwo} alt="Empty!"/>
                </div>
            </div>
            
            
        </div>
    );
};

export default About;