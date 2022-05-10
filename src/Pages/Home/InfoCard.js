import React from 'react';

const InfoCard = ({ img, bg, title, description }) => {
    return (
        <div className={`card lg:card-side shadow-xl mt-20 text-white p-4 ${bg}`}>
            <figure>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-left">{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;