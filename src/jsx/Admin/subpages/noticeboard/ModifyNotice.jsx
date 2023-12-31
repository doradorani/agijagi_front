import React, { useEffect, useRef, useState } from 'react';
import '../../../../css/subpage/detailnotice.css';
import QuillEditor from './QuillEditor';
import { useValidationAdminItem } from '../../../../js/api/admin/ValidationAdminItem';
import noticeIndex_config from '../../../../js/api/config/noticeIndex_config';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ModifyNotice = () => {
    const [notice, setNotice] = useState();
    const [noticeNo, setNoticeNo] = useState();
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const [editorContent, setEditorContent] = useState();
    const [uploadFile, setUploadFile] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [updatedFileCnt, setUpdatedFileCnt] = useState(0);
    // const [uploadedFileNames, setUploadedFileNames] = useState([]);

    const maxFileCount = 5;

    let data;

    const ValidationAdmin = useValidationAdminItem();
    const nav = useNavigate();

    const [fileNameArray, setFileNameArray] = useState([]);
    const [filePathArray, setFilePathArray] = useState([]);

    useEffect(() => {
        const getDetailNotice = async () => {
            try {
                setIsLoading(true);
                const noticeIndex = noticeIndex_config.noticeIndexState;
                const modifyRequest = 1;

                const detailResponse = await ValidationAdmin(
                    'get',
                    '/notice/noticeDetail/' + noticeIndex + '/' + modifyRequest,
                    null
                );
                setNotice(detailResponse?.data[0]);

                setNoticeNo(detailResponse?.data[0]?.no);
                setNoticeTitle(detailResponse?.data[0]?.title);
                setNoticeContent(detailResponse?.data[0]?.content);
                const fileNames = detailResponse?.data[0]?.file_name;
                const fileNameArray = fileNames ? fileNames?.split(',') : null;
                setFileNameArray(fileNameArray);
                const filePaths = detailResponse?.data[0]?.attach_path;
                const filePathArray = filePaths ? filePaths?.split(',') : null;
                setFilePathArray(filePathArray);
                setEditorContent(detailResponse?.data[0]?.content);
            } catch (error) {
                console.error('Error fetching detailNotice:', error);
            } finally {
                setIsLoading(false);
            }
        };
        getDetailNotice();
    }, []);

    const addNoticeTitle = (e) => {
        const title = e.target.value;
        setNoticeTitle(title);
    };

    const onUploadFiles = (e) => {
        if (e.target.files) {
            if (fileNameArray.length + e.target.files.length > maxFileCount) {
                Swal.fire({
                    icon: 'warning',
                    title: `사진은 최대 ${maxFileCount}개까지\n첨부할 수 있습니다.`,
                });
            } else {
                const newFiles = [...uploadFile, ...e.target.files];
                setUploadFile(newFiles);

                // 파일 배열에서 파일 이름 추출
                const newFileNames = Array.from(e.target.files, (file) => file.name);

                // 새로운 파일 이름으로 상태 업데이트
                setFileNameArray((prevFileNames) => [...prevFileNames, ...newFileNames]);
                setUpdatedFileCnt(updatedFileCnt + 1);
            }
        }
    };

    const removeUploadFiles = (index) => {
        console.log('clicked!!');
        const newFiles = fileNameArray;
        const newFilePaths = filePathArray;
        const removedFileName = newFiles[index]; // 삭제되는 파일의 이름 가져오기
        const removedFilePath = newFilePaths[index]; // 삭제되는 파일의 경로 가져오기
        newFiles.splice(index, 1);
        newFilePaths.splice(index, 1);

        // fileNameArray 해당 파일명 삭제
        setFileNameArray((prevArray) => prevArray.filter((fileName) => fileName !== removedFileName));
        setFilePathArray((prevArray) => prevArray.filter((filePath) => filePath !== removedFilePath));
    };

    const modifyNotice = async () => {
        let formData = new FormData();
        try {
            setIsLoading(true);
            if (noticeTitle === '') {
                Swal.fire({
                    icon: 'warning',
                    title: '제목은 필수입력 사항입니다.',
                    text: '제목을 입력해주시기 바랍니다.',
                });
                document.getElementById('writeNoticeTitle').focus();
                window.scrollTo({
                    top: document.getElementById('writeNoticeTitle').offsetTop,
                    behavior: 'smooth',
                });
            } else if (editorContent === undefined) {
                Swal.fire({
                    icon: 'warning',
                    title: '공지내용은 필수입력 사항입니다.',
                    text: '내용을 입력해주시기 바랍니다.',
                });
            } else {
                data = {
                    no: noticeNo,
                    title: noticeTitle,
                    content: editorContent,
                    fileNames: fileNameArray,
                    filePaths: filePathArray,
                };
                // upload파일 formData에 담기
                if (uploadFile != null) {
                    for (let i = 0; i < uploadFile?.length; i++) {
                        formData.append('files', uploadFile[i]);
                    }
                }
                // data객체 Blob객체 생성 후 formData에 담기
                formData.append(
                    'data',
                    new Blob([JSON.stringify(data)], {
                        type: 'application/json',
                    })
                );

                const modifyResponse = await ValidationAdmin(
                    'post',
                    '/notice/modifyNotice/' + updatedFileCnt,
                    formData
                );

                if (modifyResponse?.code === 200 && modifyResponse?.data === 1) {
                    Swal.fire({
                        icon: 'success',
                        title: '공지사항이 정상적으로 수정되었습니다.',
                        text: '',
                    });
                    // 공지사항 정상 등록 후 게시글 detail페이지로 이동하기 위한 notice.no값 get
                    nav('/admin/admin_notice_detail');
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="detail_notice_wrap nn_font">
                <div className="admin_page_menu_title_wrap" style={{ marginLeft: '20px', marginBottom: '20px' }}>
                    <img src="/test_imgs/svg/pencil.svg" />
                    <div className="admin_page_menu_title yg_font ">공지사항</div>
                    <div className="yg_font admin_page_menu_sub_title"> &#62; 수정하기</div>
                </div>

                {isLoading ? (
                    <div>Loading...</div>
                ) : notice ? (
                    <div className="detail_notice_content_wrap">
                        <div className="detail_notice_content_box">
                            <div className="notice_info_wrap">
                                <div>
                                    <span>No.</span>
                                    <span>{notice?.no}</span>
                                </div>
                                <div>
                                    <span>작성일</span>
                                    <span>{notice?.reg_date?.substring(0, 10)}</span>
                                    <span>|</span>
                                    <span>수정일</span>
                                    <span>{notice?.mod_date?.substring(0, 10)}</span>
                                    <span>|</span>
                                    <span>작성자</span>
                                    <span>{notice?.admin_id}</span>
                                    <span>|</span>
                                    <span>조회수</span>
                                    <span>{notice?.hit}</span>
                                </div>
                            </div>
                            <div className="input-group mb-3 write_notice_title" style={{ paddingTop: '5px' }}>
                                <span
                                    className="input-group-text"
                                    id="inputGroup-sizing-default"
                                    style={{ fontWeight: 'bold' }}
                                >
                                    제목
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="제목을 입력하세요."
                                    onChange={addNoticeTitle}
                                    defaultValue={notice?.title || ''}
                                />
                            </div>
                            <div className="write_notice_content">
                                <div className="editor-container">
                                    <QuillEditor
                                        noticeContent={noticeContent}
                                        setNoticeContent={setNoticeContent}
                                        editorContent={editorContent}
                                        setEditorContent={setEditorContent}
                                        value={noticeContent}
                                    />
                                </div>
                            </div>
                            <div className="notice_datail_files flex">
                                <div className="flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    첨부파일
                                </div>
                                <input
                                    id="noticeAttachedFile"
                                    type="file"
                                    accept="application/vnd.ms-excel, 
                                        application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, 
                                        text/plain, 
                                        image/*, 
                                        text/html, 
                                        audio/*, 
                                        .pdf"
                                    name="file"
                                    style={{ display: 'none' }}
                                    onChange={onUploadFiles}
                                    multiple
                                />
                                <div
                                    className="flex"
                                    style={{
                                        width: '580px',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div style={{ margin: '10px' }}>
                                        {fileNameArray ? (
                                            fileNameArray.map((file_name, index) => (
                                                <div key={index}>
                                                    <a href="">{file_name}</a>
                                                    <button
                                                        style={{
                                                            backgroundColor: '#fff',
                                                            border: 'none',
                                                            color: '#ff0000',
                                                            fontSize: '1.1em',
                                                        }}
                                                        onClick={() => removeUploadFiles(index)}
                                                    >
                                                        &nbsp;&nbsp;&#215;
                                                    </button>
                                                </div>
                                            ))
                                        ) : (
                                            <div>첨부파일이 없습니다.</div>
                                        )}
                                    </div>
                                    <label
                                        htmlFor="noticeAttachedFile"
                                        type="button"
                                        className="btn btn-light "
                                        style={{
                                            marginTop: '6px',
                                            marginRight: '10px',
                                            fontFamily: 'NanumSquareRound',
                                            width: '100px ',
                                            height: '35px',
                                        }}
                                    >
                                        파일 선택
                                    </label>
                                </div>
                            </div>
                        </div>
                        <img className="detail_notice_pin" src="/test_imgs/png/pin.png" />
                    </div>
                ) : (
                    <>데이터 로드에 실패했습니다. 다시 시도해 주시기 바랍니다.</>
                )}

                <div className="d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-light mr-3" onClick={() => modifyNotice()}>
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
    );
};

export default ModifyNotice;
