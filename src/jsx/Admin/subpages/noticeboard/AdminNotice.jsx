import React from 'react';
import NoticeTable from '../../../subpages/noticeboard/NoticeTable';
import AdminSidbar from '../../AdminSidebar';

const AdminNoticeList = ({ setSelectedSideMenu }) => {
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
                                <th>제목</th>
                                <th>작성자</th>
                                <th>첨부파일</th>
                                <th>조회수</th>
                                <th>작성일</th>
                                <th>수정일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td style={{ textAlign: 'left' }}>
                                    <a href="#none">제목1111111111</a>
                                </td>
                                <td>관리자1</td>
                                <td>2</td>
                                <td>30</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                            </tr>
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
