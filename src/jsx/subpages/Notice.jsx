import React, { useState } from 'react';
import SideMenu from './SideMenu';
import NoticeTable from './noticeboard/NoticeTable';
import '../../css/subpage/notice.css';
import DetailNotice from './noticeboard/DetailNotice';
import WriteNotice from './noticeboard/WriteNotice';

const Notice = ({ selectedMenu, selectedSideMenu, setSelectedSideMenu, selectedNotice, setSelectedNotice }) => {
    let noticeContents;

    if (selectedSideMenu === 1) {
        if (selectedNotice === 0) {
            noticeContents = (
                <>
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/post-it.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>공지사항</div>
                    </div>
                    <NoticeTable setSelectedNotice={setSelectedNotice} />
                </>
            );
        } else if (selectedNotice === 1) {
            noticeContents = (
                <>
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/post-it.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>공지사항</div>
                    </div>
                    <DetailNotice setSelectedNotice={setSelectedNotice} />
                </>
            );
        }
    } else if (selectedSideMenu === 2) {
        noticeContents = (
            <>
                <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                    <img src="/test_imgs/png/pencil_logo.png" style={{ width: '55px', marginRight: '15px' }} />
                    <div style={{ fontSize: '40px', marginRight: '15px' }}>공지사항 작성하기</div>
                </div>
                <WriteNotice />
            </>
        );
    }

    return (
        <div className="notice_wrap">
            <div>
                <img className="notice_main_img" src="/test_imgs/notice_imgs/notice_board2.jpg" />
            </div>
            <div className="notice_flex">
                <SideMenu
                    selectedMenu={3}
                    setSelectedSideMenu={setSelectedSideMenu}
                    setSelectedNotice={setSelectedNotice}
                />
                <div>{noticeContents}</div>
                <div>
                    <div>
                        <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                    </div>
                    <div>
                        <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;
