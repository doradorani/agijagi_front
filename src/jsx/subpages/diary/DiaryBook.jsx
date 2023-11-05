import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/subpage/diaryBook.css';

const DiaryBook = ({ setSelectedDiary, img, name, no, setMethodUrl }) => {
    const clickGoToHandler = () => {
        setMethodUrl({ mehtod: 'get', url: '/diary/dailyDiary/' + no });
        setSelectedDiary(1);
    };
    const clickModifyHandler = () => {
        setMethodUrl({ mehtod: 'get', url: '/diary/childrenDetail/' + no });
        setSelectedDiary(4);
    };
    const clickDeleteHandler = () => {
        setMethodUrl({ mehtod: 'delete', url: '/diary/childBook/' + no });
        setSelectedDiary(0);
    };

    return (
        <div className="component yg_font">
            <ul className="align book_ul">
                <li>
                    <figure className="book">
                        <ul className="hardcover_front book_ul">
                            <li></li>
                            <li>
                                <img src={img} alt="" width="100%" height="100%" />
                            </li>
                        </ul>
                        <ul className="page book_ul">
                            <li></li>
                            <li>
                                <ul className="flex diarybook_btn_container">
                                    <li>
                                        <Link className="diarybook_btn" onClick={clickGoToHandler}>
                                            보러가기
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="diarybook_modify_btn_container">
                                            <Link className="diarybook_btn" onClick={clickModifyHandler}>
                                                수정하기
                                            </Link>
                                            <Link className="diarybook_btn" onClick={clickDeleteHandler}>
                                                삭제하기
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
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
                            <h2>{name} 육아일기</h2>
                            <span>세환 ♥ 영주</span>
                            <p>
                                The web is an ever-changing medium whose scope, application, audience and platform
                                continue to grow on a daily basis.{' '}
                            </p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    );
};

export default DiaryBook;
