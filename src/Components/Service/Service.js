import React from 'react';

const Service = (props) => {
    const {teacher, phone, img, salary, education, position} = props.service
    // console.log(props.service)
    
    return (
        <div>
            <div className="flex justify-evenly items-center m-5 p-5 border-2 border-gray-200 rounded ">
                <div className="w-1/4 h-1/4">
                    <img src={img} alt="Empty!" className="border-0 rounded "/>
                </div>
                <div className="text-xl font-semibold">
                    <p className="m-5">Teacher Name: {teacher}</p>
                    <p className="m-5">{position}</p>
                    <p className="m-5">Salary: {salary}</p>
                    <p className="m-5">Education: {education}</p>
                    <p className="m-5">Phone: {phone}</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Service;