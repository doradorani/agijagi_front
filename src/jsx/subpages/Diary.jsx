import React, { useEffect, useState } from 'react';
import 'turn.js';
import '../../css/subpage/diary.css';
import DiaryBook from './diary/DiaryBook.jsx';
import DiaryBookDetail from './diary/DiaryBookDetail';
import SideMenu from './SideMenu';
import Calendar from './diary/Calendar';
import Graph from './diary/Graph';
import Note from './diary/Note';
import { useValidationUser } from '../../js/api/ValidationApi';
import { useDispatch } from 'react-redux';
import { userStateAction } from '../../js/api/redux_store/slice/userLoginSlice';
import { Link } from 'react-router-dom';
import Children from './diary/Children';

const Diary = ({ selectedSideMenu, setSelectedSideMenu }) => {
    console.log('selectedSideMenu', selectedSideMenu);
    let diaryContents;

    //======검증 및 데이터 불러오기//======검증 및 데이터 불러오기//
    //ui에는 {diaryData ? <div>{diaryData.id}</div> : null} => 삼항 연산자로 데이터 호출하세요.

    const [diaryData, setDiaryData] = useState();
    const [url, setUrl] = useState('/diary/childrenInfo');
    const [method, setMethod] = useState('get');
    const [selectedDiary, setSelectedDiary] = useState(0);
    const userLoginDispatch = useDispatch();
    const validationUser = useValidationUser('post', '/user/validate', null);
    const getDiaryData = useValidationUser(method, url);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getDiary = async () => {
            try {
                setIsLoading(true);
                const validationResponse = await validationUser();
                const diaryResponse = await getDiaryData();
                setDiaryData(diaryResponse.data);
            } catch (error) {
                console.log('에러');
                userLoginDispatch(userStateAction.setState(false));
            } finally {
                setIsLoading(false);
            }
        };
        getDiary();
    }, [url, method, selectedDiary, selectedDiary, selectedSideMenu]);
    //======================================//

    if (selectedSideMenu === 1) {
        if (selectedDiary === 0) {
            diaryContents = (
                <>
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/diary3.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 일기</div>
                        <div
                            style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}
                        >
                            &#62;&nbsp;일기
                        </div>
                    </div>
                    <div>
                        <div className="go_to_add_child">
                            <Link
                                to="/diary"
                                onClick={() => {
                                    setSelectedDiary(2);
                                }}
                            >
                                <input type="button" value="아이 등록" className="btn btn-primary" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        {isLoading ? (
                            <div>로딩중.....</div>
                        ) : (
                            (Array.isArray(diaryData) ? diaryData : []).map((idx) => (
                                <DiaryBook
                                    img={idx.img}
                                    name={idx.name}
                                    no={idx.no}
                                    setUrl={setUrl}
                                    selectedSideMenu={selectedSideMenu}
                                    selectedDiary={selectedDiary}
                                />
                            ))
                        )}
                    </div>
                </>
            );
        } else if (selectedDiary === 1) {
            diaryContents = (
                <>
                    <DiaryBookDetail setSelectedDiary={setSelectedDiary} />
                </>
            );
        } else if (selectedDiary === 2) {
            diaryContents = (
                <>
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/diary3.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 일기</div>
                        <div
                            style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}
                        >
                            &#62;&nbsp;일기
                        </div>
                    </div>
                    <div className="add_child_container">
                        <Children setUrl={setUrl} setSelectedDiary={setSelectedDiary} setIsLoading={setIsLoading} />
                    </div>
                </>
            );
        }
    } else if (selectedSideMenu === 2) {
        diaryContents = (
            <>
                <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                    <img src="/test_imgs/png/diary3.png" style={{ width: '55px', marginRight: '15px' }} />
                    <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 일기</div>
                    <div style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
                        &#62;&nbsp;달력
                    </div>
                </div>
                <Calendar setSelectedDiary={setSelectedDiary} />
            </>
        );
    } else if (selectedSideMenu === 3) {
        diaryContents = <div></div>;
    } else if (selectedSideMenu === 4) {
        if (selectedDiary === 0) {
            diaryContents = (
                <>
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/diary1.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 수첩</div>
                        {/* <div style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
                            &#62;&nbsp;수첩
                        </div> */}
                    </div>
                    <Graph setSelectedDiary={setSelectedDiary} />
                </>
            );
        } else if (selectedDiary === 1) {
            diaryContents = (
                <>
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/diary1.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 수첩</div>
                    </div>
                    <Note setSelectedDiary={setSelectedDiary} />
                </>
            );
        }
    }

    return (
        <div className="diary_wrap">
            <div>
                <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg" />
            </div>
            <div className="diary_flex">
                <SideMenu
                    selectedMenu={1}
                    setSelectedSideMenu={setSelectedSideMenu}
                    setSelectedDiary={setSelectedDiary}
                />
                <div className="post_section">{diaryContents}</div>
                <div>
                    <div>
                        <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                    </div>
                    <div>
                        <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Diary;
