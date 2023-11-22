import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../../../css/subpage/myposts.css';
import MyPostCard from './MyPostCard';
import { useValidationItem } from '../../../js/api/VlidationItem';
import LoadingMyPostCard from './LoadingMyPostCard';
import { useDispatch } from 'react-redux';
import LogOutApi from '../../../js/api/LogOutApi';
import SideMenu from '../SideMenu';

const LikedPosts = ({ isUpdate, setIsUpdate, setSelectedSideMenu }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState([]);

    const validationItemForMyPosts = useValidationItem();
    const navigate = useNavigate();
    const dataDispatch = useDispatch();

    useEffect(() => {
        // setIsUpdate(false);
        setResponse(null);
        const getMyLikedPosts = async () => {
            console.log('getMyLikedPosts() CALLED!!');
            try {
                setIsLoading(true);
                const response = await validationItemForMyPosts('get', '/community/getMyLikedPosts', null);
                if (response.code === 200 && response.data !== null) {
                    setResponse(response.data);
                }
            } catch (error) {
                console.error('Error fetching posts', error);
            } finally {
                setIsLoading(false);
            }
        };
        getMyLikedPosts();
    }, [isUpdate]);

    const logOutHandler = () => {
        LogOutApi({ navigate, dataDispatch });
    };

    return (
        <>
            <div
                className="community_main_img flex"
                style={{ justifyContent: 'space-evenly', backgroundColor: '#DAEEED' }}
            >
                <img className="community_main_img" src="/test_imgs/community_imgs/commu2.jpg" />
                <img className="community_main_img" src="/test_imgs/community_imgs/community_heart.jpg" />
                <img className="community_main_img" src="/test_imgs/community_imgs/community.jpg" />
            </div>
            <div className="community_flex">
                <SideMenu selectedMenu={4} setSelectedSideMenu={setSelectedSideMenu} />
                {isLoading ? (
                    <>
                        <div className="post_section nn_font" style={{ width: '1200px' }}>
                            <div className="my_posts_wrap" style={{ width: '1070px' }}>
                                <div
                                    className="product_filter_container"
                                    style={{ marginLeft: '25px', height: '60px' }}
                                >
                                    <div className=" flex yg_font">
                                        <img
                                            src="/test_imgs/png/like1.png"
                                            style={{ width: '55px', marginRight: '15px', objectFit: 'contain' }}
                                        />
                                        <div style={{ fontSize: '40px', marginRight: '15px' }}>좋아요한 게시물</div>
                                    </div>
                                </div>
                                <div className="my_posts_contents_wrap">
                                    <LoadingMyPostCard />
                                    <LoadingMyPostCard />
                                    <LoadingMyPostCard />
                                    <LoadingMyPostCard />
                                    <LoadingMyPostCard />
                                    <LoadingMyPostCard />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="post_section nn_font" style={{ width: '1200px' }}>
                            <div className="my_posts_wrap" style={{ width: '1070px' }}>
                                <div
                                    className="product_filter_container"
                                    style={{ marginLeft: '25px', height: '60px' }}
                                >
                                    <div className=" flex yg_font">
                                        <img
                                            src="/test_imgs/png/like1.png"
                                            style={{ width: '55px', marginRight: '15px', objectFit: 'contain' }}
                                        />
                                        <div style={{ fontSize: '40px', marginRight: '15px' }}>좋아요한 게시물</div>
                                    </div>
                                </div>
                                <div className="my_posts_contents_wrap">
                                    {isLoading ? (
                                        response?.postDtos?.map((data) => (
                                            <LoadingMyPostCard key={data.no} data={data} />
                                        ))
                                    ) : response?.postDtos === null || response?.postDtos?.length === 0 ? (
                                        <div className="flex">
                                            <div>첫번째 게시물을 등록해보세요.</div>
                                        </div>
                                    ) : (
                                        response?.postDtos?.map((data) => <MyPostCard key={data.no} data={data} />)
                                    )}
                                </div>
                                {/* 모달 START */}
                                <div
                                    className="modal fade"
                                    id="modal_for_profile_setting"
                                    tabIndex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-lg modal-lg-text modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div
                                                className="modal-body mx-auto"
                                                style={{ width: '450px', textAlign: 'center', fontWeight: 'bold' }}
                                            >
                                                <Link to="/user_info" className="none_underline">
                                                    <div data-bs-dismiss="modal" aria-label="Close">
                                                        프로필 편집
                                                    </div>
                                                </Link>
                                                <hr />
                                                <div
                                                    className="hover_cursor"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                    onClick={() => logOutHandler()}
                                                >
                                                    로그아웃
                                                </div>
                                                <hr />
                                                <div
                                                    className="hover_cursor"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                >
                                                    취소
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 모달 END */}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default LikedPosts;
