import React, { useEffect, useState } from 'react';
import NoticeTable from '../../../subpages/noticeboard/NoticeTable';
import AdminSidbar from '../../AdminSidebar';
import axios from 'axios';
import token_config from '../../../../js/api/config/token_config';
import { useValidationAdmin } from '../../../../js/api/admin/ValidationAdminApi';
import { useDispatch } from 'react-redux';
import { adminStateAction } from '../../../../js/api/redux_store/slice/adminLoginSlice';

const AdminNoticeList = ({ setSelectedSideMenu }) => {
    const [noticeTable, setNoticeTable] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    // 관리자 로그인 상태 검증 관련 state
    const server = token_config.server;
    const adminLoginDispatch = useDispatch();
    const validationAdmin = useValidationAdmin('get', '/notice/noticeTable/' + currentPage + '/' + perPage, null);

    useEffect(() => {
        // 서버에서 공지사항 데이터 가져오는 함수
        const getNoticeTable = async () => {
            try {
                setIsLoading(true);
                // 관리자 로그인 상태 검증
                const validateAdminResponse = await validationAdmin();
                // const response = await axios.get(`${server}/notice/noticeTable/${currentPage}/${perPage}`);
                // 서버에서 가져온 공지사항 데이터 set
                setNoticeTable(validateAdminResponse.data.noticeDtos);
                setTotalPages(validateAdminResponse.data.totalPages);

                console.log(validateAdminResponse.data);
                console.log(noticeTable);
                console.log(totalPages);
            } catch (error) {
                console.error('Error fetching notices:', error);
                adminLoginDispatch(adminStateAction.setState(false));
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
                                {/* <th style={{ width: '35%' }}>제목</th> */}
                                <th>제목</th>
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
                                <div>로딩중.....</div>
                            ) : (
                                (Array.isArray(noticeTable) ? noticeTable : []).map((notice) => (
                                    <tr key={notice.no}>
                                        <td>{notice.no}</td>
                                        <td style={{ textAlign: 'left' }}>
                                            <a href="#none">{notice.title}</a>
                                        </td>
                                        <td>{notice.admin_no}</td>
                                        <td>{notice.admin_no}</td>
                                        <td>{notice.hit}</td>
                                        <td>{notice.reg_date}</td>
                                        <td>{notice.mod_date}</td>
                                        <td
                                            style={{
                                                padding: '0px',
                                                paddingTop: '4px',
                                            }}
                                        >
                                            <button
                                                type="button"
                                                class="btn btn-light"
                                                style={{
                                                    fontFamily: 'malgun gothic',
                                                    margin: '0',
                                                    padding: '3px 7px ',
                                                }}
                                            >
                                                수정하기
                                            </button>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <a>{notice.status}</a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <div aria-label="Page navigation example" style={{ marginTop: '10px' }}>
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    4
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    5
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    6
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    7
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminNoticeList;
