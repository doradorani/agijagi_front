import React from 'react';
import 'turn.js';
import '../../css/subpage/diary.css';
import DiaryBook from './diary/DiaryBook.jsx';
import DiaryBookDetail from './diary/DiaryBookDetail';
import { Route } from 'react-router';

const Diary = () => {
    return (
        <div className="diary_wrap">
            <div>
                <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg" />
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
            <DiaryBook/>
            <DiaryBookDetail/>
            {/* <DiaryBook/>
            <DiaryBook/> */}
        </div>
    );
};
export default Diary;
