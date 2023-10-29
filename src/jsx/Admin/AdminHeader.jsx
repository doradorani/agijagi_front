import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/common/common.css';
import '../../css/common/adminheader.css';

const AdminHeader = ({ setSelectedMenu }) => {
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
                            <Link to="/admin_logout">
                                <input
                                    type="button"
                                    className="btn btn-outline-dark admin_btn"
                                    style={{ border: 'none' }}
                                    value="로그아웃"
                                    onClick={() => {
                                        setSelectedMenu(7);
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </header>
            }
            {/* Admin Page Header END*/}
        </>
    );
};

export default AdminHeader;
