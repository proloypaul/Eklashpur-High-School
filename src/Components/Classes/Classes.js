import React, {useState, useEffect} from 'react';
import DisplayClass from '../DisplayClass/DisplayClass';

const Classes = () => {
    const [showClass, setShowClass] = useState([])  // i can't use calss and classes variabel cause this is keywoard
    useEffect(() => {
        fetch("../fackData.json")
            .then(res => res.json())
            .then(data => setShowClass(data))
    }, [])
   
    return (
        // class section data loaded 
        <div className="p-20">
            <h1 className="text-4xl font-bold my-10 text-center">Our Classes</h1>
            {
                showClass.map(singleClass => <DisplayClass key={singleClass.id} singleClass={singleClass}></DisplayClass>)
            }
            
        </div>
    );
};

export default Classes;