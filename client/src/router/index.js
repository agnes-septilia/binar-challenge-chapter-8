import React from "react";
import { Routes, Route } from "react-router-dom";


// import page
import Homepage from "../pages/Homepage";


// components
function Router() {
    return (
        <Routes>
            <Route path='/' Component={ Homepage } />
        </Routes>
    )
};


export default Router;