import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import '../../../css/subpage/post.css';

const Post = ({ setSelectedPost, previewImage, setPreviewImage }) => {
    const [byteCount, setByteCount] = useState(0);
    const [postReportReason, setPostReportReason] = useState('');
    // 추후에 postURL 각 포스트 주소값으로 직접 할당해야함
    const postURL = window.location.href;

    const copyPostURL = () => {
        alert(`해당 링크가 복사되었습니다.\n LINK:${postURL}`);
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        // 함수 호출하여 바이트 수 계산
        setPostReportReason(text);
        fn_checkByte(text);

        console.log(postReportReason);
    };

    const removePostReportReason = () => {
        console.log('removePostReportReason CALLED!!');
        setPostReportReason('');

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
            <div className="post_wrap">
                <div className="flex_for_profile">
                    <div className="flex">
                        <div className="profile_img">
                            <img src="/test_imgs/logo/full_logo.jpg" />
                        </div>
                        <div className="profile_info">
                            <div className="profile_name">hee_hee</div>
                            <div className="update_date">1일 전</div>
                        </div>
                    </div>
                    <Link>
                        <div onClick={removePostReportReason}>
                            <img
                                src="/test_imgs/png/more.png"
                                style={{ width: '20px', height: '60px', objectFit: 'contain' }}
                                data-bs-toggle="modal"
                                data-bs-target="#modal_for_post_detail"
                            />
                        </div>
                    </Link>
                </div>
                <div className="text_contents">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ea similique! Iusto dignissimos
                    consectetur quia totam. Doloribus ratione consectetur magni distinctio in, officiis nesciunt, sunt
                    recusandae cumque maxime deleniti optio.
                </div>
                <Link className="none_underline" onClick={() => setSelectedPost(1)}>
                    <div className="for_detail">자세히 보기</div>
                </Link>
                <div className="post_main_img">
                    <img src="/test_imgs/diary_imgs/diary2.jpg" />
                </div>
                <div className="hashtag_btns flex">
                    <div># Baby</div>
                    <div># Memory</div>
                    <div># Diary</div>
                </div>
                <div className="emotion_btns flex">
                    <div className="flex">
                        <a className="flex none_underline">
                            <div>
                                <img className="emotion_btn" src="/test_imgs/png/heart.png" />
                            </div>
                            <div className="emotion_btn_cnt">10</div>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="flex none_underline">
                            <div>
                                <img className="emotion_btn" src="/test_imgs/png/like.png" />
                            </div>
                            <div className="emotion_btn_cnt">12</div>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="flex none_underline">
                            <div>
                                <img className="emotion_btn" src="/test_imgs/png/sad.png" />
                            </div>
                            <div className="emotion_btn_cnt">0</div>
                        </a>
                    </div>
                </div>
                <div className="reply_cnt">
                    <Link className="none_underline" onClick={() => setSelectedPost(1)}>
                        댓글 5개
                    </Link>
                </div>
                {/* 모달 START */}
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
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal_for_post_declaration"
                                    style={{ color: 'red' }}
                                >
                                    신고
                                </div>
                                <hr />
                                <a href="/detail">
                                    <div>게시물로 이동</div>
                                </a>
                                <hr />
                                <a onClick={copyPostURL}>
                                    <CopyToClipboard text={postURL}>
                                        <div>링크 복사</div>
                                    </CopyToClipboard>
                                </a>
                                <hr />
                                <div data-bs-dismiss="modal" aria-label="Close">
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
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                            <sup className="byte_for_upload" style={{ marginRight: '25px' }}>
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
                {/* 모달 END */}
            </div>
        </>
    );
};

export default Post;
