import React from 'react';
import '../../css/common/sidemenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SideMenu = ({ selectedMenu, setSelectedSideMenu, setSelectedNotice, setPreviewImage, setSelectedDiary }) => {
    let menuContent;

    const sideMenuNoticeClickHandler = (index) => {
        setSelectedSideMenu(index);
        setSelectedNotice(0);
    };

    const selectDiaryCliclHandler = (index1, index2) => {
        setSelectedSideMenu(index1);
        setSelectedDiary(index2);
    };

    if (selectedMenu === 1) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
                    <img src="/test_imgs/png/diary3.png" style={{ width: '45px', marginRight: '15px' }} />
                    육아 일기
                </div>
                <div>
                    <div className="side_menu_sub_btn" onClick={() => selectDiaryCliclHandler(1, 0)}>
                        - 일기
                    </div>
                    <div className="side_menu_sub_btn" onClick={() => selectDiaryCliclHandler(2)}>
                        - 달력
                    </div>
                    <div className="side_menu_sub_btn" onClick={() => selectDiaryCliclHandler(3)}>
                        - 앨범
                    </div>
                </div>
                <div
                    className="side_menu_btn"
                    style={{ marginTop: '15px' }}
                    onClick={() => selectDiaryCliclHandler(4, 0)}
                >
                    <img src="/test_imgs/png/diary1.png" style={{ width: '45px', marginRight: '15px' }} />
                    육아 수첩
                </div>
            </div>
        );
    } else if (selectedMenu === 2) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => setSelectedSideMenu(1)}>
                    <img src="/test_imgs/png/아기여워.png" style={{ width: '45px', marginRight: '15px' }} />
                    아&nbsp;~&nbsp;&nbsp;기여워!
                </div>
                <div>
                    <div className="side_menu_sub_btn" onClick={() => setSelectedSideMenu(1)}>
                        - 전체 게시글
                    </div>
                    <div className="side_menu_sub_btn" onClick={() => setSelectedSideMenu(2)}>
                        - 내 게시글
                    </div>
                </div>
                <div
                    className="side_menu_btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modal_for_post_img"
                    onClick={() => setPreviewImage(null)}
                >
                    <img src="/test_imgs/png/pencil_logo.png" style={{ width: '45px', marginRight: '15px' }} />새 글
                    작성하기
                </div>
                <div className="side_menu_btn" style={{ marginTop: '15px' }} onClick={() => setSelectedSideMenu(3)}>
                    <img src="/test_imgs/png/bag.png" style={{ width: '45px', marginRight: '15px' }} />
                    아기자기 쇼핑하기
                </div>
                <div>
                    <div className="side_menu_sub_btn" onClick={() => setSelectedSideMenu(6)}>
                        - 전체 상품
                    </div>
                    <div className="side_menu_sub_btn" onClick={() => setSelectedSideMenu(3)}>
                        - 진행 중인 상품
                    </div>
                    <div className="side_menu_sub_btn" onClick={() => setSelectedSideMenu(4)}>
                        - 진행 예정 상품
                    </div>
                    <div className="side_menu_sub_btn" onClick={() => setSelectedSideMenu(5)}>
                        - 진행 종료 상품
                    </div>
                </div>
            </div>
        );
    } else if (selectedMenu === 3) {
        menuContent = (
            <div>
                <div className="side_menu_btn" onClick={() => sideMenuNoticeClickHandler(1)}>
                    <img src="/test_imgs/png/post-it.png" style={{ width: '45px', marginRight: '15px' }} />
                    공지사항
                </div>
                <div
                    className="side_menu_btn"
                    onClick={() => setSelectedSideMenu(2)}
                    // data-bs-toggle="modal"
                    // data-bs-target="#modal_for_post_img"
                    style={{ marginTop: '15px' }}
                >
                    <img src="/test_imgs/png/pencil_logo.png" style={{ width: '45px', marginRight: '15px' }} />
                    공지사항 작성하기
                </div>
            </div>
        );
    } else {
        menuContent = '';
    }

    return <div className="side_menu_wrap yg_font">{menuContent}</div>;
};

export default SideMenu;
