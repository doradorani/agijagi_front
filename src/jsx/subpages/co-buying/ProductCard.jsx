import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <>
            <div className="product_order_card">
                <div className="product_order_card_thumbnail">
                    <div className="product_img">
                        <Link to="/co-buying_detail">
                            <img src="/test_imgs/diary_imgs/diary4.jpg" alt="" />
                        </Link>
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
        </>
    );
};

export default ProductCard;
