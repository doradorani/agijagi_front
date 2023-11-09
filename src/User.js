import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
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
import CoBuyingList from './jsx/subpages/co-buying/CoBuyingList';
import CoBuyingDetail from './jsx/subpages/co-buying/CoBuyingDetail';
import ScrollToTop from './jsx/ScrollToTop';
import UserModifyInfo from './jsx/Member/UserModifyInfo';
import UserInfo from './jsx/Member/UserInfo';
import CoBuyingFundingList from './jsx/subpages/co-buying/CoBuyingFundingList';
import CoBuyingHitList from './jsx/subpages/co-buying/CoBuyingHitList';

function User() {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [selectedSideMenu, setSelectedSideMenu] = useState(1);
    const [selectedNotice, setSelectedNotice] = useState(0);
    const [selectedUserLoginBtn, setSelectedUserLoginBtn] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    // useEffect(()=>{
    //     console.log("selected", selectedSideMenu )
    // },[selectedSideMenu])

    return (
        <>
            <Header
                setSelectedMenu={setSelectedMenu}
                setSelectedSideMenu={setSelectedSideMenu}
                setSelectedNotice={setSelectedNotice}
                selectedUserLoginBtn={selectedUserLoginBtn}
                setSelectedUserLoginBtn={setSelectedUserLoginBtn}
            />
            <Routes>
                <Route path='/' element={<Home setSelectedUserLoginBtn={setSelectedUserLoginBtn} />}></Route>
                <Route
                    path='/user_login'
                    element={<UserLogin setSelectedUserLoginBtn={setSelectedUserLoginBtn} />}
                ></Route>
                {/* <Route path="/user_sign_up" element={<UserSignUp />}></Route> */}
                <Route path='/user_info' element={<UserInfo />}></Route>
                <Route path='/user_modify_info' element={<UserModifyInfo />}></Route>
                <Route
                    path='/user_myFunding'
                    element={
                        <CoBuyingFundingList selectedMenu={selectedMenu} setSelectedSideMenu={setSelectedSideMenu} />
                    }
                ></Route>
                <Route
                    path='/user_myHit'
                    element={<CoBuyingHitList selectedMenu={selectedMenu} setSelectedSideMenu={setSelectedSideMenu} />}
                ></Route>

                <Route
                    path='/diary'
                    element={
                        <Diary
                            selectedMenu={selectedMenu}
                            selectedSideMenu={selectedSideMenu}
                            setSelectedSideMenu={setSelectedSideMenu}
                        />
                    }
                ></Route>
                <Route
                    path='/community/*'
                    element={
                        <Community
                            selectedMenu={selectedMenu}
                            selectedSideMenu={selectedSideMenu}
                            setSelectedSideMenu={setSelectedSideMenu}
                            previewImage={previewImage}
                            setPreviewImage={setPreviewImage}
                        />
                    }
                ></Route>
                {/* <Route path="/post_detail" element={<DetailPost />}></Route> */}
                {/* <Route path="/co-buying_list" element={<CoBuyingList />}></Route> */}
                <Route path='/co-buying_detail' element={<CoBuyingDetail />}></Route>
                <Route
                    path='/notice/*'
                    element={
                        <Notice
                            selectedMenu={selectedMenu}
                            selectedSideMenu={selectedSideMenu}
                            setSelectedSideMenu={setSelectedSideMenu}
                            selectedNotice={selectedNotice}
                            setSelectedNotice={setSelectedNotice}
                        />
                    }
                ></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default User;
