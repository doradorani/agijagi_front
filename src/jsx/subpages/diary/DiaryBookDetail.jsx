import React from 'react';
import $ from 'jquery';
import 'turn.js';
import Turn from '../../../js/subpage/Turn.js';
import '../../../css/subpage/diary.css';

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
const pages = [
    {
        image: '/test_imgs/diary_imgs/아기1.jpg',
        title: 'page 1 title',
        text: 'Page 1 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기2.jpg',
        title: 'page 2 title',
        text: 'Page 2 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기1.jpg',
        title: 'page 3 title',
        text: 'Page 3 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기2.jpg',
        title: 'page 4 title',
        text: 'Page 4 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기1.jpg',
        title: 'page 5 title',
        text: 'Page 5 text goes here.',
    },
    {
        image: '/test_imgs/diary_imgs/아기2.jpg',
        title: 'page 6 title',
        text: 'Page 6 text goes here.',
    },
    // Add more pages with image and text
];

const DiaryBookDetail = () => {
    return (
        <div className="area_for_diary_detail">
            <Turn options={options} className="magazine">
                {pages.map((page, index) => (
                    <div key={index} className="detail_page">
                        <img className="diary_img_in_page" src={page.image} alt="" />
                        <h3>{page.title}</h3>
                        <p>{page.text}</p>
                    </div>
                ))}
            </Turn>
        </div>
    );
};
export default DiaryBookDetail;
