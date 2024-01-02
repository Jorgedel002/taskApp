import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {connect} from "react-redux";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProtectedRoute from "./ProtectedRoute.jsx"

function ZuzApp(props) {
    const { loaded, setState } = props;
    useEffect(() => {
        setTimeout(() => {
            setState(true)
        }, 1000)
    }, [])
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<ProtectedRoute/>}>
                <Route path='/' element={<Home/>}></Route>
            </Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return {
        loaded: state.App.loaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setState: (loaded) => dispatch({ type: "APP_STATE", state: { loaded: loaded } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ZuzApp);