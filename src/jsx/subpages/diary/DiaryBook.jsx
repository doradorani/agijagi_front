import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/subpage/diaryBook.css';

const DiaryBook = ({setSelectedDiary}) => {
    return (
        <div className="component yg_font">
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
                                {/* <Link className="diarybook_btn" to="/diarybook_detail" onClick={()=>setSelectedDiary(1)}>
                                    보러가기
                                </Link> */}
                                <Link className="diarybook_btn" onClick={()=>setSelectedDiary(1)}>
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
                        <figcaption>
                            <h2>수민이 육아일기</h2>
                            <span>세환 ♥ 영주</span>
                            <p>The web is an ever-changing medium whose scope, application, audience and platform continue to grow on a daily basis. </p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    );
};

export default DiaryBook;
