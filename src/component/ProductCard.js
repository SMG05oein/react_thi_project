import React from 'react';

const ProductCard = ({item}) => {
    return (
        <div className={"Card"}>
            <img src={item ? item.img : null} alt={""}/>
            <div>{item.choice === true ? "Conscious choice" : ""}</div>
            <div>{item ? item.title : null}</div>
            <div>{item ? item.price : null}</div>
            <div>{item.new ? "신제품" : ""}</div>
        </div>
    );
};

export default ProductCard;