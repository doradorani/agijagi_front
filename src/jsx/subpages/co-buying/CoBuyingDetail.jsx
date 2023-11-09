import React, { useEffect, useState } from 'react';
import '../../../css/subpage/cobuyingdetail.css';
import SideMenu from '../SideMenu';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userStateAction } from '../../../js/api/redux_store/slice/userLoginSlice';
import token_config from '../../../js/api/config/token_config';
import cobuy_config from '../../../js/api/config/userCobuy_config';
import { useValidationItem } from '../../../js/api/VlidationItem';
import Swal from 'sweetalert2';
import { userCobuyAction } from '../../../js/api/redux_store/slice/userCobuySlice';

const CoBuyingDetail = ({ setSelectedSideMenu }) => {
    const location = useLocation();
    const detailProductNo = location.state ? location.state : null;

    const server = token_config.server;
    const hitList = cobuy_config.hits;
    const [isChecked, setIsChecked] = useState(hitList.includes(detailProductNo));

    const [isLoading, setIsLoading] = useState(false);
    const [detailCobuy, setDetailCobuy] = useState({});
    const [selectedOption, setSelectedOption] = useState(''); // 상태 변수 초기화

    const validateFunding = useValidationItem();
    const validateHit = useValidationItem();

    const userCoBuyDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const listProduct = async () => {
            try {
                const validateListResponse = await axios.get(`${server}/coBuy/detailProduct/` + detailProductNo);

                const detailResponse = validateListResponse.data.data.coBuyDetailProduct;

                const startDate = new Date(detailResponse.start_date);
                const endDate = new Date(detailResponse.end_date);

                setDetailCobuy({
                    cobuyNo: detailResponse.no,
                    cobuyId: detailResponse.id,
                    cobuyName: detailResponse.name,
                    cobuyContent: detailResponse.content,
                    cobuyPrice: detailResponse.price,
                    cobuyImg: detailResponse.img,
                    cobuyStart: detailResponse.start_date,
                    cobuyStart_Date: startDate,
                    cobuyEnd: detailResponse.end_date,
                    cobuyEnd_Date: endDate,
                    cobuyMin: detailResponse.min_num,
                    cobuyState: detailResponse.state,
                    cobuyHit: detailResponse.hit,
                    cobuyAccumulate: detailResponse.accumulate,
                    cobuyOption1: detailResponse.option1,
                    cobuyOption2: detailResponse.option2,
                    cobuyOption3: detailResponse.option3,
                    cobuyOption4: detailResponse.option4,
                    cobuyOption5: detailResponse.option5,
                    cobuyReg: detailResponse.reg_date,
                    cobuyMod: detailResponse.mod_date,
                });

                setIsLoading(true);
            } catch (error) {
                console.error('Error Message:', error.message);
                console.error('Status Code:', error.response.status);
                userCoBuyDispatch(userStateAction.setState(false));
            } finally {
                setIsLoading(false);
            }
        };
        listProduct();
    }, []);

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value); // 선택한 값을 상태 변수에 저장
    };

    const userFundingHandler = async () => {
        if (selectedOption === '' || selectedOption === null) {
            Swal.fire({
                title: '옵션을 선택해주세요',
                icon: 'warning',
            });
        } else {
            Swal.fire({
                title: '펀딩 하시겠습니까?',
                text: detailCobuy.cobuyName,
                icon: 'warning',

                showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '확인',
                cancelButtonText: '취소',
                //reverseButtons: true, // 버튼 순서 거꾸로
            }).then((result) => {
                if (result.isConfirmed) {
                    // 모달창에서 확인 버튼을 누른 경우

                    validateFunding('post', '/coBuy/fundingProduct/' + detailProductNo + '/' + selectedOption)
                        .then((fundingResponse) => {
                            if (fundingResponse.data == 0) {
                                Swal.fire('이미 펀딩한 상품입니다~!.', '다시 확인해주세요!', 'warning');
                            } else if (fundingResponse.success) {
                                Swal.fire('펀딩이 완료되었습니다.', '화끈하시네요~!', 'success');
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                        .finally(() => {
                            setSelectedSideMenu(3);
                            navigate('/community');
                        });
                }
            });
        }
    };

    const hitHandler = () => {
        try {
            validateHit('get', '/coBuy/coBuyHit/' + detailProductNo).then((res) => {
                setDetailCobuy((prevDetailCobuy) => ({
                    ...prevDetailCobuy,
                    cobuyHit: res.data,
                }));
            });
            if (!isChecked) {
                // 좋아요를 눌렀을 때
                setIsChecked(true);
                userCoBuyDispatch(userCobuyAction.setHit([...hitList, detailProductNo]));
            } else {
                // 좋아요를 취소했을 때
                setIsChecked(false);
                userCoBuyDispatch(userCobuyAction.setHit(hitList.filter((item) => item !== detailProductNo)));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='co-buying_detail_wrap'>
                <div>
                    <img className='diary_main_img' src='/test_imgs/community_imgs/community_main.jpg' />
                </div>
                <div className='co-buying_detail_second_wrap'>
                    <SideMenu />
                    <div className='co-buying_detail_section'>
                        <div className='co-buying_detail_left_section'>
                            <div className='co-buying_detail_main_img'>
                                <img
                                    className='co-buying_detail_main_img'
                                    src={detailCobuy.cobuyImg ? detailCobuy.cobuyImg.split(',')[0] : ''}
                                    alt=''
                                />
                            </div>
                            <hr />
                            <div className='co-buying_detail_sub_section'>
                                <div className='detail_sub_section_wrapper'>
                                    <div className='detail_sub_section_title'>
                                        <hr />
                                        <p className='bold'>상세 설명 및 이미지</p>
                                    </div>
                                    <div className='deatil_sub_section_first_img'>
                                        {detailCobuy.cobuyName ? (
                                            detailCobuy.cobuyImg.split(',').slice(1).length > 0 ? (
                                                detailCobuy.cobuyImg
                                                    .split(',')
                                                    .slice(1)
                                                    .map((image, index) => (
                                                        <img key={index} src={image} alt={`Image ${index + 1}`} />
                                                    ))
                                            ) : (
                                                <p>첨부된 이미지가 없습니다</p>
                                            )
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='boarder_line'></div>
                        <div className='co-buying_detail_right_section'>
                            <div className='co-buying_detail_right_container'>
                                <div className='co-buying_category_container'>
                                    <div className='co-buying_category_name_container'>
                                        <a href='#none' className='co-buying_category_link'>
                                            <span>{detailCobuy.cobuyName ? detailCobuy.cobuyName : ''}</span>
                                        </a>
                                        <br />
                                        <br />
                                        가격 : {detailCobuy.cobuyPrice ? detailCobuy.cobuyPrice : ''} 원
                                        {/* <div className='co-buying_hastag_name_container'>
                                            <a href='#none' className='co-buying_hastag_name_link'>
                                                <span>
                                                    <span className='co-buying_hastag_name_wrapper'>
                                                        <div className='co-buying_hashtag_name'>
                                                            <span className='hashtag_sharp'>#</span>
                                                            <span>손목</span>
                                                        </div>
                                                    </span>
                                                </span>
                                            </a>
                                        </div> */}
                                    </div>
                                    <div className='co-buying_sharing_icon_container'>
                                        <div className='co-buying_sharing_icon_box'>
                                            <img src='/test_imgs/community_imgs/share.png' alt='' />
                                        </div>
                                    </div>
                                </div>
                                <hr className='co-buying_line' />
                                <div className='co-buying_short_info_container'>
                                    <p className='co-buying_short_info_detail_1'>
                                        {detailCobuy.cobuyContent ? detailCobuy.cobuyContent : ''}
                                    </p>
                                </div>
                                <div className='co-buying_funding_info_container'>
                                    <div className='co-buying_participants_remainingsdays_container flex'>
                                        <div className='co-buying_participants_wrapper'>
                                            {typeof detailCobuy.cobuyAccumulate === 'number' &&
                                            typeof detailCobuy.cobuyMin === 'number' ? (
                                                <span className='bold'>
                                                    {detailCobuy.cobuyAccumulate} / {detailCobuy.cobuyMin}
                                                </span>
                                            ) : null}
                                            <span>명 참여</span>
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div>
                                        <span className='co-buying_remainingsdays_wrapper'>
                                            {detailCobuy.cobuyStart && detailCobuy.cobuyEnd ? (
                                                <span>
                                                    {detailCobuy.cobuyStart} ~ {detailCobuy.cobuyEnd} &nbsp;&nbsp;
                                                    <span className='bold'>
                                                        (
                                                        {Math.floor(
                                                            (detailCobuy.cobuyEnd_Date - detailCobuy.cobuyStart_Date) /
                                                                (1000 * 60 * 60 * 24)
                                                        )}
                                                        일 남음)
                                                    </span>
                                                </span>
                                            ) : (
                                                ''
                                            )}
                                        </span>
                                    </div>
                                    <div className='co-buying_funding_money_wrapper'>
                                        <p className='co-buying_funding_money'>
                                            {typeof detailCobuy.cobuyAccumulate === 'number' &&
                                            !isNaN(parseInt(detailCobuy.cobuyPrice)) ? (
                                                <span className='bold'>
                                                    {detailCobuy.cobuyAccumulate * parseInt(detailCobuy.cobuyPrice) ||
                                                        0}
                                                </span>
                                            ) : (
                                                0
                                            )}
                                            <span>원 달성</span>
                                        </p>
                                    </div>
                                </div>
                                <div className='co-buying_funding_rate_container'>
                                    <div className='co-buying_progressbar_wrappper'>
                                        <div
                                            className='progressbar'
                                            style={{
                                                '--progressPercent': `${
                                                    (detailCobuy.cobuyAccumulate / detailCobuy.cobuyMin) * 100
                                                }%`,
                                            }}
                                        >
                                            <div className='progress'></div>
                                        </div>
                                    </div>
                                    <div className='co-buying_funding_text'>
                                        <b className='co-buying_funding_rate'>
                                            {typeof detailCobuy.cobuyMin === 'number' &&
                                            typeof detailCobuy.cobuyAccumulate === 'number'
                                                ? `${(
                                                      (detailCobuy.cobuyAccumulate / detailCobuy.cobuyMin) *
                                                      100
                                                  ).toFixed(2)} %`
                                                : ''}
                                        </b>
                                        <span>달성됨</span>
                                    </div>
                                </div>
                            </div>
                            <div className='co-buying_options_container'>
                                <div className='co-buygin_options_wrapper'>
                                    <div className='co-buying_options_text'>
                                        <p>옵션 선택</p>
                                    </div>
                                    <div className='co-buyging_options_wrapper'>
                                        <select
                                            className='co-buying_options_select'
                                            onChange={handleOptionChange}
                                            value={selectedOption}
                                        >
                                            <option value=''>-- 선택 --</option>
                                            {detailCobuy.cobuyOption1 && (
                                                <option value={detailCobuy.cobuyOption1}>
                                                    {detailCobuy.cobuyOption1}
                                                </option>
                                            )}
                                            {detailCobuy.cobuyOption2 && (
                                                <option value={detailCobuy.cobuyOption2}>
                                                    {detailCobuy.cobuyOption2}
                                                </option>
                                            )}
                                            {detailCobuy.cobuyOption3 && (
                                                <option value={detailCobuy.cobuyOption3}>
                                                    {detailCobuy.cobuyOption3}
                                                </option>
                                            )}
                                            {detailCobuy.cobuyOption4 && (
                                                <option value={detailCobuy.cobuyOption4}>
                                                    {detailCobuy.cobuyOption4}
                                                </option>
                                            )}
                                            {detailCobuy.cobuyOption5 && (
                                                <option value={detailCobuy.cobuyOption5}>
                                                    {detailCobuy.cobuyOption5}
                                                </option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='co-buying_buttons_container'>
                                <div className='co-buying_buttons_wrapper flex'>
                                    <div className='like_button_wrapper'>
                                        <div className='like_button' style={{ textAlign: 'center' }}>
                                            <label htmlFor='checkbox' className='like_box'>
                                                <input
                                                    type='checkbox'
                                                    id='checkbox'
                                                    hidden
                                                    checked={isChecked}
                                                    onClick={hitHandler}
                                                />
                                                <svg
                                                    t='1689815540548'
                                                    class='icon'
                                                    viewBox='0 0 1024 1024'
                                                    version='1.1'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    p-id='2271'
                                                >
                                                    <path
                                                        d='M742.4 101.12A249.6 249.6 0 0 0 512 256a249.6 249.6 0 0 0-230.72-154.88C143.68 101.12 32 238.4 32 376.32c0 301.44 416 546.56 480 546.56s480-245.12 480-546.56c0-137.92-111.68-275.2-249.6-275.2z'
                                                        fill='#231F20'
                                                        p-id='2272'
                                                        id='heart'
                                                    ></path>
                                                </svg>
                                                <span></span>
                                            </label>
                                            <div className='likes_count' style={{ textAlign: 'center' }}>
                                                <div className='likes_count'>
                                                    {typeof detailCobuy.cobuyHit === 'number'
                                                        ? detailCobuy.cobuyHit.toLocaleString()
                                                        : '0'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='co-buying_botton_wrpper'>
                                        <div className='buying_button' onClick={userFundingHandler}>
                                            <p className='bold'>펀딩하기</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoBuyingDetail;
