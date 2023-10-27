import React from 'react';
import '../../../css/subpage/cobuyingdetail.css';
import SideMenu from '../SideMenu';

const CoBuyingDetail = () => {
    return (
        <>
            <div className="co-buying_detail_wrap">
                <div>
                    <img className="diary_main_img" src="/test_imgs/community_imgs/community_main.jpg" />
                </div>
                <div className="co-buying_detail_second_wrap">
                    <SideMenu />
                    <div className="co-buying_detail_section">
                        <div className="co-buying_detail_left_section">
                            <div className="co-buying_detail_main_img">
                                <img
                                    className="co-buying_detail_main_img"
                                    src="https://cdn3.wadiz.kr/studio/images/2023/10/11/6d0e3a66-425f-4938-8397-5245946b222a.gif"
                                    alt=""
                                />
                            </div>
                            <hr />
                            <div className="co-buying_detail_sub_section">
                                <div className="detail_sub_section_wrapper">
                                    <div className="detail_sub_section_title">
                                        <hr />
                                        <p className="bold">상세 설명</p>
                                    </div>
                                    <div className="deatil_sub_section_first_img">
                                        <img src="https://cdn.wadiz.kr/ft/images/green001/2023/1005/20231005035018605_43.jpeg/wadiz/resize/800/format/jpg/quality/80/" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boarder_line"></div>
                        <div className="co-buying_detail_right_section">
                            <div className="co-buying_detail_right_container">
                                <div className="co-buying_category_container">
                                    <div className="co-buying_category_name_container">
                                        <a href="#none" className="co-buying_category_link">
                                            <span>산모용품</span>
                                        </a>
                                        <div className="co-buying_hastag_name_container">
                                            <a href="#none" className="co-buying_hastag_name_link">
                                                <span>
                                                    <span className="co-buying_hastag_name_wrapper">
                                                        <div className="co-buying_hashtag_name">
                                                            <span className="hashtag_sharp">#</span>
                                                            <span>손목</span>
                                                        </div>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="co-buying_sharing_icon_container">
                                        <div className="co-buying_sharing_icon_box">
                                            <img src="/test_imgs/community_imgs/share.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="co-buying_line" />
                                <div className="co-buying_short_info_container">
                                    <p className="co-buying_short_info_detail_1">
                                        중요한건 꺾이지 않는 손목! 중꺾손! 탄탄한 TPU소재로 편안한 디닥착 손목보호대
                                    </p>
                                    <p className="co-buying_short_info_detail_2">
                                        TPU손목보호대 디닥착 오픈 천 소재만으로는 불가능한 "탄탄한 지지력"과 "꺾임없는
                                        편안함"을 느껴보세요! 고정/압박/온열 3가지 기능으로 매일매일 내 손목맞춤케어
                                    </p>
                                </div>
                                <div className="co-buying_funding_info_container">
                                    <div className="co-buying_participants_remainingsdays_container flex">
                                        <div className="co-buying_participants_wrapper">
                                            <span className="bold">334</span>
                                            <span>명 참여</span>
                                            &nbsp;
                                        </div>
                                        <span className="co-buying_remainingsdays_wrapper">
                                            <span className="bold">5일 남음</span>
                                        </span>
                                    </div>
                                    <div className="co-buying_funding_money_wrapper">
                                        <p className="co-buying_funding_money">
                                            <span className="bold">16,901,500</span>
                                            <span>원 달성</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="co-buying_funding_rate_container">
                                    <div className="co-buying_progressbar_wrappper">
                                        <div class="progressbar">
                                            <span class="progress"></span>
                                        </div>
                                    </div>
                                    <div className="co-buying_funding_text">
                                        <b className="co-buying_funding_rate">1,690%</b>
                                        <span>판매됨</span>
                                    </div>
                                </div>
                            </div>
                            <div className="co-buying_options_container">
                                <div className="co-buygin_options_wrapper">
                                    <div className="co-buying_options_text">
                                        <p>옵션 선택</p>
                                    </div>
                                    <div className="co-buyging_options_wrapper">
                                        <select className="co-buying_options_select">
                                            <option>
                                                --<span>&nbsp;&nbsp;</span>선택
                                                <span>&nbsp;&nbsp;</span>
                                                --
                                            </option>
                                            <option></option>
                                            <option></option>
                                            <option></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="co-buying_buttons_container">
                                <div className="co-buying_buttons_wrapper flex">
                                    <div className="like_button_wrapper">
                                        <div className="like_button">
                                            <label for="checkbox" className="like_box">
                                                <input type="checkbox" id="checkbox" hidden />
                                                <svg
                                                    t="1689815540548"
                                                    class="icon"
                                                    viewBox="0 0 1024 1024"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    p-id="2271"
                                                >
                                                    <path
                                                        d="M742.4 101.12A249.6 249.6 0 0 0 512 256a249.6 249.6 0 0 0-230.72-154.88C143.68 101.12 32 238.4 32 376.32c0 301.44 416 546.56 480 546.56s480-245.12 480-546.56c0-137.92-111.68-275.2-249.6-275.2z"
                                                        fill="#231F20"
                                                        p-id="2272"
                                                        id="heart"
                                                    ></path>
                                                </svg>
                                                <span></span>
                                            </label>
                                            <div className="likes_count">1,546</div>
                                        </div>
                                    </div>
                                    <div className="co-buying_botton_wrpper">
                                        <div className="buying_button">
                                            <p className="bold">구매하기</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoBuyingDetail;
