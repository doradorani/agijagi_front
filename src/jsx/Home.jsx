import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/common/common.css';
import '../css/home.css';
import { Link } from 'react-router-dom';
import useScrollFadeIn from './useScrollFadeIn';

const Home = ({ setSelectedUserLoginBtn }) => {
    const fadeIn0 = useScrollFadeIn('left');
    const fadeIn1 = useScrollFadeIn('left', 3);
    const fadeIn2 = useScrollFadeIn('left');
    const fadeIn3 = useScrollFadeIn('left', 1);
    const fadeIn4 = useScrollFadeIn('right');
    const fadeIn5 = useScrollFadeIn('right');
    const fadeIn6 = useScrollFadeIn('right', 1);
    const fadeIn7 = useScrollFadeIn('left');

    const elements = [fadeIn1, fadeIn2, fadeIn3, fadeIn4, fadeIn5, fadeIn6];

    useEffect(() => {
        setSelectedUserLoginBtn(false);
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // 해당 비율 이상이 화면에 드러나면 감시됨
        };

        const callback = (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // 현재 감시된 요소가 화면에 나타나면 500ms 후에 나타나도록 설정
                    setTimeout(() => {
                        elements[index].ref.current.style.transition = 'opacity 0.5s ease-in-out';
                        elements[index].ref.current.style.opacity = 1;
                    }, 500);
                    // 해당 요소 감시 중지
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, observerOptions);

        // 모든 요소를 감시 대상으로 등록
        elements.forEach((element) => {
            if (element.ref.current) {
                observer.observe(element.ref.current);
            }
        });

        return () => observer.disconnect();
    }, [elements]);

    return (
        <div id="home_wrap yg_font">
            <div className="home_main_img">
                <img src="/test_imgs/baby_imgs/baby10.jpg" />
            </div>
            <div className="home_section1">
                <div className="main_home_subtitle">
                    <p>자녀의 소중한 순간을 기록해 주세요</p>
                    <p>아기자기</p>
                </div>
            </div>
            <div className="home_section2">
                <div className="home_section2_img">
                    <img src="/test_imgs/diary_imgs/diary1.jpg" />
                </div>
                <div className="home_section2_content">
                    <div className="home_section2_title" ref={fadeIn0?.ref} style={fadeIn0?.style}>
                        <Link to="/diary" className="none_deco_link">
                            <div> "육아 일기" 작성하기</div>
                            <div>아이의 세상을 기록하는 마법 같은 공간.</div>
                        </Link>
                    </div>
                    <div className="home_section2_imgs" ref={fadeIn1?.ref} style={fadeIn1?.style}>
                        <img src="/test_imgs/baby_imgs/walk.jpg" />
                        <img src="/test_imgs/baby_imgs/happy.png" />
                        <img src="/test_imgs/baby_imgs/meal.jpg" />
                        <img src="/test_imgs/baby_imgs/bath.jpg" />
                        <img src="/test_imgs/baby_imgs/laugh.jpg" />
                    </div>
                    <div className="home_section2_text mb-4" ref={fadeIn2?.ref} style={fadeIn2?.style}>
                        처음이기에 더 소중한 아이와의 추억을 일기에 담아보세요.
                        {/* 아이의 소중한 순간을 일기에 담아보세요. */}
                        <br />
                        <span style={{ fontWeight: 'bold', color: '#000' }}>
                            첫 걸음마, 첫 이유식, 아이의 잊지 못할 밝은 미소
                        </span>
                        까지 일상적이지만 특별한 순간들을 기록하고 꺼내보는 것은 마치 작은 보물상자를 열어보는 듯한
                        느낌이 듭니다.
                        <br />
                        일기 작성 기능을 통해 아이와 부모의 성장과 기억하고 싶은 순간들을 손쉽게 담아보세요.
                    </div>
                    <Link to="/diary">
                        <button className="nn_font btn btn-outline-primary" ref={fadeIn3?.ref} style={fadeIn3?.style}>
                            지금 바로 일기 작성하기
                        </button>
                    </Link>
                </div>
            </div>
            <div className="home_section3">
                <div className="home_section3_content">
                    <div className="home_section3_title" ref={fadeIn4?.ref} style={fadeIn4?.style}>
                        <Link to="/community" className="none_deco_link">
                            <div className="mb-3">
                                <img src="/test_imgs/png/아기여워.png" style={{ width: '45px', marginRight: '15px' }} />
                                "아~ 기여워" 구경하기
                            </div>
                            <div style={{ fontSize: '0.8em' }}>부모님들의 소중한 이야기가 교차하는 곳.</div>
                        </Link>
                    </div>
                    <div className="home_section3_text mb-4 " ref={fadeIn5?.ref} style={fadeIn5?.style}>
                        {/* 육아는 함께 나누는 경험이 무궁무진합니다.  */}
                        우리의 커뮤니티는 다양한 부모님들이 모여 육아에 관한 경험, 고민, 팁을 나누는 따뜻한 공간입니다.
                        여기서 다른 부모님들의 이야기를 들으며 서로의 소중한 지식을 나눌 수도, 혼자보기 아까운 자녀의
                        너무나도 이쁜 모습들도 함께 공유해주세요.
                    </div>
                    <Link to="/community">
                        <button className="nn_font btn btn-outline-success" ref={fadeIn6?.ref} style={fadeIn6?.style}>
                            "아~ 기여워" 구경하기
                        </button>
                    </Link>
                </div>
                <div className="home_section3_img" ref={fadeIn7?.ref} style={fadeIn7?.style}>
                    <img src="/test_imgs/sns_imgs/baby_commu.jpg" />
                </div>
            </div>
            {/* <div className="home_section4"></div> */}
        </div>
    );
};

export default Home;
