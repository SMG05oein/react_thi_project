import React, {useEffect} from 'react';
import {Container, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate, useSearchParams} from "react-router-dom";

const Login = ({setAuth, auth}) => {
    const [idx, setIdx] = useSearchParams();
    let getIdx = idx.get('idx') | null;

    const navigate = useNavigate();
    const loginUser = (event) => {
        event.preventDefault();
        setAuth(true);
        navigate("/");
    }
    const goToBack = (event) => {
        event.preventDefault();
        navigate("/");
    }
    useEffect(() => {
        if(auth === true && getIdx === 1){
            setAuth(false);
            navigate("/");
        }
    },[getIdx]);

    // if(auth === true && getIdx === 1) {
    //     setAuth(false);
    //     navigate("/");
    //     return null;
    // }
    // else
    {
        return (
            <Container>
                <Form onSubmit={(event)=>loginUser(event)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            귀하의 이메일은 다른 이에게 절대 공유하지 않겠습니다.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        로그인
                    </Button>
                    <Button onClick={(event)=>goToBack(event)} style={{marginLeft: "10px"}} variant="primary" type="submit">
                        이전
                    </Button>
                </Form>
            </Container>
        );
    }
};

export default Login;