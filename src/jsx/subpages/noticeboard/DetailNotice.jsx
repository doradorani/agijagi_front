import React, { useEffect, useState } from 'react';
import { useValidationItem } from '../../../js/api/VlidationItem';
import '../../../css/subpage/detailnotice.css';
import noticeIndex_config from '../../../js/api/config/noticeIndex_config';
import { noticeIndexAction } from '../../../js/api/redux_store/slice/noticeIndexSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const DetailNotice = () => {
    const [noticeContent, setNoticeContent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [indexZeroFileNameArray, setIndexZeroFileNameArray] = useState([]);
    const [indexOneFileNameArray, setIndexOneFileNameArray] = useState([]);

    const validationUserNotice = useValidationItem();
    const noticeIndexDispatch = useDispatch();

    useEffect(() => {
        const getNoticeDetail = async () => {
            try {
                setIsLoading(true);
                const noticeIndex = noticeIndex_config.noticeIndexState;
                const detailResponse = await validationUserNotice('get', '/notice/detail/' + noticeIndex, null);
                setNoticeContent(detailResponse.data);
                console.log(detailResponse.data);

                const zeroFileName = detailResponse.data[0].file_name;
                const ZeroFileNameArray = zeroFileName ? zeroFileName.split(',') : null;
                const oneFileName = detailResponse.data[1].file_name;
                const OneFileNameArray = oneFileName ? oneFileName.split(',') : null;

                setIndexZeroFileNameArray(ZeroFileNameArray);
                setIndexOneFileNameArray(OneFileNameArray);
            } catch (error) {
                console.error('Error fetching detailNotice:', error);
            } finally {
                setIsLoading(false);
            }
        };
        getNoticeDetail();
    });

    const nextPageHandler = (index) => {
        console.log('nextPageHandler() CALLED!!');
        noticeIndexDispatch(noticeIndexAction.setNoticeIndexState(index));
    };

    return (
        // <div className="detail_notice_wrap">
        //     <div className="detail_notice_content_wrap">
        //         <div className="detail_notice_content_box">
        //             <div className="notice_info_wrap">
        //                 <div>
        //                     <span>No.</span>
        //                     <span>1</span>
        //                 </div>
        //                 <div>
        //                     <span>작성일</span>
        //                     <span>2023.10.19</span>
        //                     <span>|</span>
        //                     <span>수정일</span>
        //                     <span>2023.10.19</span>
        //                     <span>|</span>
        //                     <span>작성자</span>
        //                     <span>관리자1</span>
        //                     <span>|</span>
        //                     <span>조회수</span>
        //                     <span>10</span>
        //                 </div>
        //             </div>
        //             <div className="notice_detail_title">제목1111111111</div>
        //             <div className="notice_detail_textarea">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem cum ullam facere velit
        //                 aliquid accusamus maxime perspiciatis repudiandae officiis magni exercitationem quo repellat
        //                 dolore voluptate, praesentium vero molestias iste? Lorem ipsum dolor sit amet consectetur
        //                 adipisicing elit. Ad, doloremque ab sapiente veniam nobis nihil eius, ullam aliquid voluptas
        //                 accusantium nesciunt doloribus inventore magni sequi unde itaque facilis maxime ipsa? Lorem
        //                 ipsum dolor, sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorem cum
        //                 ullam facere velit aliquid accusamus maxime perspiciatis repudiandae officiis magni
        //                 exercitationem quo repellat dolore voluptate, praesentium vero molestias iste? Lorem ipsum dolor
        //                 sit amet consectetur adipisicing elit. Ad, doloremque ab sapiente veniam nobis nihil eius, ullam
        //                 aliquid voluptas accusantium nesciunt doloribus inventore magni sequi unde itaque facilis maxime
        //             </div>
        //             <div className="notice_datail_files flex">
        //                 <div>첨부파일</div>
        //                 <div>
        //                     <div>첨부파일이 없습니다.</div>
        //                     <div>
        //                         <a href="#none">붙임1. 첨부파일1첨부파일1첨부파일1첨부파일1첨부파일1</a>
        //                     </div>
        //                     <div>
        //                         <a href="#none">붙임2. 첨부파일2첨부파일2첨부파일2첨부파일2첨부파일2</a>
        //                     </div>
        //                     <div>
        //                         <a href="#none">붙임3. 첨부파일3첨부파일3첨부파일3첨부파일3첨부파일3</a>
        //                     </div>
        //                     <div>
        //                         <a href="#none">붙임4. 첨부파일4첨부파일4첨부파일4첨부파일4첨부파일4</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <img className="detail_notice_pin" src="/test_imgs/png/pin.png" />
        //     </div>
        //     <div className="d-md-flex justify-content-md-end">
        //         <button type="button" className="btn btn-light ">
        //             목록보기
        //         </button>
        //     </div>
        //     <div className="prev_next_notice_box">
        //         <div className="next_notice_box flex" style={{ justifyContent: 'space-between' }}>
        //             <div className="flex">
        //                 <div className="prev_next_notice_box_head">다음 글</div>
        //                 <div>
        //                     <a href="#none">다음 글이 없습니다.</a>
        //                 </div>
        //             </div>
        //             <div className="flex">
        //                 <div>관리자</div>
        //                 <div>|</div>
        //                 <div>2023-10-26</div>
        //             </div>
        //         </div>
        //         <div className=" prev_notice_box flex" style={{ justifyContent: 'space-between' }}>
        //             <div className="flex">
        //                 <div className="prev_next_notice_box_head">이전 글</div>
        //                 <div>
        //                     <a href="#none">이전 글이 없습니다.</a>
        //                 </div>
        //             </div>
        //             <div className="flex">
        //                 <div>관리자</div>
        //                 <div>|</div>
        //                 <div>2023-10-26</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="detail_notice_wrap nn_font">
            {isLoading ? (
                <div className="text-center" style={{ marginTop: '250px' }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                // 버튼 및 본문 렌더링 되는 로직 관련 코드
                noticeContent &&
                (noticeContent[1] && noticeContent[1].no === noticeIndex_config.noticeIndexState ? (
                    noticeContent[1].status === 0 ? (
                        <></>
                    ) : (
                        <>
                            <div className="detail_notice_content_wrap">
                                <div className="detail_notice_content_box">
                                    <div className="notice_info_wrap">
                                        <div>
                                            <span>No.</span>
                                            <span>{noticeContent[1].no}</span>
                                        </div>
                                        <div>
                                            <span>작성일</span>
                                            <span>{noticeContent[1].reg_date.substring(0, 10)}</span>
                                            <span>|</span>
                                            <span>수정일</span>
                                            <span>{noticeContent[1].mod_date.substring(0, 10)}</span>
                                            <span>|</span>
                                            <span>작성자</span>
                                            <span>{noticeContent[1].admin_id}</span>
                                            <span>|</span>
                                            <span>조회수</span>
                                            <span>{noticeContent[1].hit}</span>
                                        </div>
                                    </div>
                                    <div className="notice_detail_title">{noticeContent[1].title}</div>
                                    <div
                                        className="notice_detail_textarea"
                                        dangerouslySetInnerHTML={{ __html: noticeContent[1].content }}
                                    ></div>
                                    <div className="notice_datail_files flex">
                                        <div
                                            className="flex"
                                            style={{ justifyContent: 'center', alignItems: 'center' }}
                                        >
                                            첨부파일
                                        </div>
                                        <div>
                                            {indexOneFileNameArray ? (
                                                indexOneFileNameArray.map((file_name, index) => (
                                                    <div key={index}>
                                                        <a href="">{file_name}</a>
                                                    </div>
                                                ))
                                            ) : (
                                                <div>첨부파일이 없습니다.</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <img className="detail_notice_pin" src="/test_imgs/png/pin.png" />
                            </div>
                            <div className="flex" style={{ justifyContent: 'space-between' }}>
                                <div className="d-md-flex justify-content-md-start">
                                    <button
                                        type="button"
                                        className="btn btn-light "
                                        onClick={() => {
                                            // deleteNotice(noticeContent[1].no);
                                        }}
                                    >
                                        삭제하기
                                    </button>
                                </div>
                                <div className="d-md-flex justify-content-md-end">
                                    <button
                                        type="button"
                                        className="btn btn-light "
                                        style={{ marginRight: '20px' }}
                                        onClick={() => {
                                            // moveToModify(noticeContent[1].no);
                                        }}
                                    >
                                        수정하기
                                    </button>
                                    <Link to="/admin/admin_notice">
                                        <button type="button" className="btn btn-light ">
                                            목록보기
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                ) : noticeContent[0].status === 0 ? (
                    <></>
                ) : (
                    <>
                        <div className="detail_notice_content_wrap">
                            <div className="detail_notice_content_box">
                                <div className="notice_info_wrap">
                                    <div>
                                        <span>No.</span>
                                        <span>{noticeContent[0].no}</span>
                                    </div>
                                    <div>
                                        <span>작성일</span>
                                        <span>{noticeContent[0].reg_date.substring(0, 10)}</span>
                                        <span>|</span>
                                        <span>수정일</span>
                                        <span>{noticeContent[0].mod_date.substring(0, 10)}</span>
                                        <span>|</span>
                                        <span>작성자</span>
                                        <span>{noticeContent[0].admin_id}</span>
                                        <span>|</span>
                                        <span>조회수</span>
                                        <span>{noticeContent[0].hit}</span>
                                    </div>
                                </div>
                                <div className="notice_detail_title">{noticeContent[0].title}</div>
                                <div
                                    className="notice_detail_textarea"
                                    dangerouslySetInnerHTML={{ __html: noticeContent[0].content }}
                                ></div>
                                <div className="notice_datail_files flex">
                                    <div className="flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        첨부파일
                                    </div>
                                    <div>
                                        {indexZeroFileNameArray ? (
                                            indexZeroFileNameArray.map((file_name, index) => (
                                                <div key={index}>
                                                    <a href="">{file_name}</a>
                                                </div>
                                            ))
                                        ) : (
                                            <div>첨부파일이 없습니다.</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <img className="detail_notice_pin" src="/test_imgs/png/pin.png" />
                        </div>
                        <div className="flex" style={{ justifyContent: 'space-between' }}>
                            <div className="d-md-flex justify-content-md-start">
                                <Link to="/admin/admin_notice">
                                    <button
                                        type="button"
                                        className="btn btn-light "
                                        // onClick={() => deleteNotice(noticeContent[0].no)}
                                    >
                                        삭제하기
                                    </button>
                                </Link>
                            </div>
                            <div className="d-md-flex justify-content-md-end">
                                <Link to="/admin/admin_notice" style={{ marginRight: '20px' }}>
                                    <button
                                        type="button"
                                        className="btn btn-light "
                                        onClick={() => {
                                            // moveToModify(noticeContent[0].no);
                                        }}
                                    >
                                        수정하기
                                    </button>
                                </Link>
                                <Link to="/admin/admin_notice">
                                    <button type="button" className="btn btn-light ">
                                        목록보기
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                ))
            )}

            {isLoading ? (
                <></>
            ) : (
                // 이전글 다음글 렌더링 되는 로직 관련 코드
                noticeContent && (
                    <div className="prev_next_notice_box">
                        <div className="next_notice_box flex" style={{ justifyContent: 'space-between' }}>
                            <div className="flex">
                                <div className="prev_next_notice_box_head">다음 글</div>
                                <div>
                                    {noticeContent.length === 2 &&
                                    noticeIndex_config.noticeIndexState === noticeContent[1].no ? (
                                        <a>다음 게시물이 없습니다.</a>
                                    ) : noticeIndex_config.noticeIndexState === noticeContent[1].no ? (
                                        <a href="" onClick={() => nextPageHandler(noticeContent[2].no)}>
                                            {noticeContent[2].title}
                                        </a>
                                    ) : (
                                        <a href="" onClick={() => nextPageHandler(noticeContent[1].no)}>
                                            {noticeContent[1].title}
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="flex">
                                {noticeContent.length === 2 &&
                                noticeIndex_config.noticeIndexState === noticeContent[1].no ? (
                                    <div></div>
                                ) : noticeIndex_config.noticeIndexState === noticeContent[1].no ? (
                                    <>
                                        <div>{noticeContent[2].admin_id}</div>
                                        <div>|</div>
                                        <div>{noticeContent[2].reg_date.substring(0, 10)}</div>
                                    </>
                                ) : (
                                    <>
                                        <div>{noticeContent[1].admin_id}</div>
                                        <div>|</div>
                                        <div>{noticeContent[1].reg_date.substring(0, 10)}</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className=" prev_notice_box flex" style={{ justifyContent: 'space-between' }}>
                            <div className="flex">
                                <div className="prev_next_notice_box_head">이전 글</div>
                                <div>
                                    {noticeContent.length === 2 &&
                                    noticeIndex_config.noticeIndexState === noticeContent[0].no ? (
                                        <a>이전 게시물이 없습니다.</a>
                                    ) : (
                                        <a href="" onClick={() => nextPageHandler(noticeContent[0].no)}>
                                            {noticeContent[0].title}
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="flex">
                                {noticeContent.length === 2 &&
                                noticeIndex_config.noticeIndexState === noticeContent[0].no ? (
                                    <div></div>
                                ) : (
                                    <>
                                        <div>{noticeContent[0].admin_id}</div>
                                        <div>|</div>
                                        <div>{noticeContent[0].reg_date.substring(0, 10)}</div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default DetailNotice;
