import { useEffect, useState } from 'react';
import '../../css/common/sidemenu.css';
import '../../css/common/common.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const SideBanner = () => {
    const [randNum, setRandNum] = useState();

    const randBanner = [
        '/test_imgs/banner/banner1.jpg',
        '/test_imgs/banner/banner2.jpg',
        '/test_imgs/banner/banner3.jpg',
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * randBanner.length);
        setRandNum(randomIndex);
    }, []);

    // //서버용
    // useEffect(() => {
    //     const randBannerResponse = async () => {

    //         try {
    //             const res = await validateBanner('get', '/coBuy/randomBanner/1');
    //             if (res.success) {
    //                 setBanners(res.data.banner);
    //             } else {
    //                 console.log('이미지 호출 실패 시 대체 이미지');
    //             }
    //         } catch (error) {
    //             console.log('error: ' + error);
    //         }
    //     };
    //     randBannerResponse();
    // }, []);

    return (
        <>
            <div className="tag_for_sticky">
                <div>
                    {/* {banners.map((banner, index) => (
                        <Link key={banner} to={`/co-buying_detail/${banner}`}>
                            <img
                                className='adv_img_notice_right'
                                src={randBanner[Math.floor(Math.random() * randBanner.length)]}
                                alt={`Banner ${banner}`}
                            />
                        </Link>
                    ))}   서버용 */}

                    {/* {banners.map((banner, index) => ( */}

                    <Link to={`/co-buying_detail/${randNum + 1}`}>
                        <img className="adv_img_notice_right" src={randBanner[randNum]} alt={`Banner ${randNum}`} />
                    </Link>
                    {/* ))} */}
                </div>
            </div>
        </>
    );
};

export default SideBanner;
