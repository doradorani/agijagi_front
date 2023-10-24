import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './jsx/Header';
import Home from './jsx/Home';
import Diary from './jsx/subpages/Diary';
import Community from './jsx/subpages/Community';
import Notice from './jsx/subpages/Notice';
import Footer from './jsx/Footer';
import Calendar from './jsx/subpages/Calender';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/diary" element={<Diary />}></Route>
                    <Route path="/calendar" element={<Calendar />}></Route>
                    <Route path="/community" element={<Community />}></Route>
                    <Route path="/notice" element={<Notice />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
