import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/subpage/myposts.css';

const MyPosts = () => {
    return (
        <div className="my_posts_wrap">
            <div className="my_posts_profile_wrap">
                <div className="flex_for_my_posts_profile">
                    <div className="flex">
                        <div className="my_posts_profile_img">
                            <img src="/test_imgs/logo/full_logo.jpg" />
                        </div>
                        <div className="my_post_profile_info">
                            <div className="my_posts_profile_name">hee_hee</div>
                            <div className="my_posts_cnt">게시물 7</div>
                            <div className="my_posts_profile_nickname">최혀늬</div>
                        </div>
                    </div>
                    <Link>
                        <div>
                            <img
                                src="/test_imgs/png/cogwheel.png"
                                style={{ width: '50px', height: '120px', objectFit: 'contain' }}
                                data-bs-toggle="modal"
                                data-bs-target="#modal_for_profile_setting"
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <hr className="division_line_in_posts" />
            <div className="my_posts_contents_wrap">
                <Link to="/detail">
                    <div className="my_posts_post_main_img">
                        <img src="/test_imgs/diary_imgs/diary2.jpg" />
                        <div>
                            <p className="flex" style={{ color: '#FFF', fontSize: '1.3em', fontWeight: 'bold' }}>
                                <img
                                    src="/test_imgs/png/love.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                7 &nbsp;&nbsp;
                                <img
                                    src="/test_imgs/png/chat.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                13
                            </p>
                        </div>
                        <span className="background_for_posts"></span>
                    </div>
                </Link>
                <Link to="/detail">
                    <div className="my_posts_post_main_img">
                        <img src="/test_imgs/diary_imgs/diary2.jpg" />
                        <div>
                            <p className="flex" style={{ color: '#FFF', fontSize: '1.3em', fontWeight: 'bold' }}>
                                <img
                                    src="/test_imgs/png/love.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                7 &nbsp;&nbsp;
                                <img
                                    src="/test_imgs/png/chat.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                13
                            </p>
                        </div>
                        <span className="background_for_posts"></span>
                    </div>
                </Link>
                <Link to="/detail">
                    <div className="my_posts_post_main_img">
                        <img src="/test_imgs/diary_imgs/diary2.jpg" />
                        <div>
                            <p className="flex" style={{ color: '#FFF', fontSize: '1.3em', fontWeight: 'bold' }}>
                                <img
                                    src="/test_imgs/png/love.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                7 &nbsp;&nbsp;
                                <img
                                    src="/test_imgs/png/chat.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                13
                            </p>
                        </div>
                        <span className="background_for_posts"></span>
                    </div>
                </Link>
                <Link to="/detail">
                    <div className="my_posts_post_main_img">
                        <img src="/test_imgs/diary_imgs/diary2.jpg" />
                        <div>
                            <p className="flex" style={{ color: '#FFF', fontSize: '1.3em', fontWeight: 'bold' }}>
                                <img
                                    src="/test_imgs/png/love.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                7 &nbsp;&nbsp;
                                <img
                                    src="/test_imgs/png/chat.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                13
                            </p>
                        </div>
                        <span className="background_for_posts"></span>
                    </div>
                </Link>{' '}
                <Link to="/detail">
                    <div className="my_posts_post_main_img">
                        <img src="/test_imgs/diary_imgs/diary2.jpg" />
                        <div>
                            <p className="flex" style={{ color: '#FFF', fontSize: '1.3em', fontWeight: 'bold' }}>
                                <img
                                    src="/test_imgs/png/love.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                7 &nbsp;&nbsp;
                                <img
                                    src="/test_imgs/png/chat.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                13
                            </p>
                        </div>
                        <span className="background_for_posts"></span>
                    </div>
                </Link>{' '}
                <Link to="/detail">
                    <div className="my_posts_post_main_img">
                        <img src="/test_imgs/diary_imgs/diary2.jpg" />
                        <div>
                            <p className="flex" style={{ color: '#FFF', fontSize: '1.3em', fontWeight: 'bold' }}>
                                <img
                                    src="/test_imgs/png/love.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                7 &nbsp;&nbsp;
                                <img
                                    src="/test_imgs/png/chat.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                13
                            </p>
                        </div>
                        <span className="background_for_posts"></span>
                    </div>
                </Link>{' '}
                <Link to="/detail">
                    <div className="my_posts_post_main_img">
                        <img src="/test_imgs/diary_imgs/diary2.jpg" />
                        <div>
                            <p className="flex" style={{ color: '#FFF', fontSize: '1.3em', fontWeight: 'bold' }}>
                                <img
                                    src="/test_imgs/png/love.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                7 &nbsp;&nbsp;
                                <img
                                    src="/test_imgs/png/chat.png"
                                    style={{ width: '30px', height: '30px', marginRight: '5px', objectFit: 'cover' }}
                                />
                                13
                            </p>
                        </div>
                        <span className="background_for_posts"></span>
                    </div>
                </Link>
            </div>
            {/* 모달 START */}
            <div
                class="modal fade"
                id="modal_for_profile_setting"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg modal-lg-text modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div
                            class="modal-body mx-auto"
                            style={{ width: '450px', textAlign: 'center', fontWeight: 'bold' }}
                        >
                            <div>프로필 편집</div>
                            <hr />
                            <div>로그아웃</div>
                            <hr />
                            <div data-bs-dismiss="modal" aria-label="Close">
                                취소
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 모달 END */}
        </div>
    );
};

export default MyPosts;
