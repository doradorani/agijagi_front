import React from "react";
import { Link } from "react-router-dom";
import '../../../css/subpage/post.css'

const Post = () => {
    return (
        <div className="post_wrap">
        <div className="flex_for_profile">
            <div className="flex">
                <div className="profile_img">
                    <img src="/test_imgs/logo/full_logo.jpg"/>
                </div>
                <div className="profile_info">
                    <div className="profile_name">아기자기</div>
                    <div className="update_date">0일 전</div>
                </div>
            </div>
            <Link>
                <div>. . .</div>
            </Link>
        </div>
        <div className="text_contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ipsam, quibusdam incidunt, eligendi voluptates iusto suscipit autem sint nisi error numquam corrupti! Consequuntur minus consectetur vero autem nesciunt, id deleniti?</div>
        <Link to='/detail'><div className="for_detail">자세히 보기</div></Link>
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
    )
}

export default Post;