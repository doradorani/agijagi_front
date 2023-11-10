import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../../css/subpage/post.css';
import { useValidationItem } from '../../../js/api/VlidationItem';
import CopyToClipboard from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';
import userInfo_config from '../../../js/api/config/userInfo_config';

const DetailPost = ({ setSelectedPost }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState();
    const [byteCount, setByteCount] = useState(0);
    const [postReportReason, setPostReportReason] = useState('');

    const loginedUserNickname = userInfo_config.userNickname;

    const { postId } = useParams();
    const postURL = window.location.href;

    const postDate = new Date(responseData?.data?.reg_date);
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let s3_img_path = [];
    if (responseData && responseData.data && responseData.data.imgs_path) {
        s3_img_path = responseData.data.imgs_path.split(',');
    }
    let s3_first_img_path = '';
    if (s3_img_path[0] !== undefined) {
        s3_first_img_path = s3_img_path[0];
    }

    const nav = useNavigate();
    const validationItemForDetailPost = useValidationItem();

    useEffect(() => {
        const getDetaillPost = async () => {
            console.log('getDetaillPost() CALLED!!');
            try {
                setIsLoading(true);
                const response = await validationItemForDetailPost('get', '/community/getDetailPost/' + postId, null);
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

    const copyPostURL = () => {
        Swal.fire({
            icon: 'success',
            title: `해당 링크가 복사되었습니다.`,
            text: `${postURL}/detail_post/${responseData?.data?.no}`,
        });
        // alert(`해당 링크가 복사되었습니다.\n LINK:${postURL}/detail_post/${data.no}`);
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        // 함수 호출하여 바이트 수 계산
        setPostReportReason(text);
        fn_checkByte(text);

        console.log(postReportReason);
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
            {isLoading || responseData === undefined || responseData?.data === undefined ? (
                <div></div>
            ) : (
                <>
                    <div className="post_section nn_font">
                        <div className="flex" style={{ justifyContent: 'space-between' }}>
                            <div
                                className="yg_font"
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
                        <div className="flex">
                            <div className="detail_post_wrap">
                                <div className="flex_for_profile">
                                    <div className="flex">
                                        <div className="profile_img">
                                            <img
                                                src={
                                                    responseData?.data?.img === null
                                                        ? '/test_imgs/png/profile.png'
                                                        : responseData?.data?.img
                                                }
                                            />
                                        </div>
                                        <div className="profile_info">
                                            <div className="profile_name">{responseData?.data?.nickname}</div>
                                            <div className="update_date">
                                                {daysAgo === 0 ? '오늘' : `${daysAgo}일 전`}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src="/test_imgs/png/more.png"
                                            style={{ width: '20px', height: '60px', objectFit: 'contain' }}
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal_for_post_detail"
                                        />
                                    </div>
                                </div>
                                <div className="text_contents_in_detail">{responseData?.data?.post_text}</div>
                                <div className="post_main_img_in_detail">
                                    {(Array.isArray(s3_img_path) ? s3_img_path : []).map((img, index) => (
                                        <img key={index} src={img} alt={`Image ${index}`} />
                                    ))}
                                </div>
                                <div className="emotion_btns_indetail flex">
                                    <div className="flex">
                                        <a className="flex none_underline">
                                            <div>
                                                <img className="emotion_btn" src="/test_imgs/png/heart.png" />
                                            </div>
                                            <div className="emotion_btn_cnt">{responseData?.data?.like_cnt}</div>
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <a className="flex none_underline">
                                            <div>
                                                <img className="emotion_btn" src="/test_imgs/png/like.png" />
                                            </div>
                                            <div className="emotion_btn_cnt">{responseData?.data?.great_cnt}</div>
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <a className="flex none_underline">
                                            <div>
                                                <img className="emotion_btn" src="/test_imgs/png/sad.png" />
                                            </div>
                                            <div className="emotion_btn_cnt">{responseData?.data?.sad_cnt}</div>
                                        </a>
                                    </div>
                                </div>
                                <hr className="division_line" />
                                <div className="reply_cnt">댓글 {responseData?.data?.reply_cnt}개</div>
                                <div className="write_reply_box">
                                    <div className="each_reply_box">
                                        <div className="flex_for_profile">
                                            <div className="flex">
                                                <div className="reply_profile_img">
                                                    <img src="/test_imgs/logo/full_logo.jpg" />
                                                </div>
                                                <div className="reply_profile_info">
                                                    <div className="profile_name">hee_hee</div>
                                                    <div className="update_date">1일 전</div>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="/test_imgs/png/more.png"
                                                    style={{
                                                        width: '20px',
                                                        height: '60px',
                                                        objectFit: 'contain',
                                                        marginRight: '10px',
                                                    }}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modal_for_change_reply"
                                                />
                                            </div>
                                        </div>
                                        <div className="reply_text_content">
                                            댓글 1 댓글 1 댓글 1 댓글 1 댓글 1 댓글 1 댓글 1
                                        </div>
                                    </div>
                                    <div className="each_reply_box">
                                        <div className="flex_for_profile">
                                            <div className="flex">
                                                <div className="reply_profile_img">
                                                    <img src="/test_imgs/logo/full_logo.jpg" />
                                                </div>
                                                <div className="reply_profile_info">
                                                    <div className="profile_name">hee_hee</div>
                                                    <div className="update_date">1일 전</div>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="/test_imgs/png/more.png"
                                                    style={{
                                                        width: '20px',
                                                        height: '60px',
                                                        objectFit: 'contain',
                                                        marginRight: '10px',
                                                    }}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modal_for_change_reply"
                                                />
                                            </div>
                                        </div>
                                        <div className="reply_text_content">
                                            댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2
                                            댓글 2 댓글 2 댓글 2 댓글 2
                                        </div>
                                        <div className="each_re_reply_text_content">
                                            <div className="reply_arrow_img">
                                                <img src="/test_imgs/png/reply-blue.png" />
                                            </div>
                                            <div className="re_reply_content_box">
                                                <div className="flex_for_profile">
                                                    <div className="flex">
                                                        <div className="reply_profile_img">
                                                            <img src="/test_imgs/logo/full_logo.jpg" />
                                                        </div>
                                                        <div className="reply_profile_info">
                                                            <div className="profile_name">hee_hee</div>
                                                            <div className="update_date">1일 전</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img
                                                            src="/test_imgs/png/more.png"
                                                            style={{
                                                                width: '20px',
                                                                height: '60px',
                                                                objectFit: 'contain',
                                                            }}
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modal_for_change_reply"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="reply_text_content">
                                                    대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1
                                                    대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1
                                                </div>
                                            </div>
                                        </div>
                                        <div className="each_re_reply_text_content">
                                            <div className="reply_arrow_img">
                                                <img src="/test_imgs/png/reply-blue.png" />
                                            </div>
                                            <div className="re_reply_content_box">
                                                <div className="flex_for_profile">
                                                    <div className="flex">
                                                        <div className="reply_profile_img">
                                                            <img src="/test_imgs/logo/full_logo.jpg" />
                                                        </div>
                                                        <div className="reply_profile_info">
                                                            <div className="profile_name">hee_hee</div>
                                                            <div className="update_date">1일 전</div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <img
                                                            src="/test_imgs/png/more.png"
                                                            style={{
                                                                width: '20px',
                                                                height: '60px',
                                                                objectFit: 'contain',
                                                            }}
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modal_for_change_reply"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="reply_text_content">
                                                    대댓글 2 대댓글 2 대댓글 2 대댓글 2 대댓글 2 대댓글 2 대댓글 2
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="each_reply_box">
                                        <div className="flex_for_profile">
                                            <div className="flex">
                                                <div className="reply_profile_img">
                                                    <img src="/test_imgs/logo/full_logo.jpg" />
                                                </div>
                                                <div className="reply_profile_info">
                                                    <div className="profile_name">hee_hee</div>
                                                    <div className="update_date">1일 전</div>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    src="/test_imgs/png/more.png"
                                                    style={{
                                                        width: '20px',
                                                        height: '60px',
                                                        objectFit: 'contain',
                                                        marginRight: '10px',
                                                    }}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modal_for_change_reply"
                                                />
                                            </div>
                                        </div>
                                        <div className="reply_text_content">
                                            댓글 3 댓글 3 댓글 3 댓글 3 댓글 3 댓글 3 댓글 3 댓글 3
                                        </div>
                                    </div>
                                    {/* <hr className="division_line_for_reply"/> */}
                                    <div className="division_box_for_write_reply">
                                        <div>
                                            <textarea
                                                className="upload_reply"
                                                name="text"
                                                placeholder="댓글 달기..."
                                                rows={'1'}
                                            ></textarea>
                                        </div>
                                        <div className="send_logo_wrap">
                                            <a href="#none">
                                                <img className="send_logo" src="/test_imgs/png/paper-airplane.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 게시물 모달 START */}
                            <div
                                className="modal fade"
                                id="modal_for_post_detail"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-lg modal-lg-text modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div
                                            className="modal-body mx-auto"
                                            style={{ width: '450px', textAlign: 'center', fontWeight: 'bold' }}
                                        >
                                            <div
                                                className="hover_cursor"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modal_for_post_declaration"
                                                style={{ color: 'red' }}
                                            >
                                                게시물 신고
                                            </div>
                                            {loginedUserNickname === responseData?.data?.nickname ? (
                                                <>
                                                    <hr />
                                                    <div
                                                        className="hover_cursor"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#modal_for_post_declaration"
                                                    >
                                                        수정하기
                                                    </div>{' '}
                                                </>
                                            ) : (
                                                <></>
                                            )}

                                            <hr />
                                            <a
                                                className="hover_cursor none_underline"
                                                onClick={copyPostURL}
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <CopyToClipboard
                                                    text={`${postURL}/detail_post/${responseData?.data?.no}`}
                                                >
                                                    <div>링크 복사</div>
                                                </CopyToClipboard>
                                            </a>
                                            <hr />
                                            <div className="hover_cursor" data-bs-dismiss="modal" aria-label="Close">
                                                취소
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="modal fade"
                                id="modal_for_post_declaration"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-lg modal-lg-text modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5 yg_font" id="exampleModalLabel">
                                                신고사유 작성하기
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body mx-auto">
                                            <textarea
                                                className="upload_text"
                                                placeholder="게시물의 신고사유를 작성해주세요."
                                                style={{ width: '400px' }}
                                                onChange={handleTextChange}
                                                value={postReportReason}
                                            ></textarea>
                                        </div>
                                        <sup className="byte_for_upload yg_font" style={{ marginRight: '25px' }}>
                                            (<span id="nowByte">{byteCount}</span>/2200bytes)
                                        </sup>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modal_for_post_detail"
                                            >
                                                이전
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                제출하기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 게시물 모달 END */}
                            {/*댓글 모달 START */}
                            <div
                                className="modal fade"
                                id="modal_for_change_reply"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-lg modal-lg-text modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div
                                            className="modal-body mx-auto"
                                            style={{ width: '450px', textAlign: 'center', fontWeight: 'bold' }}
                                        >
                                            <a href="/detail">
                                                <div>대댓글 작성</div>
                                            </a>
                                            <hr />
                                            <a href="/post_link_copy">
                                                <div>댓글 수정</div>
                                            </a>
                                            <hr />
                                            <div
                                                data-bs-toggle="modal"
                                                data-bs-target="#modal_for_post_declaration"
                                                style={{ color: 'red' }}
                                            >
                                                댓글 신고
                                            </div>
                                            <hr />
                                            <div data-bs-dismiss="modal" aria-label="Close">
                                                취소
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*댓글 모달 END */}
                        </div>
                    </div>
                    <div className="tag_for_sticky">
                        <div>
                            <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                            <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default DetailPost;
