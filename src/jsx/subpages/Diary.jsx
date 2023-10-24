import React from 'react';
import $ from 'jquery';
import 'turn.js';
import Turn from '../../js/subpage/Turn.js';
import '../../css/subpage/diary.css';

const options = {
    width: 800,
    height: 600,
    autoCenter: true,
    display: 'double',
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
        turned: function (e, page) {
            console.log('Current view: ', $(this).turn('view'));
        },
    },
};

// const pages = [
//     '/test_imgs/diary_imgs/아기1.jpg',
//     '/test_imgs/diary_imgs/아기2.jpg',
//     '/test_imgs/diary_imgs/아기3.jpg',
//     '/test_imgs/diary_imgs/아기4.jpg',
//     '/test_imgs/diary_imgs/아기1.jpg',
//     '/test_imgs/diary_imgs/아기2.jpg',
//     '/test_imgs/diary_imgs/아기3.jpg',
//     '/test_imgs/diary_imgs/아기4.jpg',
// ];

const pages = [
    {
        image: '/test_imgs/diary_imgs/아기1.jpg',
        text: 'Page 1 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기2.jpg',
        text: 'Page 2 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기1.jpg',
        text: 'Page 3 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기2.jpg',
        text: 'Page 4 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기1.jpg',
        text: 'Page 5 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기2.jpg',
        text: 'Page 6 text goes here.',
    },
    // Add more pages with image and text
];

const Diary = () => {
    return (
        <div className="diary_wrap">
            <div>
                <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg" />
            </div>
            <div className="area_for_diary_detail">
                {/* <Turn options={options} className="magazine">
                    {pages.map((page, index) => (
                        <div key={index} className="page">
                            <img src={page} alt="" />
                        </div>
                    ))}
                </Turn> */}
                <Turn options={options} className="magazine">
                    {pages.map((page, index) => (
                        <div key={index} className="page">
                            <img className="diary_img_in_page" src={page.image} alt="" />
                            <p>{page.text}</p>
                        </div>
                    ))}
                </Turn>
            </div>
        </div>
    );
};
export default Diary;
