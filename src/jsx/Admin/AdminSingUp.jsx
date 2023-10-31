import React from 'react';
import '../../css/admin/member/admin_login.css';
import { Link } from 'react-router-dom';

const AdminSignUp = () => {
    return (
        <div className="admin_login_wrap">
            <img src="/test_imgs/baby_imgs/baby10.jpg " />
            <div className="admin_login_background"></div>
            <div className="input_admin_info_box_wrap_for_signup" style={{ marginTop: '40px' }}>
                <div className="input_admin_info_box_for_signup">
                    <div className="logo_wrap_admin_login yg_font">
                        <img className="logo_img" src="/test_imgs/logo/logo.png" />
                        <div>아기자기</div>
                    </div>
                    <div className="admin_login_title yg_font">회원가입</div>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control custom_floating_label"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label for="floatingInput">Admin Account*</label>
                    </div>
                    <div className="form-floating mb-2" style={{ marginBottom: '10px', paddingBottom: '0px' }}>
                        <input
                            type="password"
                            className="form-control custom_floating_label"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label for="floatingPassword">Password*</label>
                    </div>
                    <div className="form-floating mb-2" style={{ marginBottom: '10px', paddingBottom: '0px' }}>
                        <input
                            type="text"
                            className="form-control custom_floating_label"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label for="floatingInput">Name*</label>
                    </div>
                    <div className="form-floating mb-2" style={{ marginBottom: '10px', paddingBottom: '0px' }}>
                        <input
                            type="email"
                            className="form-control custom_floating_label"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label for="floatingPassword">Email Address*</label>
                    </div>
                    <div className="form-floating mb-3 " style={{ marginBottom: '10px', paddingBottom: '0px' }}>
                        <input
                            type="number"
                            className="form-control custom_floating_label sign_up_phone"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label for="floatingPassword">Phone Number* ('-'를 빼고 입력해주세요.)</label>
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
                    <div class="d-grid gap-2 mb-2 " style={{ marginBottom: '10px' }}>
                        <button class="btn btn_admin_login" type="button">
                            Sign-up
                        </button>
                    </div>
                    <div className="btn_for_admin_signup yg_font" style={{ paddingBottom: '20px', paddingTop: '10px' }}>
                        이미 계정이 있으신가요? &nbsp;&nbsp;
                        <Link to="/admin/sign_in">로그인</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSignUp;
