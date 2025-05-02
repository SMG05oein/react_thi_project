import React, {useEffect, useState} from 'react';
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {

    const [query, setQuery] = useSearchParams();
    const [productList, setProductList] = useState([]);

    const getProducts = async () =>{
        let getQuery = query.get('q') || "";
        console.log("쿼리값은 ", getQuery);
        let url = `http://localhost:5000/products?q=${getQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(()=>{
        getProducts()
    }, [query])

    return (

        <div>
            <Container>
                <Row>
                    {productList.map((product) => (
                        <Col lg={3}>
                            <ProductCard item={product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;
