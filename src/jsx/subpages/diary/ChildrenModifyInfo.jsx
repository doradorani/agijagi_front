import React, { useState } from 'react';
import '../../../css/subpage/children.css';
import ReactDatePicker from 'react-datepicker';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DiaryHeader from './DiaryHeader';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const ChildrenModifyInfo = ({ adContents, validationUser, setIsLoading, isLoading }) => {
    const { childNo } = useParams();
    const nav = useNavigate();
    const userLoginDispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);
    const [childname, setchildName] = useState('');
    const [childImg, setChildImg] = useState(null);
    const [childContent, setChildContent] = useState(null);
    const [childModifyInfo, setChildModifyInfo] = useState(null);
    const [childPreviewImage, setChildPreviewImage] = useState(null);

    useEffect(() => {
        const getDiary = async () => {
            try {
                const validateResponse = validationUser('post', '/user/validate');
                try {
                    validationUser('get', '/diary/childrenDetail/' + childNo).then((res) => {
                        if (res != undefined && res.success) {
                            setChildModifyInfo(res.data);
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
                if (childname == '') {
                    data['name'] = childModifyInfo.name;
                } else {
                    data['name'] = childname;
                }
                if (selectedDate == null) {
                    data['birth_date'] = childModifyInfo.birth_date;
                } else {
                    data['birth_date'] =
                        selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + selectedDate.getDate();
                }
                if (childContent == null) {
                    data['content'] = childModifyInfo.content;
                } else {
                    data['content'] = childContent;
                }
                if (childImg != null) {
                    formData.append('file', childImg);
                }
                formData.append(
                    'data',
                    new Blob([JSON.stringify(data)], {
                        type: 'application/json',
                    })
                );
                try {
                    validationUser('post', '/diary/childInfo/' + childNo, formData).then((res) => {
                        if (res != undefined && res.success) {
                            setChildModifyInfo(res.data);
                            Swal.fire({
                                icon: 'success',
                                title: '정상적으로 수정되었습니다.',
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
                                title: '정상적으로 수정되지 않았습니다.',
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
                    console.log('데이터 파싱 에러');
                    console.log(error);
                    userLoginDispatch(userStateAction.setState(false));
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
                setChildPreviewImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
        setChildImg(e.target.files[0]);
    };

    return (
        <>
            <div className="post_full_section">
                <div className="post_section">
                    <div style={{ paddingLeft: '1.7%' }}>
                        <DiaryHeader select={'일기'} src={'/test_imgs/png/diary3.png'} header={'육아 일기'} />
                    </div>
                    <div
                        className="yg_font"
                        style={{ textAlign: 'right', marginBottom: '20px', marginRight: '10px', cursor: 'pointer' }}
                        onClick={clickHandler}
                    >
                        &#60;&nbsp;뒤로가기
                    </div>
                    {isLoading ? (
                        <div>로딩중</div>
                    ) : (
                        childModifyInfo != null && (
                            <div className="children_wrap">
                                <div className="children_container">
                                    <div className="children_header">
                                        <div className="children_header_title yg_font ">우리 아이 수정</div>
                                    </div>
                                    <hr style={{ margin: '25px 0 10px 0', width: '100%' }} />
                                    <div className="children_second_wrap flex">
                                        <div className="children_input flex">
                                            <div className="children_input_name">
                                                <span className="nn_font bold">이름 &nbsp;</span>
                                                <input
                                                    className="diary_input_padding nn_font"
                                                    type="text"
                                                    placeholder="아이의 이름을 입력해주세요"
                                                    onChange={(e) => setchildName(e.target.value)}
                                                    defaultValue={childModifyInfo.name}
                                                    style={{
                                                        minWidth: '220px',
                                                        border: 'none',
                                                        backgroundColor: '#f8f9fa',
                                                        borderRadius: '5px',
                                                    }}
                                                />
                                            </div>
                                            <div className="children_select_birth">
                                                <span className="children_select_title nn_font bold">
                                                    생년월일 &nbsp;
                                                </span>
                                                <ReactDatePicker
                                                    className="nn_font"
                                                    dateFormat="yyyy.MM.dd"
                                                    shouldCloseOnSelect
                                                    // minDate={new Date()}

                                                    selected={new Date(childModifyInfo.birth_date)}
                                                    onChange={(date) => setSelectedDate(date)}
                                                />
                                            </div>
                                        </div>
                                        <div className="child_image" style={{ margin: '10px auto' }}>
                                            {childModifyInfo.img != null ? (
                                                <img
                                                    className="child_profile_img"
                                                    src={childPreviewImage || childModifyInfo.img}
                                                    style={{ objectFit: 'cover', width: '138px', height: '244x' }}
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
                                            <div
                                                className="nn_font"
                                                style={{ marginRight: '10px', fontSize: '0.9rem' }}
                                            >
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
                                                <span className="yg_font">아이 사진 수정</span>
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
                                            <div className="children_input_name flex" style={{ margin: ' 0 62px' }}>
                                                <div className="nn_font bold" style={{ height: '100px' }}>
                                                    설명 &nbsp;
                                                </div>
                                                <textarea
                                                    className="diary_input_padding nn_font"
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
                                                    defaultValue={childModifyInfo.content}
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
                                                        value={'수정'}
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
                        )
                    )}
                </div>
            </div>
            {adContents}
        </>
    );
};

export default ChildrenModifyInfo;
