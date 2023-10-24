import React from "react";
import { Link } from "react-router-dom";
import '../../../css/subpage/post.css'

const DetailPost = () => {
    return (
        <div className="post_wrap">
        <div className="flex_for_profile">
            <div className="flex">
                <div className="profile_img">
                    <img src="/test_imgs/logo/full_logo.jpg"/>
                </div>
                <div className="profile_info">
                    <div className="profile_name">hee_hee</div>
                    <div className="update_date">1일 전</div>
                </div>
            </div>
            <Link>
                <div>. . .</div>
            </Link>
        </div>
        <div className="text_contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ea similique! Iusto dignissimos consectetur quia totam. Doloribus ratione consectetur magni distinctio in, officiis nesciunt, sunt recusandae cumque maxime deleniti optio.</div>
        <div className="post_main_img">
            <img src="/test_imgs/diary_imgs/diary2.jpg"/>
        </div>
        <div className="hashtag_btns flex">
            <div># Baby</div>
            <div># Memory</div>
            <div># Diary</div>
        </div>
        <div className="emotion_btns flex">
            <div className="flex">
                <a className="flex">
                    <div>
                        <img className="emotion_btn" src="/test_imgs/png/heart.png"/>
                    </div>
                    <div className="emotion_btn_cnt">10</div>
                </a>
            </div>
            <div className="flex">
                <a className="flex">
                    <div>
                        <img className="emotion_btn"  src="/test_imgs/png/like.png"/>
                    </div>
                    <div className="emotion_btn_cnt">12</div>
                </a>
            </div>                    
            <div className="flex">
                <a className="flex">
                    <div>
                        <img className="emotion_btn"  src="/test_imgs/png/sad.png"/>
                    </div>
                    <div className="emotion_btn_cnt">0</div>
                </a>
            </div>
        </div>
        <Link to='/detail'>
            <div className="reply_cnt">
                댓글 0개
            </div>
        </Link>
    </div>
    );
};

export default DetailPost;