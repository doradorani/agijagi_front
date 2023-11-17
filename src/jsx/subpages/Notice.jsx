import React, { useState } from 'react';
import SideMenu from './SideMenu';
import SideBanner from './SideBanner';
import NoticeTable from './noticeboard/NoticeTable';
import '../../css/subpage/notice.css';
import DetailNotice from './noticeboard/DetailNotice';
import WriteNotice from '../Admin/subpages/noticeboard/WriteNotice';
import { Route, Routes, useParams } from 'react-router';

const Notice = ({ setSelectedSideMenu, setSelectedNotice, setSelectedUserLoginBtn }) => {
    setSelectedUserLoginBtn(false);
    return (
        <div className='notice_wrap'>
            <div>
                <img className='notice_main_img' src='/test_imgs/notice_imgs/notice_board2.jpg' />
            </div>
            <div className='notice_flex' style={{ width: '1370px', margin: '50px auto' }}>
                <SideMenu
                    selectedMenu={3}
                    setSelectedSideMenu={setSelectedSideMenu}
                    setSelectedNotice={setSelectedNotice}
                />
                <div>
                    <div className=' flex yg_font' style={{ marginBottom: '30px' }}>
                        <img src='/test_imgs/png/post-it.png' style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>공지사항</div>
                    </div>
                    <Routes>
                        <Route path='/*' element={<NoticeTable />} />
                        <Route path='/detail_notice/:noticeId' element={<DetailNotice />} />
                    </Routes>
                </div>
                <SideBanner />
            </div>
        </div>
    );
};

export default Notice;
