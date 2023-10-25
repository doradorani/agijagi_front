import React from 'react';
import '../../../css/subpage/cobuyinglist.css';
import SideMenu from '../SideMenu';

const CoBuyingList = () => {
    return (
        <>
            <div className="co-buying_list_wrap">
                <div>
                    <img className="diary_main_img" src="/test_imgs/diary_imgs/diary5.jpg" />
                </div>
                <div className="co-buying_list_second_wrap">
                    <SideMenu />
                    <div className="product_list">
                        <div className="product_filter_container">
                            <div className="order_select_container">
                                <div claclassNamess="order_select_content">
                                    <span className="bold">전체</span>
                                </div>
                                <select className="order_select_selectbox">
                                    <option value="">전체</option>
                                    <option value="N">진행중</option>
                                    <option value="Y">종료된</option>
                                </select>
                            </div>
                            <ul className="order_select_option_contianer">
                                <li className="order_select_option bold">추천순</li>
                                <li className="order_select_option">인기순</li>
                                <li className="order_select_option">모집금액순</li>
                                <li className="order_select_option">마감임박순</li>
                                <li className="order_select_option">최신순</li>
                            </ul>
                        </div>
                        <div className="product_wrap_row">
                            <div className="product_order_card">
                                <div className="product_order_card_thumbnail">
                                    <div className="product_img">
                                        <img src="/test_imgs/diary_imgs/diary4.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="product_order_card_content_container">
                                    <div className="product_order_card_header">
                                        <div className="product_order_card_header_left">
                                            <p className="product_order_card_participants bold emerald">1,080% 달성</p>
                                            <p className="product_order_card_amount">5,402,000원</p>
                                        </div>
                                        <div class="product_order_card_header_period">
                                            <span>
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product_order_card_title">
                                        [전문 흉터관리 의료기기] 흉터고민 의료용 흉터연고로 흉터 케어하세요.
                                    </div>
                                    <div class="product_order_card_subtext">
                                        <span class="product_order_card_subtext_text">주식회사에이앤케이메디칼</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product_order_card">
                                <div className="product_order_card_thumbnail">
                                    <div className="product_img">
                                        <img src="/test_imgs/diary_imgs/diary3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="product_order_card_content_container">
                                    <div className="product_order_card_header">
                                        <div className="product_order_card_header_left">
                                            <p className="product_order_card_participants bold emerald">37,055% 달성</p>
                                            <p className="product_order_card_amount">185,278,000원</p>
                                        </div>
                                        <div class="product_order_card_header_period">
                                            <span>
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product_order_card_title">
                                        바르자마자 모공 -98% 기미 -31% | 왜 기다리세요? 한 번이면 되는데
                                    </div>
                                    <div class="product_order_card_subtext">
                                        <span class="product_order_card_subtext_text">더마네이처코스메틱(주)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product_order_card">
                                <div className="product_order_card_thumbnail">
                                    <div className="product_img">
                                        <img src="/test_imgs/diary_imgs/diary2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="product_order_card_content_container">
                                    <div className="product_order_card_header">
                                        <div className="product_order_card_header_left">
                                            <p className="product_order_card_participants bold emerald">5,055% 달성</p>
                                            <p className="product_order_card_amount">29,278,000원</p>
                                        </div>
                                        <div class="product_order_card_header_period">
                                            <span>
                                                <span></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product_order_card_title">
                                        직접 손으로 주무르는 듯한 인체공학적 설계 |목어깨, 등까지 제대로 푸세요
                                    </div>
                                    <div class="product_order_card_subtext">
                                        <span class="product_order_card_subtext_text">(주) 수련</span>
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

export default CoBuyingList;
