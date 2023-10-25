import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../css/subpage/community.css'
import Post from "./community/Post";
import SideMenu from "./SideMenu";
import LoadingPostCard from "./community/LoadingPostCard";

const Community = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileInfo, setFileInfo] = useState("");
    const [previewImage, setPreviewImage] = useState(null);
    const [byteCount, setByteCount] = useState(0);

    const handleFileChange = (e) => {
        const maxFiles = 5;
        const maxFileSize = 25600000;
        const files = e.target.files;
        const newSelectedFiles = [];
        let fileInfoText = "";

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            // 사진 첨부 최대 개수 설정
            if (newSelectedFiles.length >= maxFiles) {
                alert(`사진은 최대 ${maxFiles}개까지 첨부할 수 있습니다.`);
                e.target.value = "";
                setSelectedFiles([]);
                setFileInfo("");
                setPreviewImage(null);
                return;
            }
            // 사진 첨부 최대 용량 설정
            if (file.size > maxFileSize) {
                alert(`파일 크기는 ${formatBytes(maxFileSize)}를 초과할 수 없습니다.`);
                e.target.value = "";
                setSelectedFiles([]);
                setFileInfo("");
                setPreviewImage(null);
                return;
            }

            newSelectedFiles.push(file);
            const fileName = file.name;
            const fileSize = formatBytes(file.size);

            // 미리보기 이미지 설정
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }

        setSelectedFiles(newSelectedFiles);
        setFileInfo(fileInfoText);
    };

    const handleTextChange = (e) => {
        const text = e.target.value;
        // 함수 호출하여 바이트 수 계산
        fn_checkByte(text);
    };

    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };

    const deleteFiles = () => {
        setSelectedFiles([]);
        document.getElementById("fileInput").value = "";
        setFileInfo("");
        setPreviewImage(null);
    };

    // 바이트 수 체크 함수
    const fn_checkByte = (text) => {
        const maxByte = 2200;
        let totalByte = 0;
        for (let i = 0; i < text.length; i++) {
            const each_char = text.charAt(i);
            const uni_char = escape(each_char);
            if (uni_char.length > 4) {
                totalByte += 2;
            } else {
                totalByte += 1;
            }
        }
        // 바이트 수 상태 업데이트
        setByteCount(totalByte);
    };

    return (
        <div className="community_wrap">
            <div>
                <img className="community_main_img" src="/test_imgs/community_imgs/community_main.jpg"/>
            </div>
            <div className="community_flex">
                <SideMenu/>
                <div className="post_section">
                    <div>전체</div>
                    <Post/>
                    <Post/>
                    <Post/>
                    <LoadingPostCard/>
                    <div class="modal fade" id="modal_for_post_img" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">새 게시물 작성하기</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body mx-auto modap_img_contents">
                                {previewImage 
                                    ? (<img className="uploaded_preview_img" src={previewImage} alt="Selected" width="450px" />)
                                    : ( 
                                        <div>
                                            <img src="/test_imgs/png/picture.png" class="" width='225px'/>
                                                <div>사진을 여기에 끌어다 놓으세요</div>
                                        </div>
                                    )
                                }
                            </div>
                            {/* 첨부파일 관련 태그 START */}
                            <div className="for_upload_file">
                                <input
                                    type="file"
                                    name="files"
                                    id="fileInput"
                                    multiple
                                    style={{ display: "none" }}
                                    accept="image/*,
                                            video/*"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <label htmlFor="fileInput" className="upload_img_btn">
                                    <figure>
                                        <img src="/test_imgs/png/upload.png" width={'30px'}/>
                                        <p>사진 선택</p>
                                    </figure>
                                </label>
                                <input className="deleteBtn" type="button" value="삭제" onClick={deleteFiles} />
                            {/* 첨부파일 관련 태그 END */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">이전</button>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_for_post_text">
                                    다음
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="modal_for_post_text" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-lg-text modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">새 게시물 작성하기</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="flex_for_profile_new_post">
                                    <div className="flex_new_post">
                                        <div className="profile_img_new_post">
                                            <img src="/test_imgs/logo/full_logo.jpg"/>
                                        </div>
                                        <div className="profile_info_new_post">
                                            <div className="profile_name_new_post">hee_hee</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-body mx-auto">
                                    <textarea 
                                        className="upload_text" 
                                        placeholder="게시물의 내용을 작성해주세요."
                                        onChange={handleTextChange}
                                    ></textarea>
                                </div>
                                <sup className="byte_for_upload">(<span id="nowByte">{byteCount}</span>/2200bytes)</sup>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_for_post_img">
                                        이전
                                    </button>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal_for_post_text">
                                        공유하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tag_for_sticky">
                    <div>
                        <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg"/>
                        <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg"/>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Community;