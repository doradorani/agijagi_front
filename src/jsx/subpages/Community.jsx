import React from "react";
import '../../css/subpage/community.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Post from "./community/Post";
import SideMenu from "./SideMenu";

const Community = () => {
    return (
        <div className="community_wrap">
            <div>
                <img className="community_main_img" src="/test_imgs/community_imgs/community_main.jpg"/>
            </div>
            <div className="community_flex">
                <SideMenu/>
                <div>
                    <div>전체</div>
                    <Post/>
                    <Post/>
                    <Post/>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        새 글 작성하기
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">새 게시물 작성하기</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body mx-auto">
                                <img src="/test_imgs/png/picture.png" class=""/>
                                <div>사진과 동영상을 여기에 끌어다 놓으세요</div>
                                <button type="button" class="btn btn-primary">컴퓨터에서 선택</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">이전</button>
                                <button type="button" class="btn btn-primary">다음</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg"/>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Community;