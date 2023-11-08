import React, { useState } from 'react';
import '../../../css/subpage/children.css';
import ReactDatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

const DiaryPost = ({ setMethodUrl, setSelectedDiary, setDiaryFormData, diaryData, methodUrl }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [title, setTitle] = useState('');
    const [img, setImg] = useState(null);
    const [childContent, setChildContent] = useState(null);

    let formData = new FormData();

    let data;

    const clickHandler = () => {
        setSelectedDiary(1);
        setMethodUrl({ method: 'get', url: '/diary/dailyDiary/' + methodUrl.url.split('/')[3] });
    };

    const handleSubmit = async (event) => {
        data = {
            title: title,
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
            setMethodUrl({
                method: 'post',
                url: '/diary/dailyDiary/' + methodUrl.url.split('/')[3],
                url2: '/diary/dailyDiary/' + methodUrl.url.split('/')[3],
            });
            setSelectedDiary(1);
        } catch (error) {
            console.error('에러:', error);
        }
    };

    const handleChange = (e) => {
        setImg(e[0]);
    };

    return (
        <>
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
                        <div className="children_header_title bold">오늘의 일기 작성</div>
                    </div>
                    <hr style={{ margin: '25px 0 10px 0', width: '100%' }} />
                    <div className="children_second_wrap flex">
                        <div className="children_input flex">
                            <div className="children_input_name">
                                <span>제목 &nbsp;</span>
                                <input
                                    type="text"
                                    onChange={(e) => setTitle(e.target.value)}
                                    style={{ border: 'none', backgroundColor: '#f8f9fa', borderRadius: '5px' }}
                                />
                            </div>
                            <div className="children_select_birth">
                                <span className="children_select_title">날짜 &nbsp;</span>
                                <ReactDatePicker
                                    dateFormat="yyyy.MM.dd"
                                    shouldCloseOnSelect
                                    // minDate={new Date()}
                                    selected={selectedDate}
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
                </div>
            </div>
        </>
    );
};

export default DiaryPost;
