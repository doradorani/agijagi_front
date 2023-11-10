import React, { useEffect, useState } from 'react';
import '../../../css/subpage/children.css';
import ReactDatePicker from 'react-datepicker';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
import Swal from 'sweetalert2';
import DiaryHeader from './DiaryHeader';

const DiaryModfiyPost = ({ adContents, validationUser, setIsLoading, isLoading }) => {
    const params = useParams();
    const nav = useNavigate();
    const userLoginDispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [img, setImg] = useState(null);
    const [childContent, setChildContent] = useState(null);
    const [diaryModifyData, setDiaryModifyData] = useState();

    useEffect(() => {
        const getDiary = async () => {
            try {
                const validateResponse = validationUser('post', '/user/validate');
                try {
                    validationUser('get', '/diary/dailyDiaryDetail/' + params.childNo + '/' + params.diaryNo).then(
                        (res) => {
                            if (res.success) {
                                setDiaryModifyData(res.data);
                            }
                        }
                    );
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

    let reg_date;

    if (diaryModifyData != null) {
        if (diaryModifyData.reg_date) {
            const dateString = diaryModifyData.reg_date;
            reg_date = dateString.replace(' ', 'T');
        }
    }

    const clickHandler = () => {
        nav(-1);
    };

    const handleSubmit = async (event) => {
        let formData = new FormData();
        let data = {};
        Swal.fire({
            icon: 'question',
            title: '수정하시겠습니까?',
            text: '확인을 누르시면 수정됩니다.',
            confirmButtonText: '확인',
        }).then((res) => {
            if (res.isConfirmed) {
                if (title == '') {
                    data['title'] = diaryModifyData.title;
                } else {
                    data['title'] = title;
                }

                if (childContent == null) {
                    data['content'] = diaryModifyData.content;
                } else {
                    data['content'] = childContent;
                }

                if (img != null) {
                    formData.append('file', img);
                }
                formData.append(
                    'data',
                    new Blob([JSON.stringify(data)], {
                        type: 'application/json',
                    })
                );
                try {
                    validationUser(
                        'post',
                        '/diary/dailyDiaryDetail/' + params.childNo + '/' + params.diaryNo,
                        formData
                    ).then((res) => {
                        if (res.success) {
                            Swal.fire({
                                icon: 'success',
                                title: '정상적으로 수정되었습니다.',
                                text: '*^^*',
                                confirmButtonText: '확인',
                            }).then((res) => {
                                if (res.isConfirmed) {
                                    nav('/diary/diary_book_detail/' + params.childNo);
                                }
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: '정상적으로 수정되지 않았습니다.',
                                text: '다시 시도해주세요',
                                confirmButtonText: '확인',
                            }).then((res) => {
                                if (res.isConfirmed) {
                                    nav('/diary/diary_book_detail/' + params.childNo);
                                }
                            });
                        }
                    });
                    setIsLoading(true);
                } catch (error) {
                    console.log('데이터 파싱 에러');
                    console.log(error);
                    userLoginDispatch(userStateAction.setState(false));
                }
            }
        });
    };

    const handleChange = (e) => {
        setImg(e[0]);
    };

    return (
        <>
            <div className="post_section">
                <DiaryHeader select={'일기'} src={'/test_imgs/png/diary3.png'} />
                <div className="add_diary_container">
                    <div
                        className="yg_font"
                        style={{ textAlign: 'right', marginBottom: '20px', marginRight: '10px', cursor: 'pointer' }}
                        onClick={clickHandler}
                    >
                        &#60;&nbsp;뒤로가기
                    </div>
                    <div className="children_wrap">
                        <div className="children_container">
                            <div className="children_header">
                                <div className="children_header_title bold">오늘의 일기 수정</div>
                            </div>
                            <hr style={{ margin: '25px 0 10px 0', width: '100%' }} />
                            {diaryModifyData != null && (
                                <div className="children_second_wrap flex">
                                    <div className="children_input flex">
                                        <div className="children_input_name">
                                            <span>제목 &nbsp;</span>
                                            <input
                                                type="text"
                                                defaultValue={diaryModifyData.title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                style={{
                                                    border: 'none',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '5px',
                                                }}
                                            />
                                        </div>
                                        <div className="children_select_birth">
                                            <span className="children_select_title">날짜 &nbsp;</span>
                                            <ReactDatePicker
                                                dateFormat="yyyy.MM.dd"
                                                shouldCloseOnSelect
                                                // minDate={new Date()}
                                                selected={new Date(reg_date)}
                                                onChange={(date) => setSelectedDate(date)}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="children_input_name" style={{ margin: ' 0 62px' }}>
                                            <span style={{ height: '200px' }}>내용&nbsp;</span>
                                            <input
                                                type="text"
                                                defaultValue={diaryModifyData.content}
                                                onChange={(e) => setChildContent(e.target.value)}
                                                style={{
                                                    width: '500px',
                                                    minHeight: '200px',
                                                    border: 'none',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '5px',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="children_submit_button"
                                        style={{ marginTop: '30px', marginRight: '20px' }}
                                    >
                                        <div>
                                            <input
                                                type="submit"
                                                value={'수정'}
                                                className="btn btn-primary"
                                                onClick={handleSubmit}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="children_input_image"
                                        style={{ marginLeft: '32px', marginBottom: '15px' }}
                                    >
                                        <input
                                            type="file"
                                            name="아이 사진"
                                            id="children_input_image"
                                            accept="image/png, image/jpeg, image/jpg"
                                            encType="multipart/form-data"
                                            onChange={(e) => handleChange(e.target.files)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {adContents}
        </>
    );
};

export default DiaryModfiyPost;
