import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";



const TopMenu = ({auth}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    const url = "data:image/png;base64,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";

    const navigate = useNavigate();
    const goToLogin=()=>{
        navigate("/login");
    }
    const goToHome=()=>{
        navigate("/");
    }

    const search=(event)=>{
        if(event.key === "Enter"){
            let key = event.target.value;
            // console.log(key);
            navigate(`/?q=${key}`);
        }
    }

    return (
        <div>
            {/**Start login*/}
            <div className="topMenuOne" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUserCircle} />
                <div>{auth === true ? "로그아웃":"로그인"}</div>
            </div>
            {/**End login*/}
            {/**Start logo*/}
            <div className="topMenuTwo">
                <img onClick={goToHome} src={url} />
            </div>
            {/**End logo*/}
            {/**Start TopMenu*/}
            <div className={"topMenuThr"}>
                <ul>
                    {menuList.map(menu =><li>{menu}</li>)}
                </ul>

                <div className={"search"}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input placeholder={"검색어를 입력해주세요"} type={"text"} onKeyPress={(event)=>search(event)}></input>
                </div>
            </div>
            {/**End TopMenu*/}
        </div>
    );
};

export default TopMenu;