import React from 'react';
import SideMenu from './SideMenu';
import NoticeTable from './noticeboard/NoticeTable';
import '../../css/subpage/notice.css';

const Notice = ({ selectedMenu }) => {
    return (
        <div className="notice_wrap">
            <div>
                <img className="notice_main_img" src="/test_imgs/notice_imgs/notice_board2.jpg" />
            </div>
            <div className="notice_flex">
                <SideMenu selectedMenu={3} />
                <div>
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/post-it.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>공지사항</div>
                    </div>
                    <div>
                        <NoticeTable />
                    </div>
                </div>
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
