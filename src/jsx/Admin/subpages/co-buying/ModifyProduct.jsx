import { event } from 'jquery';
import React, { useEffect, useState } from 'react';
import { useValidationAdminItem } from '../../../../js/api/admin/ValidationAdminItem';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const RegistProduct = () => {
    const { no } = useParams();

    const [productImg, setProductImg] = useState([]);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [minParticipants, setMinParticipants] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productStart, setProductStart] = useState('');
    const [productEnd, setProductEnd] = useState('');
    const [productOptions, setProductOptions] = useState([]);

    const [modifyCobuy, setModifyCobuy] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [images, setImages] = useState([]);
    const [optionCount, setOptionCount] = useState(1);
    const optionInputs = [];
    const maxOptions = 5;
    const maxImgCount = 5;

    const validateModifyProduct = useValidationAdminItem(); // 커스텀 Hook 사용
    const navigate = useNavigate();

    useEffect(() => {
        const modifyProduct = async () => {
            try {
                const response = await validateModifyProduct('get', '/coBuy/detailProduct/' + no);

                if (response.code === 200) {
                    const modifyResponse = response.data.coBuyDetailProduct;

                    const imgArray = modifyResponse.img.split(',');
                    for (let i = 0; i < imgArray.length; i++) {
                        setImages((prevImages) => [...prevImages, imgArray[i]]);
                        setProductImg((prevProductImg) => [...prevProductImg, imgArray[i]]);
                    }

                    setProductName(modifyResponse.name);
                    setProductDescription(modifyResponse.content);
                    setMinParticipants(modifyResponse.min_num);
                    setProductPrice(modifyResponse.price);
                    setProductStart(modifyResponse.start_date);
                    setProductEnd(modifyResponse.end_date);

                    for (let i = 1; i <= 5; i++) {
                        const optionKey = `option${i}`;
                        const newOption = modifyResponse[optionKey];

                        if (newOption !== null) {
                            // 이미 있는지 확인
                            const isOptionExists = productOptions.includes(newOption);

                            // 중복된 옵션이 없다면 추가
                            if (!isOptionExists) {
                                setProductOptions((prevOptions) => [...prevOptions, newOption]);
                                setOptionCount(i);
                            }
                        }
                    }

                    setIsLoading(true);
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.error('Error Message:', error.message);
                console.error('Status Code:', error.response.status);
                //adminCoBuyDispatch(adminStateAction.setAdminState(false));
            } finally {
                setIsLoading(false);
            }
        };
        modifyProduct();
    }, []);

    // 옵션 추가 버튼 handler
    const handleAddOption = () => {
        if (optionCount < maxOptions) {
            setProductOptions([...productOptions, '']);
            setOptionCount(optionCount + 1);
        } else {
            Swal.fire({
                icon: 'warning',
                title: '최대 5개의 옵션을 입력할 수 있습니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    // 옵션 삭제 버튼 handler
    const handleRemoveOption = (index) => {
        if (optionCount > 1) {
            const newOptions = [...productOptions];

            newOptions.pop(); // 마지막 옵션 제거
            setProductOptions(newOptions);

            setOptionCount(optionCount - 1);
        }
    };

    const handleImageChange = (e) => {
        const selectedFiles = e.target.files;
        const newImages = [...images];

        for (let i = 0; i < selectedFiles.length; i++) {
            const selectedFile = selectedFiles[i];

            setProductImg((prevProductImg) => [...prevProductImg, selectedFile]);

            if (newImages.length + i >= maxImgCount) {
                // 이미 5개의 사진을 선택했거나 더 많이 선택했으므로 추가하지 않음
                //console.log(newImages);
                Swal.fire({
                    icon: 'warning',
                    title: '이미지는 최대 5개까지 업로드 가능합니다.',
                    showConfirmButton: false,
                    timer: 1500,
                });
                break;
            }

            const reader = new FileReader();

            reader.onload = (event) => {
                newImages.push(event.target.result);
                if (newImages.length === newImages.length + i) {
                    setImages(newImages);
                    //console.log(newImages);
                }
            };

            reader.readAsDataURL(selectedFile);
        }
    };

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
        //console.log(newImages);

        const imageList = [...productImg];
        imageList.splice(index, 1);
        setProductImg(imageList);
    };

    const uploadProductHandler = () => {
        if (!productName) {
            Swal.fire({
                icon: 'warning',
                title: '상품 이름을 기재하여야 합니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (!productDescription) {
            Swal.fire({
                icon: 'warning',
                title: '제품 상세 정보을 기재하여야 합니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (!minParticipants || minParticipants == 0 || minParticipants == '0') {
            Swal.fire({
                icon: 'warning',
                title: '최소 인원은 1명 이상 기재하여야 합니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (!productPrice || productPrice == 0 || productPrice == '0') {
            Swal.fire({
                icon: 'warning',
                title: '상품 가격은 0원 이상 기재하여야 합니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (!productStart) {
            Swal.fire({
                icon: 'warning',
                title: '개시 날짜을 기재하여야 합니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (!productEnd) {
            Swal.fire({
                icon: 'warning',
                title: '마감 날짜을 기재하여야 합니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (productStart > productEnd) {
            Swal.fire({
                icon: 'warning',
                title: '마감 날짜는 개시 날짜보다 빠를 수 없습니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (!productOptions || productOptions.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: '상품 옵션을 최소 1개 이상 기재하여야 합니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else if (!productImg || productImg.length === 0) {
            Swal.fire({
                icon: 'warning',
                title: '상품 이미지를 최소 1개 이상 기재하여야 합니다.',
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            let modifyProductData = new FormData();
            let existImg = [];

            for (let i = 0; i < productImg.length; i++) {
                if (productImg[i].name === undefined || productImg[i].name === null || productImg[i].name === null) {
                    existImg.push(productImg[i]);
                } else {
                    modifyProductData.append('files', productImg[i]);
                }
            }

            const modifyProductInfo = {
                productNo: no,
                productImg: existImg,
                productName: productName,
                productDescription: productDescription,
                minParticipants: minParticipants,
                productPrice: productPrice,
                productStart: productStart,
                productEnd: productEnd,
                productOptions: productOptions,
            };

            modifyProductData.append(
                'info',
                new Blob([JSON.stringify(modifyProductInfo)], { type: 'application/json' })
            );
            console.log(modifyProductInfo);

            try {
                validateModifyProduct('put', '/coBuy/admin/modify', modifyProductData).then((res) => {
                    if (res.success) {
                        Swal.fire({
                            icon: 'success',
                            title: '상품 수정에 성공하였습니다.',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        navigate(`/admin/co-buying_detail/${no}`);
                    } else {
                        Swal.fire({
                            icon: 'warning',
                            title: '상품 수정 중 서버에 문제가 생겨 실패하였습니다.',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'warning',
                    title: '상품 수정 중 서버에 문제가 생겨 실패하였습니다.',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    const handleChangeOption = (index, value) => {
        const updatedOptions = [...productOptions];
        updatedOptions[index] = value;
        setProductOptions(updatedOptions);
    };

    for (let i = 1; i < optionCount; i++) {
        optionInputs.push(
            <div key={i} className='flex'>
                <div className='input-group mb-3 flex'>
                    <span
                        className='input-group-text'
                        id='basic-addon1'
                        style={{ width: '120px', justifyContent: 'center' }}
                    >
                        상품 옵션 {i + 1}
                    </span>
                    <input
                        type='text'
                        className='form-control'
                        placeholder={`상품옵션 ${i + 1} 입력`}
                        defaultValue={productOptions[i]}
                        aria-label={`Recipient's option ${i + 1}`}
                        aria-describedby='button-addon2'
                        onChange={(e) => handleChangeOption(i, e.target.value)}
                    />
                    {i === optionCount - 1 && (
                        <button
                            className='btn btn-outline-secondary'
                            type='button'
                            id='button-addon2'
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
            <div className='admin_authorization_wrap'>
                <div className='admin_page_menu_title_wrap'>
                    <img src='/test_imgs/svg/shopping_cart.svg' />
                    <div className='admin_page_menu_title yg_font '>공동 구매</div>
                    <div className='yg_font admin_page_menu_sub_title'>&#62; 제품 수정</div>
                </div>
                <div className='flex' style={{ justifyContent: 'space-evenly' }}>
                    {/* <div style={{ borderRight: '1px solid #dadada' }}> */}
                    <div>
                        <div className='flex ' style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                            <input
                                id='imageInput'
                                type='file'
                                accept='image/*'
                                name='file'
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                                multiple
                            />
                            <label htmlFor='imageInput' className='btn btn_user_modify_cancel mb-3'>
                                사진 추가
                            </label>
                            <div
                                className='nn_font mb-2 flex'
                                style={{
                                    marginRight: '10px',
                                    flexDirection: 'column',
                                }}
                            >
                                <p className='mb-0'>최대 5개까지 이미지를 업로드할 수 있습니다.</p>
                                <p>첫 번째 이미지가 프로필 이미지로 설정됩니다.</p>
                            </div>

                            {images.length > 0 ? (
                                images.map((image, index) => (
                                    <div
                                        key={index}
                                        className='flex mb-4'
                                        style={{
                                            width: '550px',
                                            height: '400px',
                                            borderRadius: '30px',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'relative',
                                        }}
                                    >
                                        <img
                                            className='mb-1'
                                            src={image}
                                            style={{
                                                width: '550px',
                                                height: '400px',
                                                objectFit: 'cover',
                                                borderRadius: '30px',
                                            }}
                                        />
                                        <button
                                            type='button'
                                            className='btn-close'
                                            aria-label='Close'
                                            style={{ position: 'absolute', right: '20px', top: '20px' }}
                                            onClick={() => removeImage(index)}
                                        ></button>
                                    </div>
                                ))
                            ) : (
                                <label
                                    htmlFor='imageInput'
                                    className='flex mb-4 upload upload_img_label'
                                    style={{
                                        width: '550px',
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
                                                className='mb-1'
                                                src={image}
                                                style={{
                                                    width: '550px',
                                                    height: '400px',
                                                    objectFit: 'cover',
                                                    borderRadius: '30px',
                                                }}
                                            />
                                            <button
                                                type='button'
                                                className='btn-close'
                                                aria-label='Close'
                                                style={{ position: 'absolute', right: '20px', top: '20px' }}
                                                onClick={() => removeImage(index)}
                                            ></button>
                                        </div>
                                    ))}
                                    <img
                                        className='mb-2'
                                        src='/test_imgs/png/image.png'
                                        style={{ width: '200px', paddingTop: '10px' }}
                                    />
                                    <div className='yg_font' style={{ fontSize: '1.5em' }}>
                                        사진 업로드
                                        <p style={{ fontSize: '0.6em' }}>
                                            업로드되는 이미지는 550px &#10006; 400px로 잘릴 수 있습니다.
                                        </p>
                                    </div>
                                </label>
                            )}
                        </div>
                    </div>
                    <div className='nn_font' style={{ width: '40%' }}>
                        <div className='input-group mb-3'>
                            <span
                                className='input-group-text flex'
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                상품명
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='상품명 입력'
                                defaultValue={productName}
                                aria-label='Username'
                                aria-describedby='basic-addon1'
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>
                        <div className='input-group mb-3' style={{ height: '200px' }}>
                            <span
                                className='input-group-text flex'
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                제품
                                <br />
                                상세 정보
                            </span>
                            <textarea
                                className='form-control'
                                placeholder='제품 상세 정보 입력'
                                defaultValue={productDescription}
                                aria-label='With textarea'
                                style={{ height: '200px', resize: 'none' }}
                                onChange={(e) => setProductDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className='input-group mb-3'>
                            <span
                                className='input-group-text flex'
                                id='basic-addon1'
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                최소인원
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='구매확정 최소인원을 입력'
                                defaultValue={minParticipants}
                                aria-label='Username'
                                aria-describedby='basic-addon1'
                                onChange={(e) => setMinParticipants(e.target.value)}
                            />
                        </div>
                        <div className='input-group mb-3'>
                            <span
                                className='input-group-text flex'
                                id='basic-addon1'
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                상품가격
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='상품가격 입력'
                                defaultValue={productPrice}
                                aria-label='Username'
                                aria-describedby='basic-addon1'
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </div>

                        <div className='input-group mb-3'>
                            <span
                                className='input-group-text flex'
                                id='basic-addon1'
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                개시 날짜
                            </span>
                            <input
                                type='date'
                                className='form-control'
                                defaultValue={productStart}
                                aria-label='Username'
                                aria-describedby='basic-addon1'
                                onChange={(e) => setProductStart(e.target.value)}
                            />
                        </div>

                        <div className='input-group mb-3'>
                            <span
                                className='input-group-text flex'
                                id='basic-addon1'
                                style={{ width: '120px', justifyContent: 'center' }}
                            >
                                마감 날짜
                            </span>
                            <input
                                type='date'
                                className='form-control'
                                defaultValue={productEnd}
                                aria-label='Username'
                                aria-describedby='basic-addon1'
                                onChange={(e) => setProductEnd(e.target.value)}
                            />
                        </div>

                        {/* {productOptions.map((option, index) => (
                            <div key={index} className='flex'>
                                <div className='input-group mb-3 flex'>
                                    <span
                                        className='input-group-text'
                                        id={`basic-addon${index + 1}`}
                                        style={{ width: '120px', justifyContent: 'center' }}
                                    >
                                        {`상품 옵션 ${index + 1}`}
                                    </span>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder={`상품옵션 ${index + 1} 입력`}
                                        aria-label={`Recipient's option ${index + 1}`}
                                        aria-describedby={`button-addon${index + 1}`}
                                        defaultValue={option}
                                        onChange={(e) => handleChangeOption(index, e.target.value)}
                                    />
                                    {index === 0 && ( // 첫 번째 옵션에 대해서만 버튼을 렌더링
                                        <button
                                            className='btn btn-outline-secondary'
                                            type='button'
                                            id={`button-addon${index + 1}`}
                                            onClick={handleAddOption}
                                        >
                                            &#10010;
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))} */}

                        <div className='flex'>
                            <div className='input-group mb-3 flex'>
                                <span
                                    className='input-group-text'
                                    id='basic-addon1'
                                    style={{ width: '120px', justifyContent: 'center' }}
                                >
                                    상품 옵션 1
                                </span>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='상품옵션 입력'
                                    defaultValue={productOptions[0]}
                                    aria-label="Recipient's username"
                                    aria-describedby='button-addon2'
                                    // onChange={(e) => setProductOptions([...productOptions, e.target.value])}
                                    onChange={(e) => handleChangeOption(0, e.target.value)}
                                />
                                <button
                                    className='btn btn-outline-secondary'
                                    type='button'
                                    id='button-addon2'
                                    onClick={handleAddOption}
                                >
                                    &#10010;
                                </button>
                            </div>
                        </div>
                        {optionInputs}
                        <div className='flex' style={{ justifyContent: 'center' }}>
                            <button
                                className='btn btn_user_modify_cancel mb-3'
                                type='button'
                                style={{ width: '30%', height: '50px', fontSize: '1.3em' }}
                                onClick={uploadProductHandler}
                            >
                                상품 수정
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistProduct;
