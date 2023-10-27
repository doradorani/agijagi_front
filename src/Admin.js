import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './jsx/Footer';
import Header from './jsx/Header';
import Home from './jsx/Home';
import ScrollToTop from './jsx/ScrollToTop';

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [selectedSideMenu, setSelectedSideMenu] = useState(1);

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Header
                    isLoggedIn={isLoggedIn}
                    setSelectedMenu={setSelectedMenu}
                    setSelectedSideMenu={setSelectedSideMenu}
                />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default Admin;
