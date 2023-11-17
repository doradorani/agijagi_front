import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../css/subpage/post.css';
import { useValidationItem } from '../../../js/api/VlidationItem';
import CopyToClipboard from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';
import userInfo_config from '../../../js/api/config/userInfo_config';
import DetailReplys from './DetailReplys';
import LoadingPostCard from './LoadingPostCard';
import SideBanner from '../SideBanner';

const ModifyPost = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState();
    const [byteCount, setByteCount] = useState(0);
    const [reportReason, setReportReason] = useState('');
    const [emotionBtnData, setEmotionBtnData] = useState();

    const loginedUserNickname = userInfo_config.userNickname;
    const ValidationItem = useValidationItem();
    const nav = useNavigate();
    const { postId } = useParams();
    // 링크 복사 (공유기능을 위한 URL값 가져오기)
    const postURL = window.location.href;
    // 현재 날짜와 작성일 비교 변수
    const postDate = new Date(responseData?.data?.reg_date);
    const currentDate = new Date();
    const postTimeDifference = currentDate - postDate;
    const daysAgo = Math.floor(postTimeDifference / (1000 * 60 * 60 * 24));

    const textRef = useRef();
    const handleResizeHeight = useCallback(() => {
        if (textRef !== undefined) {
            textRef.current.style.height = 'auto';
            textRef.current.style.height = textRef.current.scrollHeight + 'px';
        }
    }, []);

    let s3_img_path = [];
    if (responseData && responseData.data && responseData.data.imgs_path) {
        s3_img_path = responseData.data.imgs_path.split(',');
    }
    let s3_first_img_path = '';
    if (s3_img_path[0] !== undefined) {
        s3_first_img_path = s3_img_path[0];
    }

    useEffect(() => {
        const getDetaillPost = async () => {
            console.log('getDetaillPost() CALLED!!');
            try {
                setIsLoading(true);
                const response = await ValidationItem('get', '/community/getDetailPost/' + postId, null);
                if (response.code === 200 && response.data !== null) {
                    console.log(response);

                    setResponseData(response);
                }
            } catch (error) {
                console.error('Error fetching posts', error);
            } finally {
                setIsLoading(false);
            }
        };
        getDetaillPost();
    }, []);

    const handleTextChange = (e) => {
        const text = e.target.value;
        // 함수 호출하여 바이트 수 계산
        setReportReason(text);
        fn_checkByte(text);

        console.log(reportReason);
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
            {isLoading ? (
                <>
                    <LoadingPostCard />
                    <SideBanner />
                </>
            ) : responseData === undefined || responseData?.data === undefined ? (
                <>
                    <div className='flex' style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <img src='/test_imgs/community_imgs/sumaho.png' alt='' style={{ width: '350px' }} />
                        <div className='nn_font' style={{ fontSize: '1.2em' }}>
                            더 이상 이용할 수 없는 컨텐츠 입니다.
                        </div>
                    </div>

                    <SideBanner />
                </>
            ) : (
                <>
                    <div className='post_section nn_font'>
                        <div className='flex' style={{ justifyContent: 'space-between' }}>
                            <div
                                className='yg_font'
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    margin: '15px 0px 10px 25px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => nav(-1)}
                            >
                                &#60;&nbsp;뒤로가기
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='detail_post_wrap'>
                                <div className='flex_for_profile'>
                                    <div className='flex'>
                                        <div className='profile_img'>
                                            <img
                                                src={
                                                    responseData?.data?.img === null
                                                        ? '/test_imgs/png/profile.png'
                                                        : responseData?.data?.img
                                                }
                                            />
                                        </div>
                                        <div className='profile_info' style={{ paddingTop: '0px' }}>
                                            <div className='profile_name'>{responseData?.data?.nickname}</div>
                                            <div className='update_date'>
                                                {responseData?.data?.reg_date?.substring(5, 7)}/
                                                {responseData?.data?.reg_date?.substring(8, 10)}
                                            </div>

                                            <div className='update_date'>
                                                {daysAgo === 0 ? '오늘' : `${daysAgo}일 전`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <textarea
                                    className='text_contents_in_detail'
                                    placeholder='수정할 내용을 입력해주세요.'
                                    ref={textRef}
                                    onInput={handleResizeHeight}
                                    rows={'1'}
                                    defaultValue={responseData?.data?.post_text}
                                    onChange={handleTextChange}
                                ></textarea>
                                <sup
                                    className='byte_for_upload '
                                    style={{ fontSize: '0.9em', marginRight: '30px', marginBottom: '35px' }}
                                >
                                    (<span id='nowByte'>{byteCount}</span>/2200bytes)
                                </sup>

                                {(Array.isArray(s3_img_path) ? s3_img_path : []).map((img, index) => (
                                    <div className='post_main_img_in_detail' style={{ position: 'relative' }}>
                                        <img key={index} src={img} alt={`Image ${index}`} />
                                        <figure className='zoom_in'>
                                            <button
                                                key={index}
                                                className='btn btn-close'
                                                style={{ position: 'absolute', top: '20px', right: '40px' }}
                                            ></button>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <SideBanner />

                    {/* <div className="tag_for_sticky">
                        <div>
                            <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                            <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                        </div>
                    </div> */}
                </>
            )}
        </>
    );
};

export default ModifyPost;
