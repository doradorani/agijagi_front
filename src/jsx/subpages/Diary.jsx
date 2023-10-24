import React from 'react';
// import $ from 'jquery';
import 'turn.js';
// import Turn from '../../js/subpage/Turn.js';
import '../../css/subpage/diary.css';
import DiaryBook from './diary/DiaryBook.jsx';
import DiaryBookDetail from './diary/DiaryBookDetail';
import { Route } from 'react-router';

// const options = {
//     width: 800,
//     height: 600,
//     autoCenter: true,
//     display: 'double',
//     acceleration: true,
//     elevation: 50,
//     gradients: !$.isTouch,
//     when: {
//         turned: function (e, page) {
//             console.log('Current view: ', $(this).turn('view'));
//         },
//     },
// };
// const pages = [
//     {
//         image: '/test_imgs/diary_imgs/아기1.jpg',
//         text: 'Page 1 text goes here.',
//     },
//     {
//         image: '/test_imgs/diary_imgs/아기2.jpg',
//         text: 'Page 2 text goes here.',
//     },
//     {
//         image: '/test_imgs/diary_imgs/아기1.jpg',
//         text: 'Page 3 text goes here.',
//     },
//     {
//         image: '/test_imgs/diary_imgs/아기2.jpg',
//         text: 'Page 4 text goes here.',
//     },
//     {
//         image: '/test_imgs/diary_imgs/아기1.jpg',
//         text: 'Page 5 text goes here.',
//     },
//     {
//         image: '/test_imgs/diary_imgs/아기2.jpg',
//         text: 'Page 6 text goes here.',
//     },
//     // Add more pages with image and text
// ];

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
