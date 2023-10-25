import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const LoadingPostCard = () => {
    return(
        <>
        <div class="card" aria-hidden="true">
            <div class="d-flex justify-content-center">
                <div class="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
                <div class="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </p>
            </div>
            </div>
        </>
    );
};

export default LoadingPostCard;