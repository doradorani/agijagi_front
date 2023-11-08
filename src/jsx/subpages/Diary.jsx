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
import ChildrenModifyInfo from './diary/ChildrenModifyInfo.jsx';
import DiaryPost from './diary/DiaryPost.jsx';
import DiaryModfiyPost from './diary/DiaryModfiyPost.jsx';
import ScrollToTop from '../ScrollToTop.jsx';
import userLogin_config from '../../js/api/config/userLogin_config';

const Diary = ({ selectedSideMenu, setSelectedSideMenu }) => {
    let diaryContents;
    const [diaryData, setDiaryData] = useState();
    const [methodUrl, setMethodUrl] = useState({ method: 'get', url: '/diary/childrenInfo', url2: '' });
    const [selectedDiary, setSelectedDiary] = useState(0);
    const userLoginDispatch = useDispatch();
    const validationUser = useValidationUser('post', '/user/validate', null);
    const [diaryFormData, setDiaryFormData] = useState(new FormData());
    const getDiaryData = useValidationUser(methodUrl.method, methodUrl.url, diaryFormData, methodUrl.url2);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshData, setRefreshData] = useState(false);

    if (!userLogin_config) {
        setDiaryData(null);
    }

    const sideMenu = (
        <SideMenu
            selectedMenu={1}
            setSelectedSideMenu={setSelectedSideMenu}
            setSelectedDiary={setSelectedDiary}
            setMethodUrl={setMethodUrl}
            setDiaryData={setDiaryData}
            methodUrl={methodUrl}
        />
    );

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
        console.log(methodUrl);
        const getDiary = async () => {
            setIsLoading(true);
            try {
                const validateResponse = await validationUser();
                try {
                    const diaryResponse = await getDiaryData();
                    setDiaryData(diaryResponse.data);
                } catch (error) {
                    console.log('데이터 파싱 에러');
                    console.log(error);
                }
            } catch (error) {
                console.log('검증 에러');
                console.log(error);
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
                    <div className="post_section">
                        <ScrollToTop />
                        {diaryHeader('일기')}
                        <div>
                            <div className="go_to_add_child">
                                <Link
                                    to="/diary"
                                    onClick={() => {
                                        setSelectedDiary(2);
                                    }}
                                >
                                    <input
                                        type="button"
                                        value="아이 등록"
                                        className="btn btn-primary child_register_btn"
                                    />
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
                                        content={idx.content}
                                        birth_date={idx.birth_date}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </>
            );
        } else if (selectedDiary === 1) {
            //다이어리 detail
            diaryContents = (
                <>
                    <div className="post_section">
                        <ScrollToTop />
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
                    </div>
                </>
            );
        } else if (selectedDiary === 2) {
            //자녀등록
            diaryContents = (
                <>
                    <div className="post_section">
                        <ScrollToTop />
                        {diaryHeader('일기')}
                        <div className="add_child_container">
                            <Children
                                setMethodUrl={setMethodUrl}
                                setSelectedDiary={setSelectedDiary}
                                setIsLoading={setIsLoading}
                                setDiaryFormData={setDiaryFormData}
                                setDiaryData={setDiaryData}
                                setRefreshData={setRefreshData}
                            />
                        </div>
                    </div>
                </>
            );
        } else if (selectedDiary === 3) {
            //일기 작성
            diaryContents = (
                <>
                    <div className="post_section">
                        <ScrollToTop />
                        {diaryHeader('일기')}
                        <div className="add_diary_container">
                            <DiaryPost
                                setMethodUrl={setMethodUrl}
                                setSelectedDiary={setSelectedDiary}
                                setDiaryFormData={setDiaryFormData}
                                setDiaryData={setDiaryData}
                                methodUrl={methodUrl}
                            />
                        </div>
                    </div>
                </>
            );
        } else if (selectedDiary === 4) {
            //자녀수정
            diaryContents = (
                <>
                    <ScrollToTop />
                    <div className="post_section">
                        {diaryHeader('일기')}
                        <div className="add_child_container">
                            {diaryData !== null && (
                                <ChildrenModifyInfo
                                    setMethodUrl={setMethodUrl}
                                    setSelectedDiary={setSelectedDiary}
                                    setIsLoading={setIsLoading}
                                    setDiaryFormData={setDiaryFormData}
                                    diaryData={diaryData}
                                />
                            )}
                        </div>
                    </div>
                </>
            );
        } else if (selectedDiary === 5) {
            //일기 수정
            diaryContents = (
                <>
                    <ScrollToTop />
                    <div className="post_section">
                        {diaryHeader('일기')}
                        <div className="add_diary_container">
                            {isLoading ? (
                                <div>로딩중.....</div>
                            ) : (
                                diaryData !== null && (
                                    <DiaryModfiyPost
                                        setMethodUrl={setMethodUrl}
                                        setSelectedDiary={setSelectedDiary}
                                        setDiaryFormData={setDiaryFormData}
                                        diaryData={diaryData}
                                        methodUrl={methodUrl}
                                        setDiaryData={setDiaryData}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </>
            );
        }
    } else if (selectedSideMenu === 2) {
        //calendar
        diaryContents = (
            <>
                <div className="post_section">
                    {diaryHeader('달력')}
                    {diaryData == null ? (
                        <div>로딩중</div>
                    ) : (
                        <div className="add_diary_container">
                            <Calendar
                                setMethodUrl={setMethodUrl}
                                setSelectedDiary={setSelectedDiary}
                                setSelectedSideMenu={setSelectedSideMenu}
                                diaryData={diaryData}
                            />
                        </div>
                    )}
                </div>
            </>
        );
    } else if (selectedSideMenu === 3) {
        //앨범
        diaryContents = <div></div>;
    } else if (selectedSideMenu === 4) {
        if (selectedDiary === 0) {
            //그래프
            diaryContents = (
                <div className="post_section">
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/diary1.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 수첩</div>
                    </div>
                    {diaryData !== null && (
                        <Graph
                            diaryData={diaryData}
                            setSelectedDiary={setSelectedDiary}
                            setMethodUrl={setMethodUrl}
                            setDiaryData={setDiaryData}
                        />
                    )}
                </div>
            );
        } else if (selectedDiary === 1) {
            //건강정보 등록
            diaryContents = (
                <div className="post_section">
                    <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                        <img src="/test_imgs/png/diary1.png" style={{ width: '55px', marginRight: '15px' }} />
                        <div style={{ fontSize: '40px', marginRight: '15px' }}>육아 수첩</div>
                    </div>
                    <Note
                        diaryData={diaryData}
                        setSelectedDiary={setSelectedDiary}
                        setMethodUrl={setMethodUrl}
                        setDiaryData={setDiaryData}
                    />
                </div>
            );
        }
    }

    return (
        <>
            <div className="diary_wrap">
                <div>
                    <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg" />
                </div>
                <div className="diary_flex">
                    {sideMenu}
                    {diaryContents}
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
        </>
    );
};
export default Diary;
