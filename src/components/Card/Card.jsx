import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';

const Card = () => {

    const handleShowAll = () => {
        setShowAll(true);
    };

    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
            const data = await res.json();
            setData(data.data.tools);
        };
        loadData();

    }, []);
    console.log(data);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 p-8">

                {
                    data.slice(0, showAll ? 12 : 6).map((singleData) => <SingleData singleData={singleData} key={singleData.id}></SingleData>)
                }
            </div>
            {!showAll && 
            <span onClick={handleShowAll}>
                <Button >See more</Button>
            </span>}
        </>
    );
};

export default Card;