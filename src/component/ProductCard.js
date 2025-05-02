import React from 'react';
import {useNavigate} from "react-router-dom";

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showView=()=>{
        navigate(`/productView/${item.id}`);
    }

    return (
        <div className={"Card"} onClick={showView}>
            <img src={item ? item.img : null} alt={""}/>
            <div>{item.choice === true ? "Conscious choice" : ""}</div>
            <div>{item ? item.title : null}</div>
            <div>{item ? item.price : null}</div>
            <div>{item.new ? "신제품" : ""}</div>
        </div>
    );
};

export default ProductCard;