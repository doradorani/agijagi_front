import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/common/common.css';
import '../css/common/header.css';

const Header = () => {
    return (
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
                    <Link to="/diary">육아 기록</Link>
                    <Link to="/community">육아 커뮤니티</Link>
                    <Link to="/notice">공지사항</Link>
                </div>
                <div className='login_btn_main_page'>
                    <Link>
                    {/* <Link to="/login"> */}
                        <button type="button" class="btn btn-outline-dark">로그인</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
