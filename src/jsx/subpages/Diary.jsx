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
    let diaryContents;
    const [diaryData, setDiaryData] = useState();
    const [methodUrl, setMethodUrl] = useState({ mehtod: 'get', url: '/diary/childrenInfo' });
    const [selectedDiary, setSelectedDiary] = useState(0);
    const userLoginDispatch = useDispatch();
    const validationUser = useValidationUser('post', '/user/validate', null);
    const [diaryFormData, setDiaryFormData] = useState(new FormData());
    const getDiaryData = useValidationUser(methodUrl.mehtod, methodUrl.url, diaryFormData);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshData, setRefreshData] = useState(false);

    const diaryHeader = (select) => {
        return (
            <>
                <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                    <img src="/test_imgs/png/diary3.png" style={{ width: '55px', marginRight: '15px' }} />
                    <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 일기</div>
                    <div style={{ fontSize: '20px', display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
                        &#62;&nbsp;{select}
                    </div>
                </div>
            </>
        );
    };
    useEffect(() => {
        setDiaryData(null);
        const getDiary = async () => {
            setIsLoading(true);
            try {
                const validateResponse = await validationUser();
                const diaryResponse = await getDiaryData();
                console.log(methodUrl.url);
                setDiaryData(diaryResponse.data);
            } catch (error) {
                console.log('검증 에러');
                userLoginDispatch(userStateAction.setState(false));
            } finally {
                setIsLoading(false);
            }
        };
        getDiary();
        console.log(diaryData);
    }, [methodUrl, selectedDiary, selectedSideMenu, refreshData]);
    //======================================//
    useEffect(() => {});

    if (selectedSideMenu === 1) {
        if (selectedDiary === 0) {
            //초기 화면
            diaryContents = (
                <>
                    {diaryHeader('일기')}
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
                            (diaryData !== null && Array.isArray(diaryData) ? diaryData : []).map((idx) => (
                                <DiaryBook
                                    key={idx}
                                    img={idx.img}
                                    name={idx.name}
                                    no={idx.no}
                                    setMethodUrl={setMethodUrl}
                                    setSelectedDiary={setSelectedDiary}
                                />
                            ))
                        )}
                    </div>
                </>
            );
        } else if (selectedDiary === 1) {
            //다이어리 detail
            diaryContents = (
                <>
                    {diaryHeader('일기')}
                    {isLoading ? (
                        <div>로딩중.....</div>
                    ) : (
                        <DiaryBookDetail
                            setSelectedDiary={setSelectedDiary}
                            diaryData={diaryData}
                            setDiaryData={setDiaryData}
                            setMethodUrl={setMethodUrl}
                        />
                    )}
                </>
            );
        } else if (selectedDiary === 2) {
            //일기 작성
            diaryContents = (
                <>
                    {diaryHeader('일기')}
                    <div className="add_diary_container">
                        <Children
                            setMethodUrl={setMethodUrl}
                            setSelectedDiary={setSelectedDiary}
                            setIsLoading={setIsLoading}
                            setDiaryFormData={setDiaryFormData}
                            setDiaryData={setDiaryData}
                            setRefreshData={setRefreshData}
                        />
                    </div>
                </>
            );
        } else if (selectedDiary === 3) {
            //자녀등록
            diaryContents = (
                <>
                    {diaryHeader('일기')}
                    <div className="add_child_container">
                        <Children
                            setMethodUrl={setMethodUrl}
                            setSelectedDiary={setSelectedDiary}
                            setIsLoading={setIsLoading}
                            setDiaryFormData={setDiaryFormData}
                        />
                    </div>
                </>
            );
        }
    } else if (selectedSideMenu === 2) {
        //calendar
        diaryContents = (
            <>
                {diaryHeader('달력')}
                <Calendar setSelectedDiary={setSelectedDiary} />
            </>
        );
    } else if (selectedSideMenu === 3) {
        //앨범
        diaryContents = <div></div>;
    } else if (selectedSideMenu === 4) {
        if (selectedDiary === 0) {
            //그래프
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
            //건강정보 등록
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
