import React from "react";
import DiaryBook from "./DiaryBook.jsx/DiaryBook";
import '../../css/subpage/diary.css'

const Diary = () => {
    return (
        <div className="diary_wrap">
            <div>
                <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg" alt="Diary Main" /> {/* 이미지 경로 수정 */}
            </div>
            <DiaryBook/>
            <DiaryBook/>
            <DiaryBook/>
        </div>
    );
};

export default Diary;