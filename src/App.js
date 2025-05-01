import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductView from "./page/ProductView";
import TopMenu from "./component/TopMenu";
import {useEffect, useState} from "react";


function App() {
    const[auth, setAuth] = useState(false)

    useEffect(() => {
        console.log("A: ", auth);
    }, [auth]);
    return (
        <div className="">
            <TopMenu auth={auth}/>
            <Routes>
                <Route path={"/"} element={<ProductAll/>}/>
                <Route path={"/login"} element={<Login setAuth={setAuth}/>}/>
                <Route path={"/productView/:idx"} element={<ProductView/>}/>
            </Routes>
        </div>
    );
}

export default App;
