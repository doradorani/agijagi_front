import React, { useEffect, useState } from 'react';
import '../../../../css/admin/community/postreport.css';
import { useValidationAdminItem } from '../../../../js/api/admin/ValidationAdminItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const PostReport = ({ isSidebarCollapsed, reportIndex, setReportIndex }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(10);
    const [isLoading, setIsLoading] = useState(false);
    const [reportTable, setReportTable] = useState([]);
    const [postIndex, setPostIndex] = useState(0);

    const validationAdmin = useValidationAdminItem();

    const getPostReportTable = async () => {
        try {
            setIsLoading(true);
            // 관리자 로그인 상태 검증
            const validateAdminResponse = await validationAdmin(
                'get',
                '/report/postReportTable/' + currentPage + '/' + perPage,
                null
            );
            console.log(validateAdminResponse);
            setReportTable(validateAdminResponse?.data?.postReportDtos);
            setTotalPages(validateAdminResponse?.data?.totalPages);
        } catch (error) {
            console.error('Error fetching notices:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getPostReportTable();
    }, [currentPage, perPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const deleteReport = (postIndex, reportIndex) => {
        Swal.fire({
            icon: 'warning',
            title: '정말 삭제하시겠습니까?',
            text: '삭제한 게시물은 복구 및 확인이 어려울 수 있습니다.',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteReportConfirm(postIndex, reportIndex);
            }
        });
    };

    const deleteReportConfirm = async (postIndex, reportIndex) => {
        try {
            setIsLoading(true);
            // const reportIndex = reportIndex;

            const deleteResponse = await validationAdmin(
                'delete',
                '/report/deletePostReport/' + postIndex + '/' + reportIndex,
                null
            );
            setReportTable(null);

            console.log(deleteResponse);

            if (deleteResponse?.code === 200 && deleteResponse?.data === 1) {
                Swal.fire({
                    icon: 'success',
                    title: '정상적으로 삭제되었습니다.',
                    confirmButtonText: '확인',
                });
                getPostReportTable();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: '게시물 삭제에 실패하였습니다.',
                    text: '다시 시도해주시기 바랍니다.',
                    confirmButtonText: '확인',
                });
            }
        } catch (error) {
            console.error('Error fetching deleteNotice:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const targetRow = reportTable?.find((item) => item?.no === reportIndex);

    return (
        <>
            <div className="admin_authorization_wrap">
                <div className="admin_page_menu_title_wrap">
                    <img src="/test_imgs/svg/report.svg" />
                    <div className="admin_page_menu_title yg_font ">신고 처리</div>
                    <div className="yg_font admin_page_menu_sub_title"> &#62; 신고된 게시물</div>
                </div>
                <div className="admin_authorization_second_wrap">
                    <table
                        className={`admin_authorization table table-striped table-hover nn_font ${
                            isSidebarCollapsed ? 'Collapsed' : 'NonCollapsed'
                        }`}
                        style={{ marginTop: '15px' }}
                    >
                        <thead>
                            <tr>
                                <th
                                    style={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    번호
                                </th>
                                <th
                                    style={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    게시물 번호
                                </th>
                                <th>게시물 내용</th>
                                <th>댓글 작성자 ID</th>
                                <th>신고 사유</th>
                                <th>신고자 ID</th>
                                <th>신고 일자</th>
                                <th
                                    style={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    처리 일자
                                </th>
                                <th colSpan="2">신고 처리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan={9}>
                                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                        &nbsp;&nbsp;
                                        <span role="status">Loading...</span>
                                    </td>
                                </tr>
                            ) : (
                                (Array.isArray(reportTable) ? reportTable : []).map((report) => (
                                    <tr
                                        key={report?.no}
                                        className={`${
                                            report?.post_status === '0' || report?.status === '0' ? 'disable_row' : ''
                                        }`}
                                    >
                                        <td>{report?.no}</td>
                                        <td>{report?.post_no}</td>
                                        <td
                                            style={{
                                                textAlign: 'left',
                                            }}
                                        >
                                            <Link
                                                to={`/community/detail_post/${report?.post_no}`}
                                                className="none_underline"
                                                style={{
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                }}
                                            >
                                                {report?.post_text}
                                            </Link>
                                        </td>
                                        <td
                                            style={{
                                                display: 'block',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {report?.user_mail}
                                        </td>
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
                                                data-bs-toggle="modal"
                                                data-bs-target="#modal_for_post_report"
                                                onClick={() => {
                                                    setReportIndex(report?.no);
                                                }}
                                            >
                                                신고 사유
                                            </button>
                                        </td>
                                        <td
                                            style={{
                                                display: 'block',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {report?.report_user}
                                        </td>
                                        <td>{`${report?.reg_date.substring(2, 4)}/${report?.reg_date.substring(
                                            5,
                                            7
                                        )}/${report?.reg_date.substring(8, 10)}`}</td>
                                        <td>
                                            {report?.reg_date.substring(0, 10) === report?.mod_date.substring(0, 10)
                                                ? '미처리'
                                                : report?.mod_date.substring(0, 10)}
                                        </td>
                                        <td
                                            style={{
                                                padding: '0px',
                                                paddingTop: '4px',
                                            }}
                                        >
                                            {report?.post_status === '0' ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-light "
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
                                                    className="btn btn-light "
                                                    style={{
                                                        width: '105px',
                                                        fontFamily: 'malgun gothic',
                                                        margin: '0',
                                                        padding: '3px 7px ',
                                                    }}
                                                    onClick={() => deleteReport(report?.post_no, report?.no)}
                                                >
                                                    게시물 삭제
                                                </button>
                                            )}
                                        </td>
                                        <td style={{ textAlign: 'center', padding: '0px', paddingTop: '4px' }}>
                                            <a>
                                                {report?.status === 0 ? (
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
                                                        기각됨
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
                                                        // onClick={() => {
                                                        //     deleteNotice(notice);
                                                        // }}
                                                    >
                                                        신고 기각
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
                    {/* 모달 START */}
                    <div
                        className="modal fade"
                        id="modal_for_post_report"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-lg modal-lg-text modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5 yg_font" id="exampleModalLabel">
                                        게시물 신고사유
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
                                        style={{ width: '400px' }}
                                        value={targetRow?.reason}
                                    ></textarea>
                                </div>
                                <div className="modal-footer flex" style={{ justifyContent: 'center' }}>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        이전으로
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal_for_post_detail"
                                    >
                                        게시물 삭제하기
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        // onClick={() => summitReport(postId)}
                                    >
                                        기각하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 모달 END */}
                </div>
            </div>
        </>
    );
};

export default PostReport;
