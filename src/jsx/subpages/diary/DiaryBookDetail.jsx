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
        setDiaryData(null);
        setSelectedDiary(0);
        setMethodUrl({ mehtod: 'get', url: '/diary/childrenInfo' });
    };
    const clickDiaryWriteHandler = () => {
        setSelectedDiary(5);
    };
    const clickDiaryModifyHandler = () => {
        setSelectedDiary(5);
    };
    const clickDiaryDeleteHandler = (cd_no, no) => {
        setMethodUrl({ mehtod: 'delete', url: '/diary/dailyDiary/' + cd_no + '/' + no });
    };

    return (
        <>
            <div className="flex" style={{ justifyContent: 'space-between' }}>
                <div className="yg_font" style={{ fontSize: '40px' }}>
                    수민이 육아일기
                </div>
                <div
                    className="yg_font"
                    style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10px', cursor: 'pointer' }}
                    onClick={clickHandler}
                >
                    &#60;&nbsp;뒤로가기
                </div>
            </div>
            <div className="area_for_diary_detail">
                {diaryData == null ? (
                    <div></div>
                ) : (
                    <Turn options={options} className="magazine">
                        {diaryData.map((idx) => (
                            <div key={idx} className="detail_page">
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
                                <h3>{idx.title}</h3>
                                <p>{idx.content}</p>
                                <div className="diary_detail_btn flex">
                                    <div className="diary_modify_detail_bnt" onClick={clickDiaryModifyHandler}>
                                        수정
                                    </div>
                                    <div
                                        className="diary_delete_detail_bnt"
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
            <div className="diary_write_container">
                <div
                    className="write_button"
                    style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10px', cursor: 'pointer' }}
                    onClick={clickDiaryWriteHandler}
                >
                    &#60;&nbsp;일기 쓰기
                </div>
            </div>
        </>
    );
};
export default DiaryBookDetail;
