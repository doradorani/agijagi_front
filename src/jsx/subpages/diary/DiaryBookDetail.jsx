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

const DiaryBookDetail = ({ setSelectedDiary }) => {
    return (
        <>
            <div className="flex" style={{ justifyContent: 'space-between' }}>
                <div className="yg_font" style={{ fontSize: '40px' }}>
                    수민이 육아일기
                </div>
                <div
                    className="yg_font"
                    style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10px', cursor: 'pointer' }}
                    onClick={() => setSelectedDiary(0)}
                >
                    &#60;&nbsp;뒤로가기
                </div>
            </div>
            <div className="area_for_diary_detail">
                <Turn options={options} className="magazine">
                    {pages.map((page, index) => (
                        <div key={index} className="detail_page">
                            <img
                                className="diary_img_in_page"
                                src={page.image}
                                style={{
                                    width: '350px',
                                    height: '350px',
                                    margin: '25px auto 10px',
                                    objectFit: 'cover',
                                }}
                                alt=""
                            />
                            <h3>{page.title}</h3>
                            {/* <p>{page.text}</p> */}
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet hic excepturi temporibus
                                doloremque nihil? Harum assumenda quos aut voluptatum blanditiis maiores eveniet!
                                Repudiandae deserunt deleniti maxime ipsum, laudantium alias non?
                            </p>
                        </div>
                    ))}
                </Turn>
            </div>
        </>
    );
};
export default DiaryBookDetail;
