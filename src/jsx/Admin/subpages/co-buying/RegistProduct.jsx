import { event } from 'jquery';
import React, { useEffect, useState } from 'react';

const RegistProduct = () => {
    const [optionCount, setOptionCount] = useState(1);
    const [images, setImages] = useState([]);
    const optionInputs = [];
    const maxOptions = 5;
    const maxImgCount = 5;

    // 옵션 추가 버튼 handler
    const handleAddOption = () => {
        if (optionCount < maxOptions) {
            setOptionCount(optionCount + 1);
        }
    };

    // 옵션 삭제 버튼 handler
    const handleRemoveOption = (index) => {
        if (optionCount > 1) {
            setOptionCount(optionCount - 1);
        }
    };

    const handleImageChange = (e) => {
        const selectedFiles = e.target.files;
        const newImages = [...images];

        for (let i = 0; i < selectedFiles.length; i++) {
            const selectedFile = selectedFiles[i];

            if (newImages.length + i >= maxImgCount) {
                // 이미 5개의 사진을 선택했거나 더 많이 선택했으므로 추가하지 않음
                console.log(newImages);
                alert('이미지는 최대 5개까지 업로드 가능합니다.');
                break;
            }

            const reader = new FileReader();

            reader.onload = (event) => {
                newImages.push(event.target.result);
                if (newImages.length === newImages.length + i) {
                    setImages(newImages);
                    console.log(newImages);
                }
            };

            reader.readAsDataURL(selectedFile);
        }
    };

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
        console.log(newImages);
    };

    for (let i = 0; i < optionCount - 1; i++) {
        optionInputs.push(
            <div key={i} className="flex">
                <div className="input-group mb-3 flex">
                    <span
                        className="input-group-text"
                        id="basic-addon1"
                        style={{ width: '120px', justifyContent: 'center' }}
                    >
                        상품 옵션 {i + 2}
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={`상품옵션 ${i + 2} 입력`}
                        aria-label={`Recipient's option ${i + 2}`}
                        aria-describedby="button-addon2"
                    />
                    {i === optionCount - 2 && (
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={handleRemoveOption}
                        >
                            &#10006;
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="admin_authorization_wrap">
                <div className="admin_page_menu_title_wrap">
                    <img src="/test_imgs/svg/shopping_cart.svg" />
                    <div className="admin_page_menu_title yg_font ">공동 구매</div>
                    <div className="yg_font admin_page_menu_sub_title">&#62; 제품 등록</div>
                </div>
                <div className="flex" style={{ justifyContent: 'space-evenly' }}>
                    {/* <div style={{ borderRight: '1px solid #dadada' }}> */}
                    <div>
                        <div className="flex " style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                name="file"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                                multiple
                            />
                            <label htmlFor="imageInput" className="btn btn_user_modify_cancel mb-2">
                                사진 추가
                            </label>
                            <div className="yg_font mb-3" style={{ marginRight: '10px' }}>
                                업로드되는 이미지는 500px &#10006; 400px로 잘릴 수 있습니다.
                            </div>
                            {images.length > 0 ? (
                                images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="flex mb-4"
                                        style={{
                                            width: '500px',
                                            height: '400px',
                                            borderRadius: '30px',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'relative',
                                        }}
                                    >
                                        <img
                                            className="mb-1"
                                            src={image}
                                            style={{
                                                width: '500px',
                                                height: '400px',
                                                objectFit: 'contain',
                                                borderRadius: '30px',
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="btn-close"
                                            aria-label="Close"
                                            style={{ position: 'absolute', right: '20px', top: '20px' }}
                                            onClick={() => removeImage(index)}
                                        ></button>
                                    </div>
                                ))
                            ) : (
                                <label
                                    htmlFor="imageInput"
                                    className="flex mb-4"
                                    style={{
                                        width: '500px',
                                        height: '400px',
                                        backgroundColor: '#EFF0F3',
                                        borderRadius: '30px',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    {images.map((image, index) => (
                                        <div key={index}>
                                            <img
                                                className="mb-1"
                                                src={image}
                                                style={{
                                                    width: '500px',
                                                    height: '400px',
                                                    objectFit: 'contain',
                                                    borderRadius: '30px',
                                                }}
                                            />
                                            <button
                                                type="button"
                                                className="btn-close"
                                                aria-label="Close"
                                                style={{ position: 'absolute', right: '20px', top: '20px' }}
                                                onClick={() => removeImage(index)}
                                            ></button>
                                        </div>
                                    ))}
                                    <img className="mb-1" src="/test_imgs/png/image.png" style={{ width: '200px' }} />
                                    <div className="yg_font" style={{ fontSize: '1.5em' }}>
                                        사진 업로드
                                    </div>
                                </label>
                            )}
                        </div>
                    </div>
                    <div style={{ width: '40%' }}>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text flex"
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                상품명
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="상품명 입력"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group mb-3" style={{ height: '200px' }}>
                            <span
                                className="input-group-text flex"
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                제품
                                <br />
                                상세 정보
                            </span>
                            <textarea
                                className="form-control"
                                placeholder="제품 상세 정보 입력"
                                aria-label="With textarea"
                                style={{ height: '200px', resize: 'none' }}
                            ></textarea>
                        </div>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text flex"
                                id="basic-addon1"
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                최소인원
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="구매확정 최소인원을 입력"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span
                                className="input-group-text flex"
                                id="basic-addon1"
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                상품가격
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="상품가격 입력"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="flex">
                            <div className="input-group mb-3 flex">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                    style={{ width: '120px', justifyContent: 'center' }}
                                >
                                    상품 옵션 1
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="상품옵션 입력"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                    onClick={handleAddOption}
                                >
                                    &#10010;
                                </button>
                            </div>
                        </div>
                        {optionInputs}
                        <div className="flex" style={{ justifyContent: 'center' }}>
                            <button
                                className="btn btn_user_modify_cancel mb-3"
                                type="button"
                                style={{ width: '30%', height: '50px', fontSize: '1.3em' }}
                            >
                                상품 등록
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistProduct;
