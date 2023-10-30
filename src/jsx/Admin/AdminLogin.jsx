import React from 'react';
import '../../css/admin/member/admin_login.css';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    return (
        <div className="admin_login_wrap">
            {/* <img src="/test_imgs/baby_imgs/baby10.jpg " /> */}
            {/* <div className="admin_login_background"></div> */}
            <div className="input_admin_info_box_wrap">
                <div className="input_admin_info_box">
                    <div className="logo_wrap_admin_login yg_font">
                        <img className="logo_img" src="/test_imgs/logo/logo.png" />
                        <div>아기자기</div>
                    </div>
                    <div className="admin_login_title yg_font">로그인</div>
                    <div className="form-floating mb-2">
                        <input
                            type="email"
                            className="form-control custom_floating_label"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInput">Admin Account*</label>
                    </div>
                    <div className="form-floating mb-4" style={{ marginBottom: '10px', paddingBottom: '0px' }}>
                        <input
                            type="password"
                            className="form-control custom_floating_label"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label for="floatingPassword">Password*</label>
                    </div>
                    {/* <form class="form-floating">
                        <input
                            type="email"
                            class="form-control is-invalid"
                            id="floatingInputInvalid"
                            placeholder="name@example.com"
                            value=""
                        />
                        <label for="floatingInputInvalid">Invalid input</label>
                    </form> */}
                    <div className="d-grid gap-2 mb-3 " style={{ marginBottom: '10px' }}>
                        <Link className="d-grid gap-2 none_underline" to="/admin">
                            <button class="btn btn_admin_login" type="button">
                                Login
                            </button>
                        </Link>
                    </div>
                    <div className="btn_for_admin_signup yg_font" style={{ paddingBottom: '30px', paddingTop: '10px' }}>
                        관리자 계정이 없으신가요? &nbsp;&nbsp;
                        <Link to="/admin/sign_up">회원가입</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
