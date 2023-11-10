import React, { useEffect, useRef, useState } from 'react';
import '../../../css/subpage/fourcuts.css';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
import ScrollToTop from '../../ScrollToTop';
import DiaryHeader from './DiaryHeader';

const FourCutsImg = ({ adContents, isLoading, setIsLoading, validationUser }) => {
    const [fourCutsData, setForuCutsData] = useState();
    const params = useParams();
    const userLoginDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getDiary = async () => {
            try {
                const validateResponse = validationUser('post', '/user/validate');
                try {
                    validationUser('get', '/diary/childrenPictures').then((res) => {
                        if (res != undefined && res.success) {
                            setForuCutsData(res.data);
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

    const [showText, setShowText] = useState([false, false, false, false]);

    const getImageUrl = (index) => fourCutsData?.[index]?.img || '';
    const getTitle = (index) => fourCutsData?.[index]?.title || '';

    const ImgContainer = styled.div`
        img {
            src: ${(props) => props.url};
        }
    `;

    const toggleText = (index) => {
        setShowText(showText.map((text, i) => (i === index ? !text : text)));
    };

    const today = new Date();
    const onFourCutCapture = () => {
        html2canvas(document.querySelector('.four_cuts_album_containter')).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'image';
            link.href = canvas.toDataURL();
            document.body.appendChild(link);
            link.click();
        });
    };

    return (
        <>
            <div className="post_full_section">
                <div className="post_section">
                    <div style={{ paddingLeft: '1.7%' }}>
                        <DiaryHeader select={'인생네컷'} src={'/test_imgs/png/diary3.png'} />
                    </div>
                    <div style={{ marginBottom: '10px', height: '20px' }}>
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenu2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ float: 'right' }}
                        >
                            {/* {selectedChild != null ? selectedChild : '아이 선택'} */}
                            아이 선택
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            {/* {(fourCutsData !== null && Array.isArray(fourCutsData) ? fourCutsData : []).map((idx) => (
                        <li>
                            <button className="dropdown-item" type="button" onClick={() => nameClick(idx.no, idx.name)}>
                                {idx.name}
                            </button>
                        </li>
                    ))} */}
                            <li>김란희</li>
                        </ul>
                    </div>
                    <div className="four_cuts_album_wrap">
                        <div className="four_cuts_photos">
                            <div className="four_cuts_album_containter">
                                <div className="four_cust_header"></div>
                                <div className="four_cuts_photos">
                                    {[0, 1, 2, 3].map((index) => (
                                        <ImgContainer
                                            key={index}
                                            className="photo_frame"
                                            onMouseEnter={() => toggleText(index)}
                                            onMouseLeave={() => toggleText(index)}
                                        >
                                            <img
                                                id={'cuts_img' + index}
                                                src={getImageUrl(index)}
                                                alt={`description ${index}`}
                                                style={{ height: '200px' }}
                                            />
                                            <span
                                                id={'desc' + index}
                                                className={
                                                    showText[index]
                                                        ? 'photo_description four_cuts_show_text'
                                                        : 'photo_description four_cuts_hide_text'
                                                }
                                            >
                                                {getTitle(index)}
                                            </span>
                                        </ImgContainer>
                                    ))}
                                </div>
                                <div className="four_cust_footer">
                                    <p className="four_cuts_title"></p>
                                    <p className="four_cuts_date">
                                        {today.getFullYear() +
                                            '-' +
                                            ('0' + (today.getMonth() + 1)).slice(-2) +
                                            '-' +
                                            ('0' + today.getDate()).slice(-2)}
                                    </p>
                                </div>
                            </div>
                            <button value="사진 저장" onClick={onFourCutCapture} className="btn primary-btn">
                                사진 저장
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {adContents}
        </>
    );
};

export default FourCutsImg;
