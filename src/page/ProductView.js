import React, {useEffect, useState} from 'react';
import {Col, Container, Dropdown, Row} from "react-bootstrap";
import {getElement} from "bootstrap/js/src/util";
import {useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProductView = () => {

    let {id} = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const [size, setSize] = useState([]);
    const [selectedSize, setSelectedSize] = useState("사이즈를 선택하시오");


    const getProductView= async ()=>{
        let url = `http://localhost:5000/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setProduct(data)
        setSize(data.size);
    }
    useEffect(() => {
        getProductView();
    },[])

    const CB =(q)=> { //Check Button
        q === 1 ? navigate("/") : alert("추가 되었습니다!!\n\n\n사실 추가 안 됨;;");
    }

    return (
        <Container>
            <Row>
                <Col lg={6} className="view_img">
                    <img src={product? product.img : null} alt={""} />
                </Col>
                <Col lg={6}>
                    <div className={"viewTitle"}>{product.title}</div>
                    <div className={"viewPrice"}>₩ {product.price}</div>
                    <div className={"viewChoice"}>{product.choice? "Conscious choice": null}</div>

                    <Dropdown>
                        <Dropdown.Toggle style={{minWidth: "100px"}} variant="success" id="dropdown-basic">
                            {selectedSize}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {size.map((size) => (
                                <Dropdown.Item key={`${size}`} onClick={()=>setSelectedSize(size)}>
                                    {size}
                                </Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Row>
                        <Col lg={6}>
                            <Button variant={"dark"} style={{marginTop: "10px", width: "100%"}} onClick={CB}>추가</Button>
                        </Col>
                        <Col lg={6}>
                            <Button variant={"primary"} style={{marginTop: "10px", width: "100%"}} onClick={(q)=>CB(1)}>이전</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductView;