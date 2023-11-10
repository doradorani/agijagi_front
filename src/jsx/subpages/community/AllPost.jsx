import React, { useEffect, useRef, useState } from 'react';
import Post from './Post';
import LoadingPostCard from './LoadingPostCard';
import { useValidationItem } from '../../../js/api/VlidationItem';

const AllPost = ({ isUpdate, setIsUpdate }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState([]);
    const [page, setPage] = useState(1); // 현재 페이지 번호

    const validationItemForAllPost = useValidationItem();
    const testDivRef = useRef(null);

    useEffect(() => {
        setIsUpdate(false);
        setResponseData(null);
        setPage(1);
        const getAllPost = async () => {
            try {
                setIsLoading(true);
                const res = await validationItemForAllPost('get', `/community/getAllPosts?page=${page}`, null);
                if (res.success) {
                    setResponseData(res.data);
                }
            } catch (error) {
                console.error('게시물을 불러오는 중 오류 발생', error);
            } finally {
                setIsLoading(false);
            }
        };
        getAllPost();
    }, [isUpdate, page]);

    useEffect(() => {
        console.log('useEffect for Intersection Observer is triggered!');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // 50% 이상 보일 때
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        if (testDivRef.current) {
            observer.observe(testDivRef.current);
        }

        return () => {
            if (testDivRef.current) {
                observer.unobserve(testDivRef.current);
            }
        };
    }, [testDivRef]);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            console.log('Intersection Observer Callback:', entry);
            if (entry.isIntersecting) {
                // "test" div가 뷰포트에 들어왔을 때
                console.log('테스트 div가 뷰포트에 있습니다!');
                // 여기에서 더 많은 데이터를 로드하거나 다른 작업을 수행할 수 있습니다.
                setPage((prevPage) => prevPage + 1);
                loadMoreData();
            }
        });
    };

    const loadMoreData = () => {
        console.log('loadMoreData() CALLED!!');
    };

    return (
        <>
            {isLoading ? (
                <div></div>
            ) : (
                <>
                    <div className="post_section nn_font">
                        <div className=" flex yg_font" style={{ marginBottom: '30px' }}>
                            <img src="/test_imgs/png/아기여워.png" style={{ width: '55px', marginRight: '15px' }} />
                            <div style={{ fontSize: '40px', marginRight: '15px' }}>아 ~ 기여워</div>
                            <div
                                style={{
                                    fontSize: '20px',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    marginBottom: '10px',
                                }}
                            >
                                &#62;&nbsp;전체 게시글
                            </div>
                        </div>
                        {isLoading ? (
                            <>
                                <LoadingPostCard />
                                <LoadingPostCard />
                                <LoadingPostCard />
                            </>
                        ) : responseData !== null && responseData.length == 0 ? (
                            <div>첫번째 게시물을 등록해보세요.</div>
                        ) : (
                            (responseData !== null ? responseData : [])?.map((data) => (
                                <Post key={data.no} data={data} />
                            ))
                        )}
                        <div ref={testDivRef}>test</div>
                    </div>
                    <div className="tag_for_sticky">
                        <div>
                            <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                            <img className="adv_img_notice_right" src="/test_imgs/sns_imgs/sns1.jpg" />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default AllPost;
