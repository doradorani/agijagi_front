import React from 'react';
import '../../../css/subpage/detailnotice.css';

const DetailNotice = () => {
    return (
        <div className="detail_notice_wrap">
            <div className="detail_notice_content_wrap">
                <div className="detail_notice_content_box">
                    <div className="notice_info_wrap">
                        <div>
                            <span>No.</span>
                            <span>1</span>
                        </div>
                        <div>
                            <span>작성일</span>
                            <span>2023.10.19</span>
                            <span>|</span>
                            <span>수정일</span>
                            <span>2023.10.19</span>
                            <span>|</span>
                            <span>작성자</span>
                            <span>관리자1</span>
                            <span>|</span>
                            <span>조회수</span>
                            <span>10</span>
                        </div>
                    </div>
                    <div className="notice_detail_title">제목1111111111</div>
                    <div className="notice_detail_textarea">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem cum ullam facere velit
                        aliquid accusamus maxime perspiciatis repudiandae officiis magni exercitationem quo repellat
                        dolore voluptate, praesentium vero molestias iste? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ad, doloremque ab sapiente veniam nobis nihil eius, ullam aliquid voluptas
                        accusantium nesciunt doloribus inventore magni sequi unde itaque facilis maxime ipsa? Lorem
                        ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem cum
                        ullam facere velit aliquid accusamus maxime perspiciatis repudiandae officiis magni
                        exercitationem quo repellat dolore voluptate, praesentium vero molestias iste? Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Ad, doloremque ab sapiente veniam nobis nihil eius, ullam
                        aliquid voluptas accusantium nesciunt doloribus inventore magni sequi unde itaque facilis maxime
                    </div>
                    <div className="notice_datail_files flex">
                        <div>첨부파일</div>
                        <div>
                            <div>첨부파일이 없습니다.</div>
                            <div>
                                <a href="#none">붙임1. 첨부파일1첨부파일1첨부파일1첨부파일1첨부파일1</a>
                            </div>
                            <div>
                                <a href="#none">붙임2. 첨부파일2첨부파일2첨부파일2첨부파일2첨부파일2</a>
                            </div>
                            <div>
                                <a href="#none">붙임3. 첨부파일3첨부파일3첨부파일3첨부파일3첨부파일3</a>
                            </div>
                            <div>
                                <a href="#none">붙임4. 첨부파일4첨부파일4첨부파일4첨부파일4첨부파일4</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="detail_notice_pin" src="/test_imgs/png/pin.png" />
            </div>
            <div className="d-md-flex justify-content-md-end">
                <button type="button" className="btn btn-light ">
                    목록보기
                </button>
            </div>
            <div className="prev_next_notice_box">
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
            </div>
        </div>
    );
};

export default DetailNotice;
