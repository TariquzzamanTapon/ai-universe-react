import React from 'react';
import Button from '../Button/Button';

const SingleData = ({ singleData }) => {
    const { name, image, description, published_in } = singleData;
    return (
        <>
            <div className="bg-white h-70">
                <img className='w-100 rounded' src={image} alt="" />
                <div className="p-4">
                    <h2 className='text-2xl text-black font-bold'>Features</h2>
                    {
                        singleData.features.map((feature, index) => <p className='text-black m-3'>{index + 1}. {feature}</p>)
                    }
                </div>
                <hr></hr>
                <div className='p-4 text-black '>
                    <h2 className='text-3xl  font-bold'>{name}</h2>
                </div>

                <div className="flex justify-between items-center text-black p-2">
                    <div className="flex text-black">
                        <span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        </span>
                        {published_in}
                    </div>
                    <div>
                        <span className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default SingleData;