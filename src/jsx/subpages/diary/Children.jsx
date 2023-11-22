import React, { useState } from 'react';
import '../../../css/subpage/children.css';
import ReactDatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
import DiaryHeader from './DiaryHeader';

const Children = ({ adContents, validationUser, setIsLoading, isLoading }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [name, setName] = useState();
    const [img, setImg] = useState(null);
    const [childContent, setChildContent] = useState(null);
    const [previewImage, setpreviewImage] = useState(null);
    const userLoginDispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        const getDiary = async () => {
            try {
                const validateResponse = validationUser('post', '/user/validate');
            } catch (error) {
                console.error(error);
                userLoginDispatch(userStateAction.setState(false));
            } finally {
                setIsLoading(false);
            }
        };
        getDiary();
    }, []);

    const clickHandler = () => {
        nav(-1);
    };

    const handleSubmit = async (event) => {
        Swal.fire({
            icon: 'question',
            title: '등록하시겠습니까?',
            text: '확인을 누르시면 등록됩니다.',
            confirmButtonText: '확인',
        }).then((res) => {
            if (res.isConfirmed) {
                if (name == null) {
                    Swal.fire({
                        icon: 'warning',
                        title: '이름을 입력해주세요!',
                        confirmButtonText: '확인',
                    });
                } else if (img == null) {
                    Swal.fire({
                        icon: 'warning',
                        title: '사진을 넣어주세요!',
                        confirmButtonText: '확인',
                    });
                } else if (childContent == null) {
                    Swal.fire({
                        icon: 'warning',
                        title: '설명을 입력해주세요!',
                        confirmButtonText: '확인',
                    });
                } else {
                    let formData = new FormData();
                    let data = {
                        name: name,
                        birth_date:
                            selectedDate.getFullYear() +
                            '-' +
                            (selectedDate.getMonth() + 1) +
                            '-' +
                            selectedDate.getDate(),
                        content: childContent,
                    };
                    formData.append('file', img);
                    formData.append(
                        'data',
                        new Blob([JSON.stringify(data)], {
                            type: 'application/json',
                        })
                    );
                    try {
                        validationUser('post', '/diary/childInfo', formData).then((res) => {
                            if (res != undefined && res.success) {
                                Swal.fire({
                                    icon: 'success',
                                    title: '정상적으로 등록되었습니다.',
                                    text: '*^^*',
                                    confirmButtonText: '확인',
                                }).then((res) => {
                                    if (res.isConfirmed) {
                                        nav('/diary');
                                    }
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: '정상적으로 등록되지 않았습니다.',
                                    text: '다시 시도해주세요',
                                    confirmButtonText: '확인',
                                }).then((res) => {
                                    if (res.isConfirmed) {
                                        nav('/diary');
                                    }
                                });
                            }
                        });
                        setIsLoading(true);
                    } catch (error) {
                        console.error(error);
                        userLoginDispatch(userStateAction.setState(false));
                    }
                }
            }
        });
    };

    const handleChange = (e) => {
        if (e.target && e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            // 미리보기 이미지 업데이트
            const reader = new FileReader();

            reader.onload = (e) => {
                setpreviewImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
        setImg(e.target.files[0]);
    };

    return (
        <>
            <div className="post_full_section">
                <div className="post_section">
                    <div style={{ paddingLeft: '1.7%' }}>
                        <DiaryHeader select={'우리 아이 등록'} src={'/test_imgs/png/diary3.png'} header={'육아 일기'} />
                    </div>
                    <div>
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
                                    <div className="children_header_title yg_font" style={{ fontSize: '2.3rem' }}>
                                        우리 아이 등록
                                    </div>
                                </div>
                                <hr style={{ margin: '25px 0 10px 0', width: '100%' }} />
                                <div className="children_second_wrap flex">
                                    <div className="children_input flex" style={{ fontSize: '1.2rem' }}>
                                        <div className="children_input_name">
                                            <span className="nn_font bold">이름 &nbsp;</span>
                                            <input
                                                className="diary_input_padding nn_font"
                                                type="text"
                                                placeholder="아이의 이름을 입력해주세요"
                                                onChange={(e) => setName(e.target.value)}
                                                style={{
                                                    minWidth: '250px',
                                                    border: 'none',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '5px',
                                                }}
                                            />
                                        </div>
                                        <div className="children_select_birth">
                                            <span className="children_select_title nn_font bold">생년월일 &nbsp;</span>
                                            <ReactDatePicker
                                                className="nn_font"
                                                dateFormat="yyyy.MM.dd"
                                                shouldCloseOnSelect
                                                // minDate={new Date()}
                                                selected={selectedDate}
                                                onChange={(date) => setSelectedDate(date)}
                                            />
                                        </div>
                                    </div>
                                    <div className="child_image" style={{ margin: '10px auto' }}>
                                        {previewImage != null ? (
                                            <img
                                                className="child_profile_img"
                                                src={previewImage || '/test_imgs/png/profile.png'}
                                                style={{ objectFit: 'cover', width: '138px', height: '244px' }}
                                            />
                                        ) : (
                                            <div
                                                className="nn_font bold"
                                                style={{
                                                    lineHeight: '244px',
                                                    textAlign: 'center',
                                                    fontSize: '1.5rem',
                                                }}
                                            >
                                                일기의 표지로 쓰일 사진을 등록해주세요
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="children_input_image flex"
                                        style={{
                                            margin: '15px 35px',
                                            justifyContent: 'right',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div className="nn_font" style={{ marginRight: '10px' }}>
                                            가로, 세로의 비율은 4:7입니다
                                        </div>
                                        <label
                                            htmlFor="children_input_image"
                                            style={{
                                                backgroundColor: '#ff4898',
                                                border: '1px solid #ff4898',
                                                borderRadius: '5px',
                                                color: '#fff',
                                                padding: '6px 8px',
                                                float: 'right',
                                            }}
                                        >
                                            <span className="yg_font">아이 사진 등록</span>
                                        </label>
                                        <input
                                            type="file"
                                            name="아이 사진"
                                            id="children_input_image"
                                            accept="image/png, image/jpeg, image/jpg"
                                            encType="multipart/form-data"
                                            onChange={(e) => handleChange(e)}
                                            style={{ display: 'none' }}
                                        />
                                    </div>
                                    <div>
                                        <div
                                            className="children_input_name flex"
                                            style={{ margin: ' 0 62px', fontSize: '1.2rem' }}
                                        >
                                            <div className="nn_font bold" style={{ height: '100px' }}>
                                                설명 &nbsp;
                                            </div>
                                            <textarea
                                                className="diary_input_padding nn_font upload_text"
                                                type="text"
                                                placeholder="아이에 대한 사랑스러운 설명을 입력해주세요"
                                                onChange={(e) => setChildContent(e.target.value)}
                                                style={{
                                                    width: '100%',
                                                    minHeight: '100px',
                                                    border: 'none',
                                                    backgroundColor: '#f8f9fa',
                                                    borderRadius: '5px',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="flex"
                                        style={{ justifyContent: 'right', margin: '15px 25px 10px 0px' }}
                                    >
                                        <div className="children_submit_button">
                                            <div>
                                                <input
                                                    type="submit"
                                                    value={'등록'}
                                                    className="btn btn-primary"
                                                    onClick={handleSubmit}
                                                    style={{
                                                        backgroundColor: '#ff4898',
                                                        border: '1px solid #ff4898',
                                                        opacity: '0.9',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {adContents}
        </>
    );
};

export default Children;
