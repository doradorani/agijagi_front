import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/common/common.css';
import '../css/Home.css';

const Home = () => {
    return (
        <div id="home_wrap">
            <div className="home_main_img">
                <img src="/test_imgs/baby_imgs/baby10.jpg" />
            </div>
            <div className="home_section1">
                <div className="main_home_subtitle">
                    <p>자녀의 소중한 순간을 기록해 주세요</p>
                    {/* <p>아기자기</p> */}
                </div>
            </div>
            <div className="home_section2">
                <div className="home_section2_img">
                    <img src="/test_imgs/diary_imgs/diary1.jpg" />
                </div>
                <div className="home_section2_content">
                    <div>Lorem ipsum dolor sit amet</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    <button>일기 작성하기</button>
                </div>
            </div>
            <div className="home_section3">
                <div className="home_section3_content">
                    <div>Lorem ipsum dolor sit amet</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    <button>커뮤니티 구경하기</button>
                </div>
                <div className="home_section3_img">
                    <img src="/test_imgs/sns_imgs/baby_commu.jpg" />
                </div>
            </div>
            <div className="home_section4"></div>
        </div>
    );
};

export default Home;
