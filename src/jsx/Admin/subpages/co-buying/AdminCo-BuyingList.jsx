import React from 'react';
import CoBuyingList from '../../../subpages/co-buying/CoBuyingList';
import AdminSidbar from '../../AdminSidebar';
import ProductCard from '../../../subpages/co-buying/ProductCard';
import { relative } from 'path-browserify';

const AdminCoBuyingList = ({ setSelectedSideMenu }) => {
    return (
        <>
            <div className="flex">
                <div className="admin_co-buying_wrap" style={{ margin: '10px auto ' }}>
                    <div className="admin_co-buying_second_wrap">
                        <div className="co-buying_list_wrap">
                            <div className="co-buying_list_second_wrap">
                                <div className="product_list">
                                    <div
                                        className="product_filter_container flex"
                                        style={{ justifyContent: 'space-between', marginLeft: '10px' }}
                                    >
                                        <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                                            <img
                                                src="/test_imgs/png/bag.png"
                                                style={{ width: '55px', marginRight: '15px' }}
                                            />
                                            <div style={{ fontSize: '40px', marginRight: '15px' }}>쇼핑하기</div>
                                            <div
                                                style={{
                                                    fontSize: '20px',
                                                    display: 'flex',
                                                    alignItems: 'flex-end',
                                                    marginBottom: '10px',
                                                }}
                                            >
                                                &#62;&nbsp;진행 중인 상품
                                            </div>
                                        </div>
                                        {/* <select className="order_select_selectbox">
                                            <option value="">전체</option>
                                            <option value="N">진행중</option>
                                            <option value="Y">종료된</option>
                                        </select> */}
                                        {/* </div> */}
                                        <div style={{ position: 'relative' }}>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    border: '#dadada',
                                                    width: '180px',
                                                    height: '35px',
                                                    right: '25px',
                                                    border: '1px solid gray',
                                                    borderRadius: '40px',
                                                }}
                                            >
                                                <input
                                                    className="shopping_search_bar"
                                                    type="text"
                                                    placeholder="검색어 입력"
                                                    style={{
                                                        border: 'none',
                                                        width: '130px',
                                                        height: '32px',
                                                        marginLeft: '12px',
                                                        // borderRadius: '40px',
                                                        position: 'absolute',
                                                        top: '1px',
                                                        right: '35px',
                                                    }}
                                                ></input>
                                                <button
                                                    style={{
                                                        backgroundColor: '#fff',
                                                        border: 'none',
                                                        borderRadius: '100%',
                                                        width: '30px',
                                                        height: '30px',
                                                        position: 'absolute',
                                                        right: '1px',
                                                        top: '1.5px',
                                                    }}
                                                >
                                                    <img
                                                        src="/test_imgs/svg/search.svg"
                                                        style={{ width: '30px', height: '30px' }}
                                                    />
                                                </button>
                                            </div>
                                            <ul
                                                className="order_select_option_contianer"
                                                style={{ position: 'relative', top: '40px' }}
                                            >
                                                <li className="order_select_option bold">추천순</li>
                                                <li className="order_select_option">인기순</li>
                                                <li className="order_select_option">모집금액순</li>
                                                <li className="order_select_option">마감임박순</li>
                                                <li className="order_select_option">최신순</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_wrap_row">
                                        <ProductCard />
                                        <ProductCard />
                                        <ProductCard />
                                        <ProductCard />
                                        <ProductCard />
                                        <ProductCard />
                                        <div className="product_order_card">
                                            <div className="product_order_card_thumbnail">
                                                <div className="product_img">
                                                    <img src="/test_imgs/diary_imgs/diary3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="product_order_card_content_container">
                                                <div className="product_order_card_header">
                                                    <div className="product_order_card_header_left">
                                                        <p className="product_order_card_participants bold emerald">
                                                            37,055% 달성
                                                        </p>
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
                                                    <span class="product_order_card_subtext_text">
                                                        더마네이처코스메틱(주)
                                                    </span>
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
                                                        <p className="product_order_card_participants bold emerald">
                                                            5,055% 달성
                                                        </p>
                                                        <p className="product_order_card_amount">29,278,000원</p>
                                                    </div>
                                                    <div class="product_order_card_header_period">
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="product_order_card_title">
                                                    직접 손으로 주무르는 듯한 인체공학적 설계 |목어깨, 등까지 제대로
                                                    푸세요
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminCoBuyingList;
