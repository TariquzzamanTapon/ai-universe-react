import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);
    const [singleData, setSingleData] = useState({});
    // console.log(uniqueId);

    const handleShowAll = () => {
        setShowAll(true);
    };

    // const handleSort =()=>{
    //     const storedData = data.sort((a,b)=>{
    //         return new Date(a.published_in) - new Date(b.published_in);
    //     });
    //     setData([data, ...storedData]);
    // }

useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res => res.json())
        .then(data => setSingleData(data.data))
}, [uniqueId]);
// console.log(singleData);

useEffect(() => {
    const loadData = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const data = await res.json();
        setData(data.data.tools);
    };
    loadData();

}, []);
// console.log(data);
return (
    <>
        <span>
            <Button >Sort By Date</Button>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 p-8">

            {
                data.slice(0, showAll ? 12 : 6).map((singleData) => <SingleData singleData={singleData}
                    key={singleData.id}
                    setUniqueId={setUniqueId}
                ></SingleData>)
            }
        </div>
        {!showAll &&
            <span onClick={handleShowAll}>
                <Button >See more</Button>
            </span>}
        <Modal singleData={singleData}></Modal>
    </>
);
};

export default Card;