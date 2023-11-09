import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../css/subpage/note.css';
import { Link } from 'react-router-dom';

const Note = ({ setSelectedDiary, diaryData, setformData, setMethodUrl, setDiaryData }) => {
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

    let formData = new FormData();

    const nameClick = (no, name) => {
        setSelectedChild(name);
        setSelectedChildNo(no);
    };

    const goToGraphClick = () => {
        if (selectedChildNo == null) {
            alert('아이를 선택하시거나 없으시면 먼저 등록을 해주세요!');
        } else {
            formData.append('cd_no', selectedChildNo);
            formData.append('cd_name', selectedChildNo);
            formData.append('height', height);
            formData.append('weight', weight);
            formData.append('head', head);
            formData.append('inoculation_agency', hospitalName);
            formData.append('vaccination_nm', vaccinationName);
            formData.append('inoculation_order', vaccinationNo);
            formData.append('etc', etc);
            setformData(formData);
            setMethodUrl({
                method: 'post',
                url: '/childHealth/childNote/' + selectedChildNo,
                url2: '/childHealth/childNotes/' + selectedChildNo,
            });
            setSelectedDiary(0);
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

    return (
        <>
            <div className="note_wrap">
                <div className="note_container">
                    <div className="note_header">
                        <div className="note_header_title bold">오늘의 건강 기록</div>
                    </div>
                    <hr style={{ margin: '25px 0 10px 0', width: '100%' }} />
                    <div className="note_second_wrap flex">
                        <div className="note_select_options">
                            <div className="note_select_date flex" style={{ justifyContent: 'space-between' }}>
                                <div>
                                    <span className="note_select_title">날짜 &nbsp;</span>
                                    <DatePicker
                                        dateFormat="yyyy.MM.dd"
                                        shouldCloseOnSelect
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                    />
                                </div>
                                <div>
                                    <button
                                        class="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenu2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {selectedChild != null ? selectedChild : '아이 선택'}
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        {(diaryData !== null && Array.isArray(diaryData) ? diaryData : []).map(
                                            (idx) => (
                                                <li>
                                                    <button
                                                        class="dropdown-item"
                                                        type="button"
                                                        onClick={() => nameClick(idx.no, idx.name)}
                                                    >
                                                        {idx.name}
                                                    </button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="note_input_1 flex">
                                <div className="note_input_height">
                                    <span>키 &nbsp;</span>
                                    <input
                                        type="number"
                                        min={1}
                                        onChange={(e) => {
                                            setHeight(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="note_input_weight">
                                    <span>몸무게 &nbsp;</span>
                                    <input
                                        type="number"
                                        min={1}
                                        onChange={(e) => {
                                            setWeight(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="note_input_head">
                                    <span>두위&nbsp;</span>
                                    <input
                                        type="number"
                                        min={1}
                                        onChange={(e) => {
                                            setHead(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="note_input_2 flex">
                                <div className="vaccination_hospital_name">
                                    <span>병원 이름&nbsp;</span>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setHospitalName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="vaccination_name">
                                    <span>접종 종류&nbsp;</span>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setVaccinationName(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="vaccination_times">
                                    <span>접종 차수&nbsp;</span>
                                    <input
                                        type="number"
                                        min={1}
                                        onChange={(e) => {
                                            setVaccinationNo(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="note_input_matters flex">
                                <span>기타 유의 사항&nbsp;</span>
                                <textarea
                                    className="upload_text"
                                    placeholder=" 기타 유의 사항을 적어주세요."
                                    onChange={handleTextChange}
                                ></textarea>
                                <sup className="byte_for_input_matters_box">
                                    (<span id="nowByte">{byteCount}</span>/2000bytes)
                                </sup>
                            </div>
                            <div className="note_submit_button">
                                <Link
                                    to="/diary"
                                    onClick={() => {
                                        goToGraphClick();
                                    }}
                                >
                                    <input type="submit" value={'등록'} className="btn btn-primary" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Note;
