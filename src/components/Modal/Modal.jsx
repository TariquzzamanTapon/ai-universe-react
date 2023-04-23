import React from 'react';

const Modal = ({ singleData }) => {
    const { description, image_link, integrations, features } = singleData;
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal text-white">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100 ">
                        <div className="card-body">
                            <h2 className="card-title font-bold">{description ? description : "Not Found"}</h2>
                            <div className="flex justify-between ">
                                <div className="">
                                    <h1 className="text-2xl font-bold">Features</h1>
                                    {
                                        Object.values(features || {}).map(value => <li>{value.feature_name}</li>)
                                    }
                                </div>
                                <div className="">
                                    <h1 className="text-2xl font-bold">Integrations</h1>
                                    {
                                        integrations && integrations.map(integration => <li>{integration}</li>)
                                        // integrations.map(integration => <li>{integration}</li>)
                                    }
                                </div>
                            </div>
                        </div>
                        <figure>
                            <img src={image_link && image_link[0]} alt="Album" />
                        </figure>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;