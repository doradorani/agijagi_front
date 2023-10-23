import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/subpage/noticetable.css'


const NoticeTable = () => {
    return (
        <div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일</th>
                        <th scope="col">첨부파일</th>
                        <th scope="col">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>제목1111111111</td>
                        <td>관리자1</td>
                        <td>2023-10-19</td>
                        <td>0</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>제목2222222222222</td>
                        <td>관리자2</td>
                        <td>2023-10-20</td>
                        <td>4</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>제목3333333333333333</td>
                        <td>관리자3</td>
                        <td>2023-10-22</td>
                        <td>1</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                    <li class="page-item"><a class="page-link" href="#">7</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NoticeTable;