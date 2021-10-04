import React from 'react';
import { Link } from 'react-router-dom';

const DisplayClass = (props) => {
    // console.log(props.singleClass)
    const {teacher, img, subject, id} = props.singleClass
    return (
        <div className="my-5">
            <div className="flex justify-between items-center border-2 border-gray-200 rounded w-full py-2 px-5">
                <div className="flex items-center gap-2">
                    <img src={img} alt="Empty!" width="100" height="100px" className="border-0 rounded-3xl"/>
                    <p className="text-xl font-bold">{teacher}</p>
                </div>
                <p className="text-xl font-semibold">Subject: {subject}</p>
                <div className="text-center">
                    <button className="bg-green-400 px-5 py-2 font-bold rounded"><Link to="/home">Class Details</Link></button>
                </div>
            </div>
            
        </div>
    );
};

export default DisplayClass;