import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../css/subpage/note.css';

const Note = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [byteCount, setByteCount] = useState(0);

    const handleTextChange = (e) => {
        const text = e.target.value;
        // 함수 호출하여 바이트 수 계산
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
                            <div className="note_select_date">
                                <span className="note_select_title">날짜 &nbsp;</span>
                                <DatePicker
                                    dateFormat="yyyy.MM.dd"
                                    shouldCloseOnSelect
                                    // minDate={new Date()}
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                />
                            </div>
                            <div className="note_input_1 flex">
                                <div className="note_input_height">
                                    <span>키 &nbsp;</span>
                                    <input type="number" min={1} />
                                </div>
                                <div className="note_input_weight">
                                    <span>몸무게 &nbsp;</span>
                                    <input type="number" min={1} />
                                </div>
                                <div className="note_input_head">
                                    <span>두위&nbsp;</span>
                                    <input type="number" min={1} />
                                </div>
                            </div>
                            <div className="note_input_2 flex">
                                <div className="vaccination_hospital_name">
                                    <span>병원 이름&nbsp;</span>
                                    <input type="text" />
                                </div>
                                <div className="vaccination_name">
                                    <span>접종 종류&nbsp;</span>
                                    <input type="text" />
                                </div>
                                <div className="vaccination_times">
                                    <span>접종 차수&nbsp;</span>
                                    <input type="number" min={1} />
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
                                <input type="submit" value={'등록'} className="btn btn-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Note;
