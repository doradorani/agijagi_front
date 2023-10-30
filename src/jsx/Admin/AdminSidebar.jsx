import React, { useState } from 'react';
import '../../css/common/adminSidebar.css';
import { Link } from 'react-router-dom';

const AdminSidbar = ({ setSelectedMenu }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // let sidebarContent;

    // const sidebarContent = isCollapsed ? (
    //     <>
    //         <img src="./filter01.png" />
    //         &nbsp; 필터 숨기기
    //     </>
    // ) : (
    //     <>
    //         <img src="./filter01.png" />
    //         필터
    //     </>
    // );

    // if (selectedMenu === 1) {
    //     menuContent = (
    //         <div>
    //             <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
    //                 유저 관리
    //             </div>
    //         </div>
    //     );
    // } else if (selectedMenu === 2) {
    //     menuContent = (
    //         <div>
    //             <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
    //                 관리자 승인
    //             </div>
    //         </div>
    //     );
    // } else if (selectedMenu === 3) {
    //     menuContent = (
    //         <div>
    //             <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
    //                 공지사항
    //             </div>
    //             <div className="side_menu_btn" onClick={() => setSelectedSideMenu(2)}>
    //                 공지사항 작성
    //             </div>
    //         </div>
    //     );
    // } else if (selectedMenu === 4) {
    //     menuContent = (
    //         <div>
    //             <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
    //                 게시물 신고
    //             </div>
    //         </div>
    //     );
    // } else if (selectedMenu === 5) {
    //     menuContent = (
    //         <div>
    //             <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
    //                 댓글 신고
    //             </div>
    //         </div>
    //     );
    // } else if (selectedMenu === 6) {
    //     menuContent = (
    //         <div>
    //             <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
    //                 공동구매 상품
    //             </div>
    //             <div className="side_menu_btn" onClick={() => setSelectedSideMenu(2)}>
    //                 공동구매 상품 등록
    //             </div>
    //         </div>
    //     );
    // } else {
    //     menuContent = '';
    // }

    return (
        <div className="admin_side_menu_wrap yg_font" style={{ backgroundColor: '#eff0f3' }}>
            <nav className="navbar" style={{ paddingBottom: '0px' }}>
                <div className="container-fluid ">
                    <button
                        className="navbar-toggler flex"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent1"
                        aria-expanded="false"
                        style={{ border: 'none' }}
                    >
                        <span className="navbar-toggler1-icon">
                            <img src="/test_imgs/png/down-arrow.png" style={{ width: '30px' }} />
                        </span>
                        <div style={{ marginLeft: '15px', lineHeight: '30px' }}>전체 항목 펼쳐보기</div>
                    </button>
                </div>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent1">
                <nav className="navbar" style={{ marginTop: '0px', paddingTop: '0px' }}>
                    <div className="container-fluid">
                        <Link to="user_suspended" className="link_btn_admin_sidebar">
                            <button
                                className="navbar-toggler flex"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent2"
                                aria-expanded="false"
                                style={{ border: 'none', width: '245px' }}
                                onClick={() => {
                                    setSelectedMenu(1);
                                }}
                            >
                                <span className="navbar-toggler1-icon">
                                    <img src="/test_imgs/svg/group.svg" style={{ width: '30px' }} />
                                </span>
                                <div style={{ marginLeft: '15px', lineHeight: '30px' }}>유저 관리</div>
                            </button>
                        </Link>
                        {/* <div className="collapse" id="navbarToggleExternalContent2">
                            <button
                                className="navbar-toggler flex"
                                type="button"
                                style={{ border: 'none', width: '245px' }}
                            >
                                <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                    <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                </span>
                                <div style={{ marginLeft: '15px', lineHeight: '30px' }}>전체 유저 </div>
                            </button>
                            <button
                                className="navbar-toggler flex"
                                type="button"
                                style={{ border: 'none', width: '245px' }}
                            >
                                <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                    <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                </span>
                                <div style={{ marginLeft: '15px', lineHeight: '30px' }}>전체 항목 </div>
                            </button>
                        </div> */}
                        <Link to="admin_authorization" className="link_btn_admin_sidebar">
                            <button
                                className="navbar-toggler flex"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent3"
                                aria-expanded="false"
                                style={{ border: 'none', width: '245px' }}
                                onClick={() => setSelectedMenu(1)}
                            >
                                <span className="navbar-toggler1-icon">
                                    <img src="/test_imgs/svg/approval.svg" style={{ width: '30px' }} />
                                </span>
                                <div style={{ marginLeft: '15px', lineHeight: '30px' }}>관리자 승인</div>
                            </button>
                        </Link>
                        <div className="collapse" id="navbarToggleExternalContent3">
                            <Link to="admin_authorization" className="link_btn_admin_sidebar">
                                <button
                                    className="navbar-toggler flex"
                                    type="button"
                                    style={{ border: 'none', width: '245px' }}
                                >
                                    <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                        <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                    </span>
                                    <div style={{ marginLeft: '15px', lineHeight: '30px' }}>승인 관리자 </div>
                                </button>
                            </Link>
                            <Link to="admin_authorization" className="link_btn_admin_sidebar">
                                <button
                                    className="navbar-toggler flex"
                                    type="button"
                                    style={{ border: 'none', width: '245px' }}
                                >
                                    <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                        <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                    </span>
                                    <div style={{ marginLeft: '15px', lineHeight: '30px' }}>미승인 관리자 </div>
                                </button>
                            </Link>
                        </div>
                        <Link to="admin_post" className="link_btn_admin_sidebar">
                            <button
                                className="navbar-toggler flex"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent4"
                                aria-expanded="false"
                                style={{ border: 'none', width: '245px' }}
                            >
                                <span className="navbar-toggler1-icon">
                                    <img src="/test_imgs/svg/notice.svg" style={{ width: '30px' }} />
                                </span>
                                <div style={{ marginLeft: '15px', lineHeight: '30px' }}>공지사항</div>
                            </button>
                        </Link>
                        <div className="collapse" id="navbarToggleExternalContent4">
                            <Link to="admin_post" className="link_btn_admin_sidebar">
                                <button
                                    className="navbar-toggler flex"
                                    type="button"
                                    style={{ border: 'none', width: '245px' }}
                                >
                                    <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                        <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                    </span>
                                    <div style={{ marginLeft: '15px', lineHeight: '30px' }}>등록된 공지사항 </div>
                                </button>
                            </Link>
                            <Link to="admin_post" className="link_btn_admin_sidebar">
                                <button
                                    className="navbar-toggler flex"
                                    type="button"
                                    style={{ border: 'none', width: '245px' }}
                                >
                                    <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                        <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                    </span>
                                    <div style={{ marginLeft: '15px', lineHeight: '30px' }}>작성하기 </div>
                                </button>
                            </Link>
                        </div>
                        <Link to="post_report" className="link_btn_admin_sidebar">
                            <button
                                className="navbar-toggler flex"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent5"
                                aria-expanded="false"
                                style={{ border: 'none', width: '245px' }}
                            >
                                <span className="navbar-toggler1-icon">
                                    <img src="/test_imgs/svg/report.svg" style={{ width: '30px' }} />
                                </span>
                                <div style={{ marginLeft: '15px', lineHeight: '30px' }}>신고 처리</div>
                            </button>
                        </Link>
                        <div className="collapse" id="navbarToggleExternalContent5">
                            <Link to="post_report" className="link_btn_admin_sidebar">
                                <button
                                    className="navbar-toggler flex"
                                    type="button"
                                    style={{ border: 'none', width: '245px' }}
                                >
                                    <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                        <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                    </span>
                                    <div style={{ marginLeft: '15px', lineHeight: '30px' }}>신고된 게시물 </div>
                                </button>
                            </Link>
                            <Link to="comment_report" className="link_btn_admin_sidebar">
                                <button
                                    className="navbar-toggler flex"
                                    type="button"
                                    style={{ border: 'none', width: '245px' }}
                                >
                                    <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                        <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                    </span>
                                    <div style={{ marginLeft: '15px', lineHeight: '30px' }}>신고된 댓글 </div>
                                </button>
                            </Link>
                        </div>
                        <Link to="co-buying_list" className="link_btn_admin_sidebar">
                            <button
                                className="navbar-toggler flex"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent6"
                                aria-expanded="false"
                                style={{ border: 'none', width: '245px' }}
                            >
                                <span className="navbar-toggler1-icon">
                                    <img src="/test_imgs/svg/shopping_cart.svg" style={{ width: '30px' }} />
                                    {/* <img src="/test_imgs/svg/shopping_bag.svg" style={{ width: '30px' }} /> */}
                                </span>
                                <div style={{ marginLeft: '15px', lineHeight: '30px' }}>공동 구매</div>
                            </button>
                        </Link>
                        <div className="collapse" id="navbarToggleExternalContent6">
                            <Link to="co-buying_list" className="link_btn_admin_sidebar">
                                <button
                                    className="navbar-toggler flex"
                                    type="button"
                                    style={{ border: 'none', width: '245px', display: 'flex', alignItems: 'flex-end' }}
                                >
                                    <span className="navbar-toggler1-icon" style={{ marginLeft: '15px' }}>
                                        <img src="/test_imgs/svg/chevron_right.svg" style={{ width: '30px' }} />
                                    </span>
                                    <div style={{ marginLeft: '15px', lineHeight: '30px' }}>공구 제품 관리 </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default AdminSidbar;
