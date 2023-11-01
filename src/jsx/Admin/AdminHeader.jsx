import React, { useState } from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/common/common.css';
import '../../css/common/adminheader.css';
import axios from "axios";
import {tokenAction} from "../../js/api/redux_store/slice/tokenSlice";
import {userStateAction} from "../../js/api/redux_store/slice/userLoginSlice";
import {useDispatch} from "react-redux";
import token_config from "../../js/api/config/token_config";
import adminToken_config from "../../js/api/config/adminToken_config";
import {adminTokenAction} from "../../js/api/redux_store/slice/adminTokenSlice";

const AdminHeader = ({ setSelectedMenu }) => {
    // const [isAdminSidebarOpen, setisAdminSidebarOpen] = useState(false);

    const adminTokenName = adminToken_config.tokenName;
    const server = adminToken_config.server;
    const navigate = useNavigate();
    const adminLoginDispatch = useDispatch();
    const adminTokenDispatch = useDispatch();

    const adminLogOut = async () => {
        const confirmLogout = window.confirm('정말 로그아웃 하시겠습니까?');

        if (confirmLogout) {
            try {
                await axios.post(`${server}/admin/logOut`);
                adminTokenDispatch(adminTokenAction.setAdminTokenName(''));
                adminTokenDispatch(adminTokenAction.setAdminTokenExpired(''));
                adminLoginDispatch(userStateAction.setState(false));
                alert('로그아웃에 성공하였습니다.');
                navigate('/admin/sign_in');
            } catch (error) {
                console.log('에러 : ' + error);
            }
        }
    };


    return (
        <>
            {/* Admin Page Header START*/}
            {
                <header>
                    <div id="admin_header_wrap">
                        <div className="admin_logo_container">
                            <Link to="/admin" className="flex">
                                <img className="admin_logo_img" src="/test_imgs/logo/logo.png" />
                                <span style={{ marginLeft: '10px' }}>아기자기</span>
                                <span style={{ marginLeft: '5px', paddingTop: '15px', fontSize: '0.6em' }}>admin</span>
                            </Link>
                        </div>
                        {/* <div className="admin_nav_bar">
                            <NavLink
                                to="/admin/user_suspended/"
                                activeStyle={{ color: '#fff' }}
                                onClick={() => setSelectedMenu(1)}
                            >
                                유저 관리
                            </NavLink>
                            <Link to="/admin/admin_authorization/" onClick={() => setSelectedMenu(2)}>
                                관리자 승인
                            </Link>
                            <Link to="/admin/admin_post/" onClick={() => setSelectedMenu(3)}>
                                공지사항
                            </Link>
                            <Link to="/admin/post_report" onClick={() => setSelectedMenu(4)}>
                                게시물 신고 리스트
                            </Link>
                            <Link to="/admin/comment_report" onClick={() => setSelectedMenu(5)}>
                                댓글 신고 리스트
                            </Link>
                            <Link to="/admin/co-buying_list" onClick={() => setSelectedMenu(6)}>
                                공동구매 상품 관리
                            </Link>
                        </div> */}
                        <div className="admin_btn_page">
                            <Link to="/admin_modify">
                                <input
                                    type="button"
                                    className="btn btn-outline-dark admin_btn"
                                    style={{ border: 'none' }}
                                    value="회원 수정"
                                    onClick={() => {
                                        setSelectedMenu(7);
                                    }}
                                />
                            </Link>

                            <input
                                type="button"
                                className="btn btn-outline-dark admin_btn"
                                style={{ border: 'none' }}
                                value="로그아웃"
                                onClick={() => {
                                    adminLogOut();
                                }}
                            />
                        </div>
                    </div>
                </header>
            }
            {/* Admin Page Header END*/}
        </>
    );
};

export default AdminHeader;
