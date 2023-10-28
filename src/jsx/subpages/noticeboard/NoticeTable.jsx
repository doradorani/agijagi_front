import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/subpage/noticetable.css';

const NoticeTable = ({ setSelectedNotice }) => {
    return (
        <div style={{ width: '800px' }}>
            <table className="table table-striped table-hover " style={{ fontSize: '0.9em' }}>
                <thead>
                    <tr style={{ textAlign: 'center' }}>
                        {/* <th scope="col">No.</th> */}
                        <th scope="col" style={{ width: '50px' }}>
                            No.
                        </th>
                        <th scope="col" style={{ width: '280px' }}>
                            제목
                        </th>
                        <th scope="col" style={{ width: '65px' }}>
                            작성자
                        </th>
                        <th scope="col" style={{ width: '80px' }}>
                            작성일
                        </th>
                        <th scope="col" style={{ width: '65px' }}>
                            첨부파일
                        </th>
                        <th scope="col" style={{ width: '50px' }}>
                            조회수
                        </th>
                        {/* <th scope="col">작성자</th>
                        <th scope="col">작성일</th>
                        <th scope="col">첨부파일</th>
                        <th scope="col">조회수</th> */}
                    </tr>
                </thead>
                <tbody style={{ fontSize: '0.88em' }}>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">1</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none" onClick={() => setSelectedNotice(1)}>
                                제목1111111111
                            </a>
                        </td>
                        <td>관리자1</td>
                        <td>2023.10.19</td>
                        <td>0</td>
                        <td>10</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">2</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none" onClick={() => setSelectedNotice(1)}>
                                제목1111111111
                            </a>
                        </td>
                        <td>관리자2</td>
                        <td>2023.10.19</td>
                        <td>4</td>
                        <td>32</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">3</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none">제목1111111111</a>
                        </td>
                        <td>관리자3</td>
                        <td>2023.10.19</td>
                        <td>1</td>
                        <td>5</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">1</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none">제목1111111111</a>
                        </td>
                        <td>관리자1</td>
                        <td>2023.10.19</td>
                        <td>0</td>
                        <td>10</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">2</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none">제목1111111111</a>
                        </td>
                        <td>관리자2</td>
                        <td>2023.10.19</td>
                        <td>4</td>
                        <td>32</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">3</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none">제목1111111111</a>
                        </td>
                        <td>관리자3</td>
                        <td>2023.10.19</td>
                        <td>1</td>
                        <td>5</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">1</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none">제목1111111111</a>
                        </td>
                        <td>관리자1</td>
                        <td>2023.10.19</td>
                        <td>0</td>
                        <td>10</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">2</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none">제목1111111111</a>
                        </td>
                        <td>관리자2</td>
                        <td>2023.10.19</td>
                        <td>4</td>
                        <td>32</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">3</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none">제목1111111111</a>
                        </td>
                        <td>관리자3</td>
                        <td>2023.10.19</td>
                        <td>1</td>
                        <td>5</td>
                    </tr>
                    <tr style={{ textAlign: 'center' }}>
                        <th scope="row">1</th>
                        <td style={{ textAlign: 'left' }}>
                            <a href="#none">제목1111111111</a>
                        </td>
                        <td>관리자1</td>
                        <td>2023.10.19</td>
                        <td>0</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>

            <nav aria-label="Page navigation example" style={{ marginRight: '70px' }}>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            4
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            5
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            6
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            7
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NoticeTable;
