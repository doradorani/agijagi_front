import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/common/common.css';
import '../css/common/header.css';

const Header = ({ isLoggedIn, setSelectedMenu, setSelectedSideMenu }) => {
    const headerMenuClickHandler = (headerMenuIndex) => {
        setSelectedMenu(headerMenuIndex);
        setSelectedSideMenu(1);
    };

    return (
        <>
            {isLoggedIn === false && (
                <header>
                    <div id="header_wrap">
                        <div className="logo_wrap">
                            <Link to="/">
                                <img className="logo_img" src="/test_imgs/logo/logo.png" />
                                아기자기
                            </Link>
                        </div>
                        <div className="nav_bar">
                            <Link to="/">홈</Link>
                            <Link to="/diary" onClick={() => headerMenuClickHandler(1)}>
                                육아 기록
                            </Link>
                            <Link to="/community" onClick={() => headerMenuClickHandler(2)}>
                                육아 커뮤니티
                            </Link>
                            <Link to="/notice" onClick={() => headerMenuClickHandler(3)}>
                                공지사항
                            </Link>
                        </div>
                        <div className="login_btn_main_page">
                            <Link to="/user_login">
                                <button type="button" className="btn btn-outline-dark" style={{ border: 'none' }}>
                                    로그인
                                </button>
                            </Link>
                        </div>
                    </div>
                </header>
            )}
            {/* Login Page Header START*/}
            {isLoggedIn === true && (
                <header>
                    <div id="header_wrap_login">
                        <Link to="/">
                            <div className="logo_wrap_login">
                                <img className="logo_img" src="/test_imgs/logo/logo.png" />
                                <span>아기자기</span>
                            </div>
                        </Link>
                        <div className="login_btn_main_page">
                            <Link to="/user_login" style={{ marginRight: '15px' }}>
                                <button
                                    type="button"
                                    className="btn btn-outline-dark login_btn"
                                    style={{ border: 'none' }}
                                >
                                    로그인
                                </button>
                            </Link>
                            <Link to="/user_sign_up">
                                <button type="button" className="btn btn-outline-dark" style={{ border: 'none' }}>
                                    회원가입
                                </button>
                            </Link>
                        </div>
                    </div>
                </header>
            )}
            {/* Login Page Header END*/}
        </>
    );
};

export default Header;
