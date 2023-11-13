import React, { useEffect, useState } from 'react';
import '../../../../css/admin/member/admin_authorization.css';
import AdminSidbar from '../../AdminSidebar';
import adminToken_config from '../../../../js/api/config/adminToken_config';
import { useValidationAdminItem } from '../../../../js/api/admin/ValidationAdminItem';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const UserDetail = ({ selectedMenu }) => {
    const location = useLocation();
    const userData = location.state;

    return (
        <div className='admin_authorization_wrap '>
            <div className='admin_page_menu_title_wrap'>
                <img src='/test_imgs/svg/group.svg' />
                <div className='admin_page_menu_title yg_font '>유저 관리</div>
                <div className='yg_font admin_page_menu_sub_title'> &#62; 상세 정보</div>
            </div>
            <div className='admin_authorization_second_wrap' style={{ width: '100%' }}>
                <div>
                    <div
                        className='user_detail_wrap_for_admin flex'
                        style={{
                            marginTop: '20px',
                            paddingBottom: '25px',
                            width: '90%',
                            height: '500px',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className='flex ' style={{ marginTop: '35px', justifyContent: 'space-evenly' }}>
                            <div>
                                <div className='user_modify_profile_wrap yg_font'>
                                    <img
                                        className='profile_img_for_modify'
                                        src='/test_imgs/png/profile.png'
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <div className='form-floating mb-3'>
                                        <input
                                            type='text'
                                            className='form-control custom_floating_label'
                                            id='floatingInputName'
                                            placeholder='이름'
                                            disabled={true}
                                            style={{ paddingBottom: '3px', borderRadius: '10px' }}
                                        />
                                        <label htmlFor='floatingInputName'>
                                            <span style={{ width: '70px' }}>이름</span>
                                            &nbsp;&nbsp;&nbsp;&nbsp;{userData.name}
                                        </label>
                                    </div>
                                    <div
                                        className='form-floating mb-2 '
                                        style={{
                                            marginBottom: '10px',
                                            paddingBottom: '0px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <input
                                            type='text'
                                            className='form-control custom_floating_label'
                                            id='floatingInputNickName'
                                            placeholder='별명'
                                            disabled={true}
                                            style={{ paddingBottom: '3px', width: '500px', borderRadius: '10px' }}
                                        />
                                        <label htmlFor='floatingInputNickName'>
                                            <span>별명</span>
                                            &nbsp;&nbsp;&nbsp;&nbsp; {userData.nickname}
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='flex'
                                style={{ flexDirection: 'column', justifyContent: 'space-between', width: '500px' }}
                            >
                                <div
                                    className='form-floating mb-2'
                                    style={{ marginBottom: '10px', paddingBottom: '0px' }}
                                >
                                    <input
                                        type='email'
                                        className='form-control custom_floating_label'
                                        id='floatingInputEmail'
                                        style={{ paddingBottom: '3px', borderRadius: '10px' }}
                                        placeholder='E-mail'
                                        disabled={true}
                                    />
                                    <label htmlFor='floatingInputEmail'>
                                        <span>E-mail</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp; {userData.email}
                                    </label>
                                </div>
                                <div
                                    className='form-floating mb-2 '
                                    style={{ marginBottom: '10px', paddingBottom: '0px' }}
                                >
                                    <input
                                        type='number'
                                        className='form-control custom_floating_label sign_up_phone'
                                        id='floatingInputPhoneNumber'
                                        placeholder='휴대 전화'
                                        disabled={true}
                                        style={{ paddingBottom: '3px', borderRadius: '10px' }}
                                    />
                                    <label htmlFor='floatingInputPhoneNumber'>
                                        <span>휴대 전화</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp; {userData.phone}
                                    </label>
                                </div>
                                <div className='form-floating mb-2'>
                                    <input
                                        type='text'
                                        className='form-control custom_floating_label'
                                        id='floatingInputPostCode'
                                        placeholder='Password'
                                        disabled={true}
                                        style={{ paddingBottom: '3px', borderRadius: '10px' }}
                                    />
                                    <label htmlFor='floatingInputPostCode'>
                                        <span>우편 번호</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp; {userData.zip_code}
                                    </label>
                                </div>
                                <div className='form-floating  mb-2 '>
                                    <input
                                        type='text'
                                        className='form-control custom_floating_label sign_up_phone'
                                        id='floatingInputAddress'
                                        placeholder='주소'
                                        disabled={true}
                                        style={{ paddingBottom: '3px', borderRadius: '10px' }}
                                    />
                                    <label htmlFor='floatingInputAddress'>
                                        <span>주소</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp; {userData.address_detail1}
                                    </label>
                                </div>

                                <div className='form-floating mb-2 '>
                                    <input
                                        type='text'
                                        className='form-control custom_floating_label sign_up_phone'
                                        id='floatingInputDetailAddress'
                                        placeholder='상세 주소'
                                        disabled={true}
                                        style={{ paddingBottom: '3px', borderRadius: '10px' }}
                                    />
                                    <label htmlFor='floatingInputDetailAddress'>
                                        <span>상세 주소</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp; {userData.address_detail2}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='gap-2 '>
                            <button
                                className='btn btn_admin_login'
                                type='button'
                                style={{ width: '500px', marginBottom: '10px' }}
                                // onClick={handleGoBack}
                            >
                                뒤로가기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
