import React from 'react';
import Post from './Post';
import LoadingPostCard from './LoadingPostCard';

const AllPost = () => {
    return (
        <>
            <div className="post_section">
                <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                    <img src="/test_imgs/png/아기여워.png" style={{ width: '55px', marginRight: '15px' }} />
                    <div style={{ fontSize: '40px', marginRight: '15px' }}>아 ~ 기여워</div>
                    <div
                        style={{
                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'flex-end',
                            marginBottom: '10px',
                        }}
                    >
                        &#62;&nbsp;전체 게시글
                    </div>
                </div>
                <Post
                // setSelectedPost={setSelectedPost} previewImage={previewImage} setPreviewImage={setPreviewImage}
                />
                {/* <Post setSelectedPost={setSelectedPost} previewImage={previewImage} setPreviewImage={setPreviewImage} />
                <Post setSelectedPost={setSelectedPost} previewImage={previewImage} setPreviewImage={setPreviewImage} /> */}
                <LoadingPostCard />
            </div>
            <div className="tag_for_sticky">
                <div>
                    <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                    <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                </div>
            </div>
        </>
    );
};

export default AllPost;
