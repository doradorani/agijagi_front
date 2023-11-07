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

const DiaryBookDetail = ({ setMethodUrl, setSelectedDiary, setDiaryData, diaryData }) => {
    const clickHandler = () => {
        setSelectedDiary(0);
        setMethodUrl({ method: 'get', url: '/diary/childrenInfo' });
    };
    const clickDiaryWriteHandler = () => {
        setSelectedDiary(3);
    };
    const clickDiaryModifyHandler = (cd_no, no) => {
        setDiaryData(null);
        setMethodUrl({ method: 'get', url: '/diary/dailyDiaryDetail/' + cd_no + '/' + no });
        setSelectedDiary(5);
    };
    const clickDiaryDeleteHandler = (cd_no, no) => {
        setMethodUrl({
            method: 'delete',
            url: '/diary/dailyDiary/' + cd_no + '/' + no,
            url2: '/diary/dailyDiary/' + cd_no,
        });
    };

    return (
        <div className="diary_book_detail_wrap">
            <div className="flex" style={{ justifyContent: 'space-between' }}>
                <div className="yg_font" style={{ fontSize: '40px' }}>
                    육아일기
                </div>
                <div className="flex">
                    <div
                        className="yg_font"
                        style={{
                            display: 'flex',
                            alignItems: 'flex-end',
                            marginBottom: '10px',
                            cursor: 'pointer',
                            marginRight: '20px',
                        }}
                        onClick={clickDiaryWriteHandler}
                    >
                        &nbsp;일기 쓰기
                    </div>
                    <div
                        className="yg_font"
                        style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10px', cursor: 'pointer' }}
                        onClick={clickHandler}
                    >
                        &#60;&nbsp;뒤로가기
                    </div>
                </div>
            </div>
            <div className="diary_diary_wrap">
                <div className="area_for_diary_detail">
                    {diaryData == null ? (
                        <div></div>
                    ) : (
                        <Turn options={options} className="magazine">
                            {(diaryData !== null && Array.isArray(diaryData) ? diaryData : []).map((idx) => (
                                <div key={idx} className="detail_page yg_font">
                                    <h3 style={{ textAlign: 'center' }}>{idx.title}</h3>
                                    <img
                                        className="diary_img_in_page"
                                        src={idx.img}
                                        style={{
                                            width: '350px',
                                            height: '350px',
                                            margin: '25px auto 10px',
                                            objectFit: 'cover',
                                        }}
                                        alt=""
                                    />
                                    <p style={{ minHeight: '100px' }}>{idx.content}</p>
                                    <div className="diary_detail_btn flex" style={{ margin: '0 150px' }}>
                                        <div
                                            className="diary_modify_detail_btn"
                                            style={{
                                                cursor: 'pointer',
                                                margin: '0 10px',
                                            }}
                                            onClick={() => clickDiaryModifyHandler(idx.cd_no, idx.no)}
                                        >
                                            수정
                                        </div>
                                        <div
                                            className="diary_delete_detail_btn"
                                            style={{
                                                cursor: 'pointer',
                                            }}
                                            onClick={() => clickDiaryDeleteHandler(idx.cd_no, idx.no)}
                                        >
                                            삭제
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Turn>
                    )}
                </div>
            </div>
        </div>
    );
};
export default DiaryBookDetail;
