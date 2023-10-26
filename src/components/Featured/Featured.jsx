import React from 'react';
import imgFeature from './Presentation1.jpg';

const Featured = () => {
    return (
        <div className="container-fluid bg-black text-light" >
            <div className="row">
                <div className="col-12 p-0 d-flex justify-content-center align-items-center">
                    <div className="position-relative">
                        
                        <img
                            className="img-fluid"
                            src={imgFeature}
                            alt="imgFeature"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;