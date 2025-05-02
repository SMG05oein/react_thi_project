import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductView from "./page/ProductView";
import TopMenu from "./component/TopMenu";
import {useEffect, useState} from "react";
import PrivateRoute from "./route/PrivateRoute";


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
                <Route path={"/login"} element={<Login setAuth={setAuth} auth={auth}/>}/>
                <Route path={"/productView/:id"} element={<PrivateRoute auth={auth}/>}/>
            </Routes>
        </div>
    );
}

export default App;
