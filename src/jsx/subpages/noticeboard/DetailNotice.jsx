import React, { useEffect, useState } from 'react';
import { useValidationItem } from '../../../js/api/VlidationItem';
import '../../../css/subpage/detailnotice.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailNotice = () => {
    const [noticeContent, setNoticeContent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { noticeId } = useParams();

    const [indexZeroFileNameArray, setIndexZeroFileNameArray] = useState([]);
    const [indexOneFileNameArray, setIndexOneFileNameArray] = useState([]);

    const [indexZeroFilePathArray, setIndexZeroFilePathArray] = useState([]);
    const [indexOneFilePathArray, setIndexOneFilePathArray] = useState([]);

    const [indexZeroFileList, setIndexZeroFileList] = useState([]);
    const [indexOneFileList, setIndexOneFileList] = useState([]);

    const validationUserNotice = useValidationItem();

    useEffect(() => {
        const getNoticeDetail = async () => {
            try {
                setIsLoading(true);
                const detailResponse = await validationUserNotice('get', '/notice/detail/' + noticeId, null);
                console.log(detailResponse);
                setNoticeContent(detailResponse.data);
                let zeroFileName = null;
                let ZeroFileNameArray = null;
                let oneFileName = null;
                let OneFileNameArray = null;

                let zeroFilePath = null;
                let ZeroFilePathArray = null;
                let oneFilePath = null;
                let OneFilePathArray = null;

                if (detailResponse.data.data2 == undefined) {
                    zeroFileName = detailResponse?.data?.data1[0].file_name;
                    ZeroFileNameArray = zeroFileName ? zeroFileName.split(',') : null;
                    oneFileName = detailResponse?.data?.data1[1].file_name;
                    OneFileNameArray = oneFileName ? oneFileName.split(',') : null;

                    zeroFilePath = detailResponse?.data?.data1[0].attach_path;
                    ZeroFilePathArray = zeroFilePath ? zeroFilePath.split(',') : null;
                    oneFilePath = detailResponse?.data?.data1[1].attach_path;
                    OneFilePathArray = oneFilePath ? oneFilePath.split(',') : null;
                } else if (detailResponse.data.data2 != undefined) {
                    zeroFileName = detailResponse?.data?.data1?.file_name;
                    ZeroFileNameArray = zeroFileName ? zeroFileName.split(',') : null;
                    oneFileName = detailResponse?.data?.data2[0].file_name;
                    OneFileNameArray = oneFileName ? oneFileName.split(',') : null;

                    zeroFilePath = detailResponse?.data?.data1?.attach_path;
                    ZeroFilePathArray = zeroFilePath ? zeroFilePath.split(',') : null;
                    oneFilePath = detailResponse?.data?.data2[0].attach_path;
                    OneFilePathArray = oneFilePath ? oneFilePath.split(',') : null;
                }

                //     setIndexZeroFilePathArray(ZeroFilePathArray);
                //     setIndexOneFilePathArray(OneFilePathArray);

                //     setIndexZeroFileNameArray(ZeroFileNameArray);
                //     setIndexOneFileNameArray(OneFileNameArray);
                // } catch (error) {
                //     console.error('Error fetching detailNotice:', error);
                // } finally {
                //     setIsLoading(false);
                // }
                // 파일 이름과 경로를 함께 저장
                const ZeroFileList = ZeroFileNameArray?.map((name, index) => ({
                    name,
                    path: ZeroFilePathArray[index],
                }));

                const OneFileList = OneFileNameArray?.map((name, index) => ({
                    name,
                    path: OneFilePathArray[index],
                }));

                setIndexZeroFileList(ZeroFileList);
                setIndexOneFileList(OneFileList);
            } catch (error) {
                console.error('Error fetching detailNotice:', error);
            } finally {
                setIsLoading(false);
            }
        };
        getNoticeDetail();
    }, [noticeId]);

    const fileDownLoad = async (file_path, file_name) => {
        try {
            const response = await axios.get(file_path, { responseType: 'arraybuffer' });

            const blob = new Blob([response.data], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = file_name;
            document.body.appendChild(link);

            link.click();

            // 다운로드 후 링크 제거
            document.body.removeChild(link);
        } catch (error) {
            console.error('파일 다운로드 중 오류 발생:', error);
        }
    };

    // 예시 사용법
    const file_path = 'https://s3.ap-northeast-2.amazonaws.com/agijagi-2023.10.31/f6f7d453d1b24006ab7e296d3e534a13'; // S3 버킷 및 폴더 경로
    const file_name = 'block.png'; // 다운로드할 파일명

    fileDownLoad(file_path, file_name);

    return (
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
                (noticeContent.data2 == undefined ? (
                    <>
                        <div className="detail_notice_content_wrap">
                            <div className="detail_notice_content_box">
                                <div className="notice_info_wrap">
                                    <div>
                                        <span>No.</span>
                                        <span>{noticeContent.data1[0].no}</span>
                                    </div>
                                    <div>
                                        <span>작성일</span>
                                        <span>{noticeContent.data1[0].reg_date.substring(0, 10)}</span>
                                        <span>|</span>
                                        <span>수정일</span>
                                        <span>{noticeContent.data1[0].mod_date.substring(0, 10)}</span>
                                        <span>|</span>
                                        <span>작성자</span>
                                        <span>{noticeContent.data1[0].admin_id}</span>
                                        <span>|</span>
                                        <span>조회수</span>
                                        <span>{noticeContent.data1[0].hit}</span>
                                    </div>
                                </div>
                                <div className="notice_detail_title">{noticeContent.data1[0].title}</div>
                                <div
                                    className="notice_detail_textarea"
                                    dangerouslySetInnerHTML={{ __html: noticeContent.data1[0].content }}
                                ></div>
                                <div className="notice_datail_files flex">
                                    <div className="flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        첨부파일
                                    </div>
                                    <div>
                                        {/* {indexOneFileNameArray ? (
                                            indexOneFileNameArray.map((file_name, index) => (
                                                <div key={index}>
                                                    <a href="">{file_name}</a>
                                                </div>
                                            ))
                                        ) : (
                                            <div>첨부파일이 없습니다.</div>
                                        )} */}
                                        {indexOneFileList && (
                                            <div>
                                                {/* <p>Index 1 파일 목록:</p> */}
                                                {indexOneFileList.map((file, index) => (
                                                    <div key={index}>
                                                        <a
                                                            onClick={() => fileDownLoad(file?.path, file?.name)}
                                                            href={`path/to/files/${file.path}`}
                                                            download
                                                        >
                                                            {file.name}
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <img className="detail_notice_pin" src="/test_imgs/png/pin.png" />
                        </div>
                        <div className="flex" style={{ justifyContent: 'flex-end' }}>
                            <div className="d-md-flex justify-content-md-end">
                                <Link to="/notice/list">
                                    <button type="button" className="btn btn-light ">
                                        목록보기
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="detail_notice_content_wrap">
                            <div className="detail_notice_content_box">
                                <div className="notice_info_wrap">
                                    <div>
                                        <span>No.</span>
                                        <span>{noticeContent.data2[0].no}</span>
                                    </div>
                                    <div>
                                        <span>작성일</span>
                                        <span>{noticeContent.data2[0].reg_date.substring(0, 10)}</span>
                                        <span>|</span>
                                        <span>수정일</span>
                                        <span>{noticeContent.data2[0].mod_date.substring(0, 10)}</span>
                                        <span>|</span>
                                        <span>작성자</span>
                                        <span>{noticeContent.data2[0].admin_id}</span>
                                        <span>|</span>
                                        <span>조회수</span>
                                        <span>{noticeContent.data2[0].hit}</span>
                                    </div>
                                </div>
                                <div className="notice_detail_title">{noticeContent.data2[0].title}</div>
                                <div
                                    className="notice_detail_textarea"
                                    dangerouslySetInnerHTML={{ __html: noticeContent.data2[0].content }}
                                ></div>
                                <div className="notice_datail_files flex">
                                    <div className="flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        첨부파일
                                    </div>
                                    <div>
                                        {/* {indexOneFileNameArray ? (
                                            indexOneFileNameArray.map((file_name, index) => (
                                                <div key={index}>
                                                    <a href="">{file_name}</a>
                                                </div>
                                            ))
                                        ) : (
                                            <div>첨부파일이 없습니다.</div>
                                        )} */}
                                        {indexOneFileList && (
                                            <div>
                                                {/* <p>Index 1 파일 목록:</p> */}
                                                {indexOneFileList.map((file, index) => (
                                                    <div key={index}>
                                                        <a href={`path/to/files/${file.path}`} download>
                                                            {file.name}
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <img className="detail_notice_pin" src="/test_imgs/png/pin.png" />
                        </div>
                        <div className="flex" style={{ justifyContent: 'flex-end' }}>
                            <div className="d-md-flex justify-content-md-end">
                                <Link to="/notice/list">
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
                                    {noticeContent.data2 != undefined && noticeContent.data2[1] == undefined ? (
                                        <a>다음 게시물이 없습니다.</a>
                                    ) : noticeContent.data2 != undefined ? (
                                        <Link to={`/notice/detail_notice/${noticeContent.data2[1].no}`}>
                                            {noticeContent.data2[1].title}
                                        </Link>
                                    ) : (
                                        <Link to={`/notice/detail_notice/${noticeContent.data1[1].no}`}>
                                            {noticeContent.data1[1].title}
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="flex">
                                {noticeContent.data2 != undefined && noticeContent.data2[1] == undefined ? (
                                    <div></div>
                                ) : noticeContent.data2 != undefined ? (
                                    <>
                                        <div>{noticeContent.data2[1].admin_id}</div>
                                        <div>|</div>
                                        <div>{noticeContent.data2[1].reg_date.substring(0, 10)}</div>
                                    </>
                                ) : (
                                    <>
                                        <div>{noticeContent.data1[1].admin_id}</div>
                                        <div>|</div>
                                        <div>{noticeContent.data1[1].reg_date.substring(0, 10)}</div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className=" prev_notice_box flex" style={{ justifyContent: 'space-between' }}>
                            <div className="flex">
                                <div className="prev_next_notice_box_head">이전 글</div>
                                <div>
                                    {noticeContent.data2 != undefined ? (
                                        <Link to={`/notice/detail_notice/${noticeContent.data1.no}`}>
                                            {noticeContent.data1.title}
                                        </Link>
                                    ) : (
                                        <a>이전 게시물이 없습니다.</a>
                                    )}
                                </div>
                            </div>
                            <div className="flex">
                                {noticeContent.data2 != undefined ? (
                                    <>
                                        <div>{noticeContent.data1.admin_id}</div>
                                        <div>|</div>
                                        <div>{noticeContent.data1.reg_date.substring(0, 10)}</div>
                                    </>
                                ) : (
                                    <div></div>
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
