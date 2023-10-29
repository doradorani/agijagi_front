import React from 'react';
import '../../../../css/admin/community/postreport.css';
import AdminSidbar from '../../AdminSidebar';

const PostReport = ({ setSelectedSideMenu }) => {
    return (
        <div className="flex">
            <div className="admin_post_report_wrap">
                <div className="admin_post_report_second_wrap">
                    <table className="post_report table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>게시물 번호</th>
                                <th>댓글 번호</th>
                                <th>댓글 내용</th>
                                <th>댓글 신고 사유</th>
                                <th>게시자 닉네임</th>
                                <th>게시자 이메일</th>
                                <th colSpan="2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10</td>
                                <td>95</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td>게시글 삭제</td>
                                <td>신고 기각</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>85</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td>게시글 삭제</td>
                                <td>신고 기각</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>75</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td colSpan={2}>처리 완료</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>66</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td>게시글 삭제</td>
                                <td>신고 기각</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>57</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td>게시글 삭제</td>
                                <td>신고 기각</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>48</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td colSpan={2}>처리 완료</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>39</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td>게시글 삭제</td>
                                <td>신고 기각</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>30</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td>게시글 삭제</td>
                                <td>신고 기각</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>21</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td>게시글 삭제</td>
                                <td>신고 기각</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>12</td>
                                <td>집가고싶다</td>
                                <td>집무새</td>
                                <td>감동란</td>
                                <td>wannagohome@gmail.com</td>
                                <td>게시글 삭제</td>
                                <td>신고 기각</td>
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

export default PostReport;
