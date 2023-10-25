import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/subpage/diaryBook.css';

const DiaryBook = () => {
    return (
        <div className="component">
            <ul className="align book_ul">
                <li>
                    <figure className="book">
                        <ul className="hardcover_front book_ul">
                            <li></li>
                            <li>
                                <img src="/test_imgs/diary_imgs/diary5.jpg" alt="" width="100%" height="100%" />
                            </li>
                        </ul>
                        <ul className="page book_ul">
                            <li></li>
                            <li>
                                <Link className="diarybook_btn" to="/diary/diarybook_detail">
                                    보러가기
                                </Link>
                            </li>
                        </ul>
                        <ul className="hardcover_back book_ul">
                            <li></li>
                            <li></li>
                        </ul>
                        <ul className="book_spine book_ul">
                            <li></li>
                            <li></li>
                        </ul>
                    </figure>
                </li>
            </ul>
        </div>
    );
};

export default DiaryBook;
