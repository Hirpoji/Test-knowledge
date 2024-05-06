import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header.jsx";
import Drawer from "./components/layout/Drawer/Drawer.jsx";
import FormsPage from "./page/FormsPage/FormsPage.jsx";
import NewFormsPage from "./page/NewForm/NewFormsPage.jsx";


function App() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    return (<Router>
        <Header setIsOpenDrawer={setIsOpenDrawer}/>
        <Drawer setIsOpenDrawer={setIsOpenDrawer} isOpenDrawer={isOpenDrawer}/>
        <Routes>
            <Route element={<div/>} path={"/"}></Route>
            <Route element={<FormsPage/>} path={"/forms"}/>
            <Route element={<NewFormsPage/>} path={"/forms/:id"}/>
        </Routes>
    </Router>);
}

export default App;
