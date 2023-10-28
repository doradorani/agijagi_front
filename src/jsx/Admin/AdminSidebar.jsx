import React from 'react';

const AdminSidbar = ({ selectedMenu, setSelectedSideMenu }) => {
    let menuContent;

    if (selectedMenu === 1) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
                    유저 관리
                </div>
            </div>
        );
    } else if (selectedMenu === 2) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
                    관리자 승인
                </div>
            </div>
        );
    } else if (selectedMenu === 3) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
                    공지사항
                </div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(2)}>
                    공지사항 작성
                </div>
            </div>
        );
    } else if (selectedMenu === 4) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
                    게시물 신고
                </div>
            </div>
        );
    } else if (selectedMenu === 5) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
                    댓글 신고
                </div>
            </div>
        );
    } else if (selectedMenu === 6) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
                    공동구매 상품
                </div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(2)}>
                    공동구매 상품 등록
                </div>
            </div>
        );
    } else {
        menuContent = '';
    }

    return <div className="side_menu_wrap yg_font">{menuContent}</div>;
};

export default AdminSidbar;
