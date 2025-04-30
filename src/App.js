import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductView from "./page/ProductView";
import TopMenu from "./component/TopMenu";

function App() {
    return (
        <div className="">
            <TopMenu />
            <Routes>
                <Route path={"/"} element={<ProductAll/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/productView/:idx"} element={<ProductView/>}/>
            </Routes>
        </div>
    );
}

export default App;
