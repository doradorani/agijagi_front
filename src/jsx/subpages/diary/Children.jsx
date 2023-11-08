import React, { useState } from 'react';
import '../../../css/subpage/children.css';
import ReactDatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Children = ({ setMethodUrl, setSelectedDiary, setDiaryFormData }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [name, setName] = useState('');
    const [img, setImg] = useState(null);
    const [childContent, setChildContent] = useState(null);

    let formData = new FormData();

    let data;

    const clickHandler = () => {
        setSelectedDiary(0);
        setMethodUrl({ method: 'get', url: '/diary/childrenInfo' });
    };

    const handleSubmit = async (event) => {
        data = {
            name: name,
            birth_date: selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + selectedDate.getDate(),
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
            setDiaryFormData(formData);
            setMethodUrl({ method: 'post', url: '/diary/childInfo', url2: '/diary/childrenInfo' });
            setSelectedDiary(0);
        } catch (error) {
            console.error('에러:', error);
        }
    };
    const handleChange = (e) => {
        setImg(e[0]);
    };

    return (
        <>
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
                            <div className="children_header_title bold">우리 아이 등록</div>
                        </div>
                        <hr style={{ margin: '25px 0 10px 0', width: '100%' }} />
                        <div className="children_second_wrap flex">
                            <div className="children_input flex">
                                <div className="children_input_name">
                                    <span>이름 &nbsp;</span>
                                    <input
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        style={{ border: 'none', backgroundColor: '#f8f9fa', borderRadius: '5px' }}
                                    />
                                </div>
                                <div className="children_select_birth">
                                    <span className="children_select_title">생년월일 &nbsp;</span>
                                    <ReactDatePicker
                                        dateFormat="yyyy.MM.dd"
                                        shouldCloseOnSelect
                                        // minDate={new Date()}
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="children_input_name flex" style={{ margin: ' 0 62px' }}>
                                    <div style={{ height: '200px' }}>설명 &nbsp;</div>
                                    <textarea
                                        type="text"
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
                            <div className="children_submit_button" style={{ marginTop: '30px', marginRight: '20px' }}>
                                <Link to="/diary">
                                    <input
                                        type="submit"
                                        value={'등록'}
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                    />
                                </Link>
                            </div>
                            <div className="children_input_image" style={{ marginLeft: '32px', marginBottom: '15px' }}>
                                {/* <button className="btn btn primary">
                                아이 사진 등록 */}
                                <input
                                    type="file"
                                    name="아이 사진"
                                    id="children_input_image"
                                    accept="image/png, image/jpeg, image/jpg"
                                    encType="multipart/form-data"
                                    onChange={(e) => handleChange(e.target.files)}
                                />
                                {/* </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Children;
