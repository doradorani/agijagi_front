import User from './User';
import Admin from './Admin';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './jsx/ScrollToTop';
import NoMatch from './NoMatch';

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/*" element={<User />}></Route>
                    <Route path="/admin/*" element={<Admin />}></Route>
                    <Route path="*" element={<NoMatch />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
