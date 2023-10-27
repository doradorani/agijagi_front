import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './jsx/Header';
import Home from './jsx/Home';
import UserLogin from './jsx/Member/UserLogin';
import UserSignUp from './jsx/Member/UserSignUp';
import Diary from './jsx/subpages/Diary';
import Community from './jsx/subpages/Community';
import Notice from './jsx/subpages/Notice';
import Footer from './jsx/Footer';
import DetailPost from './jsx/subpages/community/DetailPost';
import DiaryBook from './jsx/subpages/diary/DiaryBook';
import DiaryBookDetail from './jsx/subpages/diary/DiaryBookDetail';
import Graph from './jsx/subpages/diary/Graph';
import Note from './jsx/subpages/diary/Note';
import Calendar from './jsx/subpages/diary/Calendar';
import CoBuyingList from './jsx/subpages/co-buying/CoBuyingList';
import CoBuyingDetail from './jsx/subpages/co-buying/CoBuyingDetail';
import ScrollToTop from './jsx/ScrollToTop';

function User() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [selectedSideMenu, setSelectedSideMenu] = useState(1);

    // useEffect(()=>{
    //     console.log("selected", selectedSideMenu )
    // },[selectedSideMenu])

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
                    <Route path="/user_login" element={<UserLogin isLoggedIn={isLoggedIn} />}></Route>
                    <Route path="/user_sign_up" element={<UserSignUp />}></Route>
                    <Route
                        path="/diary"
                        element={
                            <Diary
                                selectedMenu={selectedMenu}
                                selectedSideMenu={selectedSideMenu}
                                setSelectedSideMenu={setSelectedSideMenu}
                            />
                        }
                    ></Route>
                    <Route path="/diarybook_detail" element={<DiaryBookDetail />}></Route>
                    <Route path="/graph" element={<Graph />}></Route>
                    <Route path="/note" element={<Note />}></Route>
                    <Route path="/calendar" element={<Calendar />}></Route>
                    <Route
                        path="/community"
                        element={
                            <Community
                                selectedMenu={selectedMenu}
                                selectedSideMenu={selectedSideMenu}
                                setSelectedSideMenu={setSelectedSideMenu}
                            />
                        }
                    ></Route>
                    <Route path="/detail" element={<DetailPost />}></Route>
                    <Route path="/co-buying_list" element={<CoBuyingList />}></Route>
                    <Route path="/co-buying_detail" element={<CoBuyingDetail />}></Route>
                    <Route path="/notice" element={<Notice selectedMenu={selectedMenu} />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default User;
