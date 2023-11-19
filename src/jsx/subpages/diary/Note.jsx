import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../css/subpage/note.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
import DiaryHeader from './DiaryHeader';

const Note = ({ adContents, isLoading, setIsLoading, validationUser }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [byteCount, setByteCount] = useState(0);
    const [selectedChild, setSelectedChild] = useState(null);
    const [selectedChildNo, setSelectedChildNo] = useState();
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [head, setHead] = useState(null);
    const [hospitalName, setHospitalName] = useState(null);
    const [vaccinationName, setVaccinationName] = useState(null);
    const [vaccinationNo, setVaccinationNo] = useState(null);
    const [etc, setEtc] = useState(null);
    const [childListData, setChildListData] = useState();
    const userLoginDispatch = useDispatch();
    const nav = useNavigate();

    const nameClick = (no, name) => {
        setSelectedChild(name);
        setSelectedChildNo(no);
    };

    useEffect(() => {
        try {
            validationUser('get', '/diary/childrenInfo').then((res) => {
                if (res != undefined && res.success) {
                    setChildListData(res.data);
                }
            });
            setIsLoading(true);
        } catch (error) {
            console.error(error);
            userLoginDispatch(userStateAction.useDispatch(false));
        } finally {
            setIsLoading(false);
        }
    }, []);

    const goToGraphClick = () => {
        if (selectedChildNo == null) {
            Swal.fire({
                icon: 'warning',
                title: '건강 기록을 등록할 아이를 선택해주세요!',
                text: '선택란이 비어있다면 아이를 먼저 등록해주세요!',
                confirmButtonText: '확인',
            });
        } else {
            Swal.fire({
                icon: 'question',
                title: '등록 하시겠습니까?',
                text: '확인을 누르시면 등록이 됩니다.',
                showCancelButton: true,
                confirmButtonText: '확인',
                cancelButtonText: '취소',
            }).then((res) => {
                if (res.isConfirmed) {
                    let formData = new FormData();
                    formData.append('cd_no', selectedChildNo);
                    formData.append('cd_name', selectedChildNo);
                    formData.append('height', height);
                    formData.append('weight', weight);
                    formData.append('head', head);
                    formData.append('inoculation_agency', hospitalName);
                    formData.append('vaccination_nm', vaccinationName);
                    formData.append('inoculation_order', vaccinationNo);
                    formData.append(
                        'note_date',
                        new Date(selectedDate.getTime() + 1000 * 60 * 60 * 9)
                            .toISOString()
                            .replace('T', ' ')
                            .split('.')[0]
                    );
                    formData.append('etc', etc);
                    try {
                        validationUser('post', '/childHealth/childNote/' + selectedChildNo, formData).then((res) => {
                            if (res != undefined && res.success) {
                                Swal.fire({
                                    icon: 'success',
                                    title: '성공적으로 등록되었습니다.',
                                    text: '*^^*',
                                    confirmButtonText: '확인',
                                }).then((res) => {
                                    if (res.isConfirmed) {
                                        nav('/diary/children_health_note/' + selectedChildNo);
                                    }
                                });
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: '등록이 되지 않았습니다.',
                                    text: '다시 시도해주세요',
                                    confirmButtonText: '확인',
                                }).then((res) => {
                                    if (res.isConfirmed) {
                                        nav('/diary/children_health_note/' + selectedChildNo);
                                    }
                                });
                            }
                        });
                    } catch (error) {
                        console.error(error);
                    }
                }
            });
        }
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        setEtc(text);
        fn_checkByte(text);
    };

    // 바이트 수 체크 함수
    const fn_checkByte = (text) => {
        const maxByte = 2200;
        let totalByte = 0;
        for (let i = 0; i < text.length; i++) {
            const each_char = text.charAt(i);
            const uni_char = escape(each_char);
            if (uni_char.length > 4) {
                totalByte += 2;
            } else {
                totalByte += 1;
            }
        }
        // 바이트 수 상태 업데이트
        setByteCount(totalByte);
    };

    const clickHandler = () => {
        nav(-1);
    };

    return (
        <>
            <div className="post_full_section">
                <div className="post_section">
                    <div style={{ paddingLeft: '1.7%' }}>
                        <DiaryHeader select={'건강 기록 수정'} src={'/test_imgs/png/diary1.png'} header={'육아 수첩'} />
                    </div>
                    <div className="add_note_container">
                        <div
                            className="yg_font"
                            style={{ textAlign: 'right', marginBottom: '20px', marginRight: '10px', cursor: 'pointer' }}
                            onClick={clickHandler}
                        >
                            &#60;&nbsp;뒤로가기
                        </div>
                        <div className="note_wrap">
                            <div className="note_container">
                                <div className="note_header">
                                    <div className="note_header_title yg_font" style={{ fontSize: '2rem' }}>
                                        오늘의 건강 등록
                                    </div>
                                </div>
                                <hr style={{ margin: '15px 0 10px 0', width: '100%' }} />
                                <div className="note_second_wrap flex">
                                    {isLoading ? (
                                        <div>로딩중.....</div>
                                    ) : (
                                        childListData != null && (
                                            <div className="note_select_options">
                                                <div
                                                    className="note_select_date flex"
                                                    style={{ justifyContent: 'space-between', alignItems: 'center' }}
                                                >
                                                    <div className="select_child_note_datetime">
                                                        <span className="note_select_title nn_font bold">
                                                            날짜 &nbsp;
                                                        </span>
                                                        <DatePicker
                                                            className="nn_font bold"
                                                            dateFormat="yyyy.MM.dd h:mm aa"
                                                            showTimeSelect
                                                            shouldCloseOnSelect
                                                            selected={selectedDate}
                                                            onChange={(date) => setSelectedDate(date)}
                                                        />
                                                    </div>
                                                    <div>
                                                        <button
                                                            className="btn btn-secondary dropdown-toggle"
                                                            type="button"
                                                            id="dropdownMenu2"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            {selectedChild != null ? selectedChild : '아이 선택'}
                                                        </button>
                                                        <ul
                                                            className="dropdown-menu nn_font"
                                                            aria-labelledby="dropdownMenu2"
                                                        >
                                                            {(childListData !== null && Array.isArray(childListData)
                                                                ? childListData
                                                                : []
                                                            ).map((idx) => (
                                                                <li key={idx}>
                                                                    <button
                                                                        className="dropdown-item"
                                                                        type="button"
                                                                        onClick={() => nameClick(idx.no, idx.name)}
                                                                    >
                                                                        {idx.name}
                                                                    </button>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="note_input_1 flex nn_font">
                                                    <div className="note_input_height">
                                                        <span className="bold">키 &nbsp;</span>
                                                        <input
                                                            className="diary_input_padding"
                                                            type="number"
                                                            min={1}
                                                            onChange={(e) => {
                                                                setHeight(e.target.value);
                                                            }}
                                                            style={{
                                                                border: 'none',
                                                                backgroundColor: '#f8f9fa',
                                                                borderRadius: '5px',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="note_input_weight ">
                                                        <span className="bold">몸무게 &nbsp;</span>
                                                        <input
                                                            className="diary_input_padding"
                                                            type="number"
                                                            min={1}
                                                            onChange={(e) => {
                                                                setWeight(e.target.value);
                                                            }}
                                                            style={{
                                                                border: 'none',
                                                                backgroundColor: '#f8f9fa',
                                                                borderRadius: '5px',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="note_input_head ">
                                                        <span className="bold">두위&nbsp;</span>
                                                        <input
                                                            className="diary_input_padding"
                                                            type="number"
                                                            min={1}
                                                            onChange={(e) => {
                                                                setHead(e.target.value);
                                                            }}
                                                            style={{
                                                                border: 'none',
                                                                backgroundColor: '#f8f9fa',
                                                                borderRadius: '5px',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="note_input_2 flex nn_font">
                                                    <div className="vaccination_hospital_name">
                                                        <span className="bold">병원 이름&nbsp;</span>
                                                        <input
                                                            className="diary_input_padding"
                                                            type="text"
                                                            onChange={(e) => {
                                                                setHospitalName(e.target.value);
                                                            }}
                                                            style={{
                                                                border: 'none',
                                                                backgroundColor: '#f8f9fa',
                                                                borderRadius: '5px',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="vaccination_name">
                                                        <span className="bold">접종 종류&nbsp;</span>
                                                        <input
                                                            className="diary_input_padding"
                                                            type="text"
                                                            onChange={(e) => {
                                                                setVaccinationName(e.target.value);
                                                            }}
                                                            style={{
                                                                border: 'none',
                                                                backgroundColor: '#f8f9fa',
                                                                borderRadius: '5px',
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="vaccination_times nn_font">
                                                        <span className="bold">접종 차수&nbsp;</span>
                                                        <input
                                                            className="diary_input_padding"
                                                            type="number"
                                                            min={1}
                                                            onChange={(e) => {
                                                                setVaccinationNo(e.target.value);
                                                            }}
                                                            style={{
                                                                border: 'none',
                                                                backgroundColor: '#f8f9fa',
                                                                borderRadius: '5px',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="note_input_matters flex">
                                                    <span className="nn_font bold">기타 유의 사항&nbsp;</span>
                                                    <textarea
                                                        className="upload_text nn_font diary_input_padding"
                                                        placeholder=" 기타 유의 사항을 적어주세요."
                                                        onChange={handleTextChange}
                                                        style={{
                                                            border: 'none',
                                                            backgroundColor: '#f8f9fa',
                                                            borderRadius: '5px',
                                                        }}
                                                    ></textarea>
                                                    <sup className="byte_for_input_matters_box bold">
                                                        (<span id="nowByte">{byteCount}</span>/1200bytes)
                                                    </sup>
                                                </div>
                                                <div className="note_submit_button">
                                                    <div
                                                        onClick={() => {
                                                            goToGraphClick();
                                                        }}
                                                    >
                                                        <input
                                                            type="submit"
                                                            value={'수정'}
                                                            className="btn btn-primary"
                                                            style={{
                                                                backgroundColor: '#ff4898',
                                                                border: '1px solid #ff4898',
                                                                opacity: '0.9',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
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

export default Note;
