import React, { useEffect, useState } from 'react';
import NoticeTable from '../../../subpages/noticeboard/NoticeTable';
import AdminSidbar from '../../AdminSidebar';
import axios from 'axios';
import token_config from '../../../../js/api/config/token_config';
import { useValidationAdmin } from '../../../../js/api/admin/ValidationAdminApi';
import { useDispatch } from 'react-redux';
import { adminStateAction } from '../../../../js/api/redux_store/slice/adminLoginSlice';
// import { noticeIndexAction } from '../../../../js/api/redux_store/slice/noticeIndexSlice';
// import noticeIndex_config from '../../../../js/api/config/noticeIndex_config';
// import { useParams } from 'react-router-dom';
import { useValidationAdminItem } from '../../../../js/api/admin/ValidationAdminItem';

const AdminNoticeList = ({ setSelectedSideMenu }) => {
    const [noticeTable, setNoticeTable] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(10);
    const [modifyRequest, setModifyRequest] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    // const [noticeIndex, setNoticeIndex] = useState(0);
    const [isRefresh, setIsRefresh] = useState(0);
    // let { noticeIndex } = useParams();

    // const noticeIndexDispatch = useDispatch();
    // noticeIndex = noticeIndex_config.noticeIndexState;
    // const noticeIndex = useSelector((state) => state.noticeIndexState);

    // 관리자 로그인 상태 검증 관련 state
    const server = token_config.server;
    const adminLoginDispatch = useDispatch();
    const validationAdminGetTable = useValidationAdmin(
        'get',
        '/notice/noticeTable/' + currentPage + '/' + perPage,
        null
    );

    const validationAdminForDeleteNotice = useValidationAdminItem();

    // const validationAdminForMoveDetail = useValidationAdmin(
    //     'get',
    //     '/notice/noticeDetail/' + noticeIndex + '/' + modifyRequest,
    //     null
    // );

    useEffect(() => {
        // 서버에서 공지사항 데이터 가져오는 함수
        const getNoticeTable = async () => {
            try {
                setIsLoading(true);
                // 관리자 로그인 상태 검증
                const validateAdminResponse = await validationAdminGetTable();
                // const response = await axios.get(`${server}/notice/noticeTable/${currentPage}/${perPage}`);
                // 서버에서 가져온 공지사항 데이터 set
                setNoticeTable(validateAdminResponse.data.noticeDtos);
                setTotalPages(validateAdminResponse.data.totalPages);
            } catch (error) {
                console.error('Error fetching notices:', error);
                adminLoginDispatch(adminStateAction.setAdminState(false));
            } finally {
                setIsLoading(false);
            }
        };
        getNoticeTable();
    }, [currentPage, perPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const deleteNotice = async (notice, currentPage) => {
        try {
            setIsLoading(true);
            const noticeIndex = notice.no;

            const deleteResponse = await validationAdminForDeleteNotice(
                'delete',
                '/notice/deleteNotice/' + noticeIndex,
                null
            );
            setNoticeTable(null);

            console.log(deleteResponse);

            if (deleteResponse.code === 200 && deleteResponse.data === 1) {
                alert('정상적으로 삭제되었습니다.');
                const validateAdminResponse = await validationAdminGetTable();
                // 서버에서 가져온 공지사항 데이터 reRender
                setNoticeTable(validateAdminResponse.data.noticeDtos);
                setTotalPages(validateAdminResponse.data.totalPages);

                console.log(validateAdminResponse);
            } else {
                alert('게시물 삭제에 실패하였습니다.');
            }
            // setCurrentPage(currentPage);
        } catch (error) {
            console.error('Error fetching deleteNotice:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const moveToDetail = async (notice) => {
        // noticeIndexDispatch(noticeIndexAction.setNoticeIndexState(notice.no));
        //navigator('/admin/admin_notice_detail');
    };

    return (
        <>
            <div className="admin_authorization_wrap">
                <div className="admin_page_menu_title_wrap">
                    <img src="/test_imgs/svg/notice.svg" />
                    <div className="admin_page_menu_title yg_font ">공지사항</div>
                    <div className="yg_font admin_page_menu_sub_title"> &#62; 등록된 공지사항</div>
                </div>
                <div className="admin_authorization_second_wrap">
                    <table
                        className="admin_authorization table table-striped table-hover"
                        style={{ marginTop: '15px' }}
                    >
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th style={{ width: '35%' }}>제목</th>
                                <th>작성자</th>
                                <th>첨부파일</th>
                                <th>조회수</th>
                                <th>작성일</th>
                                <th>수정일</th>
                                <th>게시물 수정</th>
                                <th>삭제여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td>로딩중.....</td>
                                </tr>
                            ) : (
                                (Array.isArray(noticeTable) ? noticeTable : []).map((notice) => (
                                    <tr key={notice.no}>
                                        <td>{notice.no}</td>
                                        <td style={{ textAlign: 'left' }}>
                                            <a href="#none" onClick={() => moveToDetail(notice)}>
                                                {notice.title}
                                            </a>
                                        </td>
                                        <td>{notice.admin_no}</td>
                                        <td>{notice.attach_cnt}</td>
                                        <td>{notice.hit}</td>
                                        <td>{notice.reg_date.substring(0, 10)}</td>
                                        <td>{notice.mod_date.substring(0, 10)}</td>
                                        <td
                                            style={{
                                                padding: '0px',
                                                paddingTop: '4px',
                                            }}
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-light"
                                                style={{
                                                    fontFamily: 'malgun gothic',
                                                    margin: '0',
                                                    padding: '3px 7px ',
                                                }}
                                            >
                                                수정하기
                                            </button>
                                        </td>
                                        <td style={{ textAlign: 'center', padding: '0px', paddingTop: '4px' }}>
                                            <a>
                                                {notice.status === 0 ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        disabled
                                                        style={{
                                                            fontFamily: 'malgun gothic',
                                                            margin: '0',
                                                            padding: '3px 7px ',
                                                        }}
                                                    >
                                                        삭제됨
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        style={{
                                                            fontFamily: 'malgun gothic',
                                                            margin: '0',
                                                            padding: '3px 7px ',
                                                        }}
                                                        onClick={() => {
                                                            deleteNotice(notice, currentPage);
                                                        }}
                                                    >
                                                        삭제하기
                                                    </button>
                                                )}
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <div aria-label="Page navigation example" style={{ marginTop: '10px' }}>
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <button
                                    className="page-link pagination_btn"
                                    aria-label="Previous"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                >
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            {isLoading ? (
                                <div></div>
                            ) : (
                                Array.from({ length: totalPages }, (_, i) => (
                                    <li className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} key={i}>
                                        <button
                                            className="page-link pagination_btn"
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                ))
                            )}
                            <li className="page-item">
                                <button
                                    className="page-link "
                                    aria-label="Next"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminNoticeList;
