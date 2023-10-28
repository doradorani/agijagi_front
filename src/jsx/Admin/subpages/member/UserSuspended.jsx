import React from 'react';
import '../../../../css/admin/member/admin_authorization.css';
import AdminSidbar from '../../AdminSidebar';

const AdminAuthorization = ({ setSelectedSideMenu }) => {
    return (
        <div className="flex">
            <AdminSidbar selectedMenu={1} setSelectedSideMenu={setSelectedSideMenu} />
            <div className="admin_authorization_wrap">
                <div className="admin_authorization_second_wrap">
                    <table className="admin_authorization table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>아이디</th>
                                <th>이메일</th>
                                <th>핸드폰 번호</th>
                                <th>가입일자</th>
                                <th>수정일자</th>
                                <th>승인 여부</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>김장훈</td>
                                <td>jandebug</td>
                                <td>jandebug@gmail.com</td>
                                <td>010-1115-7894</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                                <td>승인</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>김장훈</td>
                                <td>jandebug</td>
                                <td>jandebug@gmail.com</td>
                                <td>010-1115-7894</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                                <td>승인</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>김장훈</td>
                                <td>jandebug</td>
                                <td>jandebug@gmail.com</td>
                                <td>010-1115-7894</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                                <td>승인 완료</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>김장훈</td>
                                <td>jandebug</td>
                                <td>jandebug@gmail.com</td>
                                <td>010-1115-7894</td>
                                <td>2023-10-27</td>
                                <td>2023-10-28</td>
                                <td>승인 완료</td>
                            </tr>
                        </tbody>
                    </table>
                    <div aria-label="Page navigation example">
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
        </div>
    );
};

export default AdminAuthorization;
