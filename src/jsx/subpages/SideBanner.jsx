import { useEffect, useState } from 'react';
import '../../css/common/sidemenu.css';
import '../../css/common/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useValidationItem } from '../../js/api/VlidationItem';
import { Link } from 'react-router-dom';

const SideBanner = () => {
    const validateBanner = useValidationItem();
    const [banners, setBanners] = useState([]);

    const randBanner = [
        '/test_imgs/sns_imgs/sns1.jpg',
        '/test_imgs/sns_imgs/karsten-winegeart-60GsdOMRFGc-unsplash.jpg',
    ];

    useEffect(() => {
        const testResponse = async () => {
            try {
                const res = await validateBanner('get', '/coBuy/randomBanner/1');
                if (res.success) {
                    setBanners(res.data.banner);
                } else {
                    console.log('이미지 호출 실패 시 대체 이미지');
                }
            } catch (error) {
                console.log('error: ' + error);
            }
        };
        testResponse();
    }, []);

    return (
        <>
            <div className='tag_for_sticky'>
                <div>
                    {banners.map((banner, index) => (
                        <Link key={banner} to={`/co-buying_detail/${banner}`}>
                            <img
                                className='adv_img_notice_right'
                                src={randBanner[Math.floor(Math.random() * randBanner.length)]}
                                alt={`Banner ${banner}`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SideBanner;
