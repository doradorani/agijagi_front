import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'turn.js';
import Turn from '../../../js/subpage/Turn.js';
import '../../../css/subpage/diary.css';
import { useNavigate, useParams } from 'react-router';
import DiaryHeader from './DiaryHeader.jsx';
import { useDispatch } from 'react-redux';
import ScrollToTop from '../../ScrollToTop.jsx';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice.js';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const options = {
    width: 900,
    height: 620,
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

const DiaryBookDetail = ({ isLoading, setIsLoading, validationUser }) => {
    const params = useParams();
    const [diaryBookData, setDiaryBookData] = useState(null);
    const userLoginDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setDiaryBookData(null);
        const getDiary = async () => {
            try {
                const validateResponse = validationUser('post', '/user/validate');
                try {
                    validationUser('get', '/diary/dailyDiary/' + params.childNo).then((res) => {
                        if (res.success) {
                            setDiaryBookData(res.data);
                        }
                    });
                    setIsLoading(true);
                } catch (error) {
                    console.log('데이터 파싱 에러');
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
                userLoginDispatch(userStateAction.setState(false));
            } finally {
                setIsLoading(false);
            }
        };
        getDiary();
    }, []);

    const writeDiaryUrl = '/diary/write_diary/' + params.childNo;

    const clickDiaryDeleteHandler = (no) => {
        Swal.fire({
            icon: 'warning',
            title: '정말 삭제 하시겠습니까?',
            text: '삭제 하시게 되면 복구할 수 없습니다.',
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
        }).then((res) => {
            if (res.isConfirmed) {
                try {
                    validationUser(
                        'delete',
                        '/diary/dailyDiary/' + params.childNo + '/' + no,
                        null,
                        '/diary/dailyDiary/' + params.childNo
                    ).then((res) => {
                        if (res.success) {
                            setDiaryBookData(res.data);
                        }
                    });
                    setIsLoading(true);
                } catch (error) {
                    console.log(error);
                } finally {
                    setIsLoading(false);
                }
            }
        });
    };
    const onClickBtn = () => {
        navigate(-1);
    };

    return (
        <>
            <div className="post_full_section">
                <DiaryHeader select={'일기'} src={'/test_imgs/png/diary3.png'} />
                <div className="diary_book_detail_wrap">
                    <div className="flex" style={{ justifyContent: 'space-between' }}>
                        <div className="yg_font" style={{ fontSize: '40px' }}>
                            {}
                        </div>
                        <div className="flex">
                            <Link
                                to={writeDiaryUrl}
                                className="yg_font none_deco_link"
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    marginBottom: '10px',
                                    cursor: 'pointer',
                                    marginRight: '20px',
                                }}
                            >
                                &nbsp;일기 쓰기
                            </Link>
                            <div
                                className="yg_font"
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    marginBottom: '10px',
                                    cursor: 'pointer',
                                }}
                                onClick={onClickBtn}
                            >
                                &#60;&nbsp;뒤로가기
                            </div>
                        </div>
                    </div>
                    <div className="diary_diary_wrap">
                        <div className="diary_background_container">
                            <div className="area_for_diary_detail">
                                {isLoading ? (
                                    <div>로딩중.....</div>
                                ) : diaryBookData !== null && diaryBookData.length > 0 ? (
                                    <div className="turn_js_wrap">
                                        <Turn options={options} className="magazine">
                                            {diaryBookData == null ? (
                                                <div></div>
                                            ) : (
                                                !isLoading &&
                                                diaryBookData.map((idx) => {
                                                    const modifyUrl =
                                                        '/diary/modify_child_info/' + idx.cd_no + '/' + idx.no;
                                                    return (
                                                        <div key={idx} className="detail_page yg_font">
                                                            <h3 style={{ textAlign: 'center' }}>{idx.title}</h3>
                                                            <p className="right" style={{ paddingRight: '10px' }}>
                                                                {new Date(idx.reg_date).getFullYear() +
                                                                    '년 ' +
                                                                    (new Date(idx.reg_date).getMonth() + 1) +
                                                                    '월 ' +
                                                                    new Date(idx.reg_date).getDate() +
                                                                    '일'}
                                                            </p>

                                                            <div className="diary_detail_btn" style={{ width: '100%' }}>
                                                                <img
                                                                    className="diary_img_in_page"
                                                                    src={idx.img}
                                                                    style={{
                                                                        width: '350px',
                                                                        height: '350px',
                                                                        margin: '15px auto 10px',
                                                                        objectFit: 'cover',
                                                                    }}
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <div className="flex">
                                                                        <Link
                                                                            to={modifyUrl}
                                                                            className="diary_modify_detail_btn none_deco_link"
                                                                            style={{
                                                                                cursor: 'pointer',
                                                                                margin: '0 10px',
                                                                                color: '#fff',
                                                                            }}
                                                                        >
                                                                            수정
                                                                        </Link>
                                                                        <div
                                                                            className="diary_delete_detail_btn"
                                                                            style={{
                                                                                cursor: 'pointer',
                                                                            }}
                                                                            onClick={() =>
                                                                                clickDiaryDeleteHandler(idx.no)
                                                                            }
                                                                        >
                                                                            삭제
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <span className="background_for_book_detail"></span>
                                                            </div>
                                                            <p style={{ minHeight: '100px' }}>{idx.content}</p>
                                                            <div className="diary_btn" style={{ paddingBottom: '5px' }}>
                                                                <div
                                                                    className="diary_prev_btn"
                                                                    style={{
                                                                        float: 'left',
                                                                        paddingLeft: '10px',
                                                                        paddingBottom: '5px',
                                                                    }}
                                                                >
                                                                    이전
                                                                </div>
                                                                <div
                                                                    className="diary_next_btn right"
                                                                    style={{
                                                                        paddingRight: '10px',
                                                                        paddingBottom: '5px',
                                                                    }}
                                                                >
                                                                    다음
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            )}
                                        </Turn>
                                    </div>
                                ) : (
                                    <div
                                        className="yg_font"
                                        style={{
                                            textAlign: 'center',
                                            height: '90vh',
                                            lineHeight: '90vh',
                                            fontSize: '2rem',
                                        }}
                                    >
                                        일기를 작성해주세요
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default DiaryBookDetail;
