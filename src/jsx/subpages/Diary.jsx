import React, { useState } from 'react';
import 'turn.js';
import '../../css/subpage/diary.css';
import DiaryBook from './diary/DiaryBook.jsx';
import DiaryBookDetail from './diary/DiaryBookDetail';
import { Route } from 'react-router';
import SideMenu from './SideMenu';
import Calendar from './diary/Calendar';
import Graph from './diary/Graph';
import Note from './diary/Note';

const Diary = ({ selectedMenu, selectedSideMenu, setSelectedSideMenu }) => {
    const [selectedDiary, setSelectedDiary] = useState(0);
    console.log('selectedSideMenu', selectedSideMenu);
    let diaryContents;

    if (selectedSideMenu === 1) {
        if (selectedDiary === 0) {
            diaryContents = (
                <>
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/diary3.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 일기</div>
                        <div
                            style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}
                        >
                            &#62;&nbsp;일기
                        </div>
                    </div>
                    <DiaryBook setSelectedDiary={setSelectedDiary} />
                    <DiaryBook setSelectedDiary={setSelectedDiary} />
                </>
            );
        } else if (selectedDiary === 1) {
            diaryContents = (
                <>
                    <DiaryBookDetail setSelectedDiary={setSelectedDiary} />
                </>
            );
        } else if (selectedDiary === 2) {
            diaryContents = <DiaryBookDetail setSelectedDiary={setSelectedDiary} />;
        }
    } else if (selectedSideMenu === 2) {
        diaryContents = (
            <>
                <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                    <img src="/test_imgs/png/diary3.png" style={{ width: '55px', marginRight: '15px' }} />
                    <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 일기</div>
                    <div style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
                        &#62;&nbsp;달력
                    </div>
                </div>
                <Calendar />
            </>
        );
    } else if (selectedSideMenu === 3) {
        diaryContents = <div></div>;
    } else if (selectedSideMenu === 4) {
        // diaryContents = <Note />;
        diaryContents = (
            <>
                <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                    <img src="/test_imgs/png/diary1.png" style={{ width: '55px', marginRight: '15px' }} />
                    <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 수첩</div>
                    {/* <div style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
                        &#62;&nbsp;수첩
                    </div> */}
                </div>
                <Graph setSelectedSideMenu={setSelectedSideMenu} />
            </>
        );
    } else if (selectedSideMenu === 5) {
        diaryContents = (
            <>
                <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                    <img src="/test_imgs/png/diary1.png" style={{ width: '55px', marginRight: '15px' }} />
                    <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 수첩</div>
                    {/* <div style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
                        &#62;&nbsp;수첩
                    </div> */}
                </div>
                <Note setSelectedSideMenu={setSelectedSideMenu} />
            </>
        );
    }

    return (
        <div className="diary_wrap">
            <div>
                <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg" />
            </div>
            <div className="diary_flex">
                <SideMenu selectedMenu={1} setSelectedSideMenu={setSelectedSideMenu} />
                <div className="post_section">
                    {diaryContents}
                    {/* <DiaryBook
                        setSelectedDiary={setSelectedDiary}
                    />
                    <DiaryBook
                        setSelectedDiary={setSelectedDiary}
                    />
                    <DiaryBookDetail
                        setSelectedDiary={1}
                    />
                    <Calendar /> */}
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
            {/* <div className="area_for_diary_detail">
                <Turn options={options} className="magazine">
                    {pages.map((page, index) => (
                        <div key={index} className="page">
                            <img className="diary_img_in_page" src={page.image} alt="" />
                            <p>{page.text}</p>
                        </div>
                    ))}
                </Turn>
            </div> */}

            {/* <DiaryBook/>
            <DiaryBook/> */}
        </div>
    );
};
export default Diary;
