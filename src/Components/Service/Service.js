import React from 'react';

const Service = (props) => {
    const {teacher, phone, img, subject, salary, education, position} = props.service
    // console.log(props.service)
    return (
        <div>
            <div className="flex p-5 border-4 border-black">
                <div>
                    <img src={img} alt="Empty!"/>
                </div>
                <div>
                <p>Teacher Name: {teacher}</p>
                <p>{position}</p>
                <p>Education: {education}</p>
                <p>Phone: {phone}</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Service;