import React, { useState } from 'react';
import '../../css/member/userModifyInfo.css';
import DaumPostcode from 'react-daum-postcode';

const UserModifyInfo = () => {
    const [userPostCode, setUserPostCode] = useState('');
    const [userFullAddress, setUserFullAddress] = useState('');
    const [previewProfileImage, setpreviewProfileImage] = useState('/test_imgs/png/profile.png');
    const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalStyle, setModalStyle] = useState('modal_for_add_profile_phote');

    // const [selectedFiles, setSelectedFiles] = useState([]);
    // const [byteCount, setByteCount] = useState(0);

    let userName = '사용자1';
    let userEmail = 'useruser@gmail.com';

    const handleFileChange = (e) => {
        // 파일이 선택되었는지 체크
        if (e.target && e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            // 미리보기 이미지 업데이트
            const reader = new FileReader();
            reader.onload = (e) => {
                setpreviewProfileImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }

        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }

        setModalStyle('modal_for_add_profile_phote');
        setIsModalOpen(false); // 파일 선택 시 모달 닫기
    };

    const deleteFiles = () => {
        setpreviewProfileImage('/test_imgs/png/profile.png');
    };

    const handleOpenPostcode = () => {
        setIsPostcodeOpen(!isPostcodeOpen);
    };

    const complete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        setUserPostCode(data.zonecode);
        setUserFullAddress(fullAddress);
    };

    return (
        <div className="admin_login_wrap">
            <div className="input_admin_info_box_wrap_for_signup" style={{ marginTop: '100px', marginBottom: '60px' }}>
                <div className="input_admin_info_box_for_signup" style={{ marginTop: '30px', marginBottom: '30px' }}>
                    <div className="admin_login_title yg_font" style={{ fontSize: '2.1em' }}>
                        회원정보 수정
                    </div>
                    <div className="user_modify_profile_wrap yg_font">
                        <img
                            className="profile_img_for_modify"
                            src={previewProfileImage || '/test_imgs/png/profile.png'}
                            style={{ objectFit: 'cover' }}
                        />

                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#modal_for_add_profile_phote"
                            className="add_a_photo_img"
                            onClick={() => setModalStyle('modal_for_add_profile_phote1')}
                        >
                            <img className="add_a_photo_img_log" src="/test_imgs/png/white_camera.png" />
                        </div>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="text"
                            className="form-control custom_floating_label"
                            id="floatingInputName"
                            placeholder="이름"
                            defaultValue={userName}
                            style={{ paddingBottom: '3px' }}
                        />
                        <label for="floatingInputName">
                            <span>이름</span>
                            &nbsp;
                            <span style={{ color: 'red ' }}>*</span>
                        </label>
                    </div>
                    <div
                        className="form-floating mb-2"
                        style={{
                            marginBottom: '10px',
                            paddingBottom: '0px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}
                    >
                        <input
                            type="text"
                            className="form-control custom_floating_label"
                            id="floatingInputNickName"
                            placeholder="별명"
                            style={{ paddingBottom: '3px', width: '250px' }}
                        />
                        <label for="floatingInputNickName">
                            <span>별명</span>
                            &nbsp;
                            <span style={{ color: 'red ' }}>*</span>
                        </label>
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            style={{ marginLeft: '15px', height: '38px' }}
                        >
                            별명 중복체크
                        </button>
                    </div>

                    <div className="form-floating mb-2" style={{ marginBottom: '10px', paddingBottom: '0px' }}>
                        <input
                            type="email"
                            className="form-control custom_floating_label"
                            id="floatingInputEmail"
                            style={{ paddingBottom: '3px' }}
                            placeholder="E-mail"
                            defaultValue={userEmail}
                        />
                        <label for="floatingInputEmail">
                            <span>E-mail</span>
                            &nbsp;
                            <span style={{ color: 'red ' }}>*</span>
                        </label>
                    </div>
                    <div className="form-floating mb-2 " style={{ marginBottom: '10px', paddingBottom: '0px' }}>
                        <input
                            type="number"
                            className="form-control custom_floating_label sign_up_phone"
                            id="floatingInputPhoneNumber"
                            placeholder="휴대 전화"
                            style={{ paddingBottom: '3px' }}
                        />
                        <label for="floatingInputPhoneNumber">
                            <span>휴대 전화</span>
                            &nbsp;
                            <span style={{ color: 'red ' }}>*</span>
                            &nbsp;&nbsp;
                            <span>('-'를 빼고 입력해주세요.)</span>
                        </label>
                    </div>
                    <div
                        className="form-floating mb-1"
                        style={{
                            marginBottom: '10px',
                            paddingBottom: '0px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}
                    >
                        <input
                            type="text"
                            className="form-control custom_floating_label"
                            id="floatingInputPostCode"
                            placeholder="Password"
                            style={{ paddingBottom: '3px', width: '250px' }}
                            value={userPostCode}
                        />
                        <label for="floatingInputPostCode">
                            <span>우편 번호</span>
                            &nbsp;
                            <span style={{ color: 'red ' }}>*</span>
                        </label>
                        <button
                            type="button"
                            class="btn btn-outline-primary"
                            style={{ marginLeft: '15px', boxSizing: 'border-box' }}
                            onClick={handleOpenPostcode}
                        >
                            우편번호 검색
                        </button>
                    </div>

                    {isPostcodeOpen && (
                        <div>
                            <DaumPostcode
                                autoClose
                                onComplete={complete}
                                style={{ height: '500px', marginBottom: '30px' }} // complete 함수는 원하는 우편번호 검색 결과 처리 로직을 구현해야 합니다.
                            />
                        </div>
                    )}

                    <div className="form-floating  mb-1 " style={{ marginBottom: '10px', paddingBottom: '0px' }}>
                        <input
                            type="text"
                            className="form-control custom_floating_label sign_up_phone"
                            id="floatingInputAddress"
                            placeholder="주소"
                            style={{ paddingBottom: '3px' }}
                            value={userFullAddress}
                        />
                        <label for="floatingInputAddress">
                            <span>주소</span>
                            &nbsp;
                            <span style={{ color: 'red ' }}>*</span>
                        </label>
                    </div>

                    <div className="form-floating mb-4 " style={{ paddingBottom: '10px' }}>
                        <input
                            type="text"
                            className="form-control custom_floating_label sign_up_phone"
                            id="floatingInputDetailAddress"
                            placeholder="상세 주소"
                            style={{ paddingBottom: '3px' }}
                        />
                        <label for="floatingInputDetailAddress">
                            <span>상세 주소</span>
                        </label>
                    </div>

                    <div class="gap-3 flex" style={{ justifyContent: 'space-between' }}>
                        <button class="btn btn_admin_login" type="button" style={{ width: '200px' }}>
                            수정하기
                        </button>
                        <button class="btn btn_user_modify_cancel" type="button" style={{ width: '200px' }}>
                            취소
                        </button>
                    </div>
                </div>
            </div>
            {/* 회원 정보 수정 => 프로필 사진 선택 모달 START */}
            <div
                class="modal fade"
                id="modal_for_add_profile_phote"
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
                            <input
                                type="file"
                                accept="image/*"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <div data-bs-dismiss="modal" onClick={handleFileChange}>
                                프로필 사진 선택하기
                            </div>
                            <hr />
                            <div data-bs-dismiss="modal" onClick={deleteFiles}>
                                프로필 사진 삭제
                            </div>
                            <hr />
                            <div data-bs-dismiss="modal" aria-label="Close">
                                닫기
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 회원 정보 수정 => 프로필 사진 선택 모달 END */}
        </div>
    );
};

export default UserModifyInfo;
