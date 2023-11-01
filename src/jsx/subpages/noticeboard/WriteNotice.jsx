import React, { useEffect, useRef, useState } from 'react';
import '../../../css/subpage/detailnotice.css';
import QuillEditor from './QuillEditor';

const WriteNotice = () => {
    return (
        <>
            <div className="detail_notice_wrap ">
                <div className="admin_page_menu_title_wrap" style={{ marginLeft: '20px', marginBottom: '20px' }}>
                    <img src="/test_imgs/svg/pencil.svg" />
                    <div className="admin_page_menu_title yg_font ">공지사항</div>
                    <div className="yg_font admin_page_menu_sub_title"> &#62; 작성하기</div>
                </div>
                <div className="detail_notice_content_wrap">
                    <div className="write_notice_content_box">
                        <div className="">
                            <div className="input-group mb-3 write_notice_title" style={{ margin: '0px' }}>
                                <span
                                    className="input-group-text"
                                    id="inputGroup-sizing-default"
                                    style={{ fontWeight: 'bold' }}
                                >
                                    제목
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="제목을 입력하세요."
                                />
                            </div>
                        </div>
                        <div className="write_notice_content">
                            <div className="editor-container">
                                <QuillEditor />
                            </div>
                        </div>
                        <div className="notice_datail_files flex">
                            <div>첨부파일</div>
                            <div>
                                <div>첨부파일이 없습니다.</div>
                            </div>
                        </div>
                    </div>
                    <img className="detail_notice_pin" src="/test_imgs/png/pin.png" />
                </div>
                <div className="d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-light ">
                        게시하기
                    </button>
                </div>
                {/* <div className="prev_next_notice_box">
                    <div className="next_notice_box flex" style={{ justifyContent: 'space-between' }}>
                        <div className="flex">
                            <div className="prev_next_notice_box_head">다음 글</div>
                            <div>
                                <a href="#none">다음 글이 없습니다.</a>
                            </div>
                        </div>
                        <div className="flex">
                            <div>관리자</div>
                            <div>|</div>
                            <div>2023-10-26</div>
                        </div>
                    </div>
                    <div className=" prev_notice_box flex" style={{ justifyContent: 'space-between' }}>
                        <div className="flex">
                            <div className="prev_next_notice_box_head">이전 글</div>
                            <div>
                                <a href="#none">이전 글이 없습니다.</a>
                            </div>
                        </div>
                        <div className="flex">
                            <div>관리자</div>
                            <div>|</div>
                            <div>2023-10-26</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default WriteNotice;
