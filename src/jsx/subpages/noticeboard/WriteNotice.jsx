import React, { useEffect, useRef, useState } from 'react';
import '../../../css/subpage/detailnotice.css';
import QuillEditor from './QuillEditor';
import { useValidationAdmin } from '../../../js/api/admin/ValidationAdminApi';

const WriteNotice = () => {
    const [noticeTitle, setNoticeTitle] = useState('');
    const [noticeContent, setNoticeContent] = useState('');
    const [noticeAttachedFile, setNoticeAttachedFile] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const maxFileCount = 5;

    const validationAdminForRegistNotice = useValidationAdmin('post', '/registNotice', null);

    const addNoticeTitle = (e) => {
        const title = e.target.value;
        setNoticeTitle(title);

        console.log(title);
        console.log(noticeTitle);
    };

    const addAttachFileHandler = (e) => {
        const selectedFiles = e.target.files;
        const newAttachedFiles = [...noticeAttachedFile];

        for (let i = 0; i < selectedFiles.length; i++) {
            const selectedFile = selectedFiles[i];

            if (newAttachedFiles.length + 1 >= maxFileCount) {
                console.log(newAttachedFiles);
                alert('파일은 최대 5개까지 업로드 가능합니다.');
                break;
            }

            const reader = new FileReader();

            reader.onload = (event) => {
                const fileData = {
                    name: selectedFile.name,
                    dataURL: event.target.result,
                };
                newAttachedFiles.push(fileData);

                if (newAttachedFiles.length === newAttachedFiles.length + i) {
                    setNoticeAttachedFile(newAttachedFiles);
                    console.log(newAttachedFiles);
                    console.log(noticeContent);
                }
            };

            reader.readAsDataURL(selectedFile);
        }
    };

    const removeAttachedFileHandler = (index) => {
        const newFiles = [...noticeAttachedFile];
        newFiles.splice(index, 1);
        setNoticeAttachedFile(newFiles);
        console.log(newFiles);
    };

    const registNotice = async () => {
        setIsLoading(false);
        try {
            const validateResponse = await validationAdminForRegistNotice();
        } catch (error) {
            console.error('에러');
        }
    };

    return (
        <>
            <div className="detail_notice_wrap ">
                <div className="admin_page_menu_title_wrap" style={{ marginLeft: '20px', marginBottom: '20px' }}>
                    <img src="/test_imgs/svg/pencil.svg" />
                    <div className="admin_page_menu_title yg_font ">공지사항</div>
                    <div className="yg_font admin_page_menu_sub_title"> &#62; 작성하기</div>
                </div>
                <div className="detail_notice_content_wrap">
                    <div className="write_notice_content_box">
                        <div className="">
                            <div className="input-group mb-3 write_notice_title" style={{ margin: '0px' }}>
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
                                    value={noticeTitle || ''}
                                    onChange={addNoticeTitle}
                                />
                            </div>
                        </div>
                        <div className="write_notice_content">
                            <div className="editor-container">
                                <QuillEditor noticeContent={noticeContent} setNoticeContent={setNoticeContent} />
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
                                onChange={addAttachFileHandler}
                                multiple
                            />
                            <div
                                className="flex"
                                style={{ width: '580px', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <div style={{ margin: '10px' }}>
                                    {noticeAttachedFile.length > 0 ? (
                                        noticeAttachedFile.map((attachedFile, index) => (
                                            <div key={index}>
                                                {index + 1}. &nbsp;
                                                {attachedFile.name}
                                                <button
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        border: 'none',
                                                        color: '#ff0000',
                                                        fontSize: '1.1em',
                                                    }}
                                                    onClick={() => removeAttachedFileHandler(index)}
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
                <div className="d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-light " onClick={registNotice}>
                        게시하기
                    </button>
                </div>
            </div>
        </>
    );
};

export default WriteNotice;
