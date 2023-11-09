import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/subpage/post.css';
import SideMenu from '../SideMenu';

const DetailPost = ({ setSelectedPost }) => {
    const textarea = useRef();

    const handleResizeHeight = () => {
        textarea.current.style.height = 'auto';
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    };

    return (
        <>
            <div className="post_section">
                <div className="flex" style={{ justifyContent: 'space-between' }}>
                    <div
                        className="yg_font"
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            margin: '15px 0px 10px 25px',
                            cursor: 'pointer',
                        }}
                        onClick={() => setSelectedPost(0)}
                    >
                        &#60;&nbsp;뒤로가기
                    </div>
                </div>
                <div className="flex">
                    <div className="detail_post_wrap">
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
                            <div>
                                <img
                                    src="/test_imgs/png/more.png"
                                    style={{ width: '20px', height: '60px', objectFit: 'contain' }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal_for_post_detail"
                                />
                            </div>
                        </div>
                        <div className="text_contents_in_detail">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ea similique! Iusto
                            dignissimos consectetur quia totam. Doloribus ratione consectetur magni distinctio in,
                            officiis nesciunt, sunt recusandae cumque maxime deleniti optio.
                        </div>
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
                        <hr className="division_line" />
                        <div className="reply_cnt">댓글 5개</div>
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
                                    댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2 댓글 2
                                    댓글 2 댓글 2 댓글 2
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
                                            대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1
                                            대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1 대댓글 1
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
                    {/* 모달 START */}
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
                    {/* 모달 END */}
                </div>
            </div>
            <div className="tag_for_sticky">
                <div>
                    <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                    <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                </div>
            </div>
        </>
    );
};

export default DetailPost;
