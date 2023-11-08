import React from 'react';
import { Link } from 'react-router-dom';

const AdminProductCard = ({ productData }) => {
    // const {no, id, name, price, content, start_date, end_date, img, min_num, status,
    //     option1, option2, option3, option4, option5, reg_date, mod_date, accumulate} = productData;

    console.log('test==>', productData);

    return (
        <>
            <div className='product_order_card'>
                <div className='product_order_card_thumbnail'>
                    <div className='product_img'>
                        <Link to={'/admin/co-buying_detail'} state={productData.no}>
                            <img src={productData.img.split(',')[0]} alt='' />
                        </Link>
                    </div>
                </div>
                <div className='product_order_card_content_container'>
                    <div className='product_order_card_header'>
                        <div className='product_order_card_header_left'>
                            <p className='product_order_card_participants bold emerald'>
                                {typeof productData.min_num === 'number' && typeof productData.accumulate === 'number'
                                    ? `${((productData.accumulate / productData.min_num) * 100).toFixed(2)} %`
                                    : ''}
                            </p>
                            &nbsp;&nbsp;&nbsp;
                            <p className='product_order_card_amount'>
                                현재 총 모집금액 :{' '}
                                {typeof productData.accumulate === 'number' && !isNaN(parseInt(productData.price)) ? (
                                    <span className='bold'>
                                        {productData.accumulate * parseInt(productData.price) || 0}
                                    </span>
                                ) : (
                                    0
                                )}{' '}
                                원
                            </p>
                        </div>
                        <div class='product_order_card_header_period'>
                            <span>
                                <span></span>
                            </span>
                        </div>
                    </div>
                    <div className='product_order_card_title'>{productData.name}</div>
                    <div class='product_order_card_subtext'>
                        <span class='product_order_card_subtext_text'>
                            {productData.start_date} ~ {productData.end_date}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminProductCard;
