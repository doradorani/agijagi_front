import React, { useEffect, useState } from 'react';
import '../../../css/subpage/children.css';
import ReactDatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import token_config from '../../../js/api/config/token_config';
import { useValidationUser } from '../../../js/api/ValidationApi';
import { useDispatch } from 'react-redux';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
import axios from 'axios';

const Children = ({ setSelectedDiary, setDiaryData, userLoginDispatch }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [name, setName] = useState('');
    const [img, setImg] = useState(null);

    let formData = new FormData();

    let data;
    const server = token_config.server;

    const handleSubmit = async (event) => {
        data = {
            name: name,
            birth_date: selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + selectedDate.getDate(),
        };
        if (img !== null) {
            formData.append('file', img);
            formData.append(
                'data',
                new Blob([JSON.stringify(data)], {
                    type: 'application/json',
                })
            );
        }

        try {
            // POST 요청을 보내는 부분
            axios
                .post(`${server}/diary/childInfo`, formData, {
                    headers: { 'Content-Type': `multipart/form-data` },
                })
                .then((res) => {
                    console.log(res);
                });

            setSelectedDiary(0);

            // 성공 시 리다이렉트 또는 다른 작업 수행
        } catch (error) {
            console.error('에러:', error);
        }
    };

    const handleChange = (e) => {
        setImg(e[0]);
    };

    // useEffect(() => {
    //     const validationUser = useValidationUser('/diary/childInfo', formData);
    //     async function getDiary() {
    //         try {
    //             const response = await validationUser();
    //             setDiaryData(response);
    //         } catch (error) {
    //             userLoginDispatch(userStateAction.setState(false));
    //         }
    //     }
    //     getDiary();
    //     if (formData != null) {
    //         setSelectedDiary(0);
    //     }
    // }, [formData]);

    return (
        <>
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
                                <input type="text" onChange={(e) => setName(e.target.value)} />
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
                        <div className="children_input_image">
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
                        <div className="children_submit_button">
                            <Link to="/diary">
                                <input
                                    type="submit"
                                    value={'등록'}
                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Children;
