import React, { useEffect, useState } from 'react';
import { useValidationItem } from '../../../js/api/VlidationItem';
import { useParams } from 'react-router-dom';

const EmotionBtnsForDetail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState();
    const [emotionBtnclickCnt, setEmotionBtnclickCnt] = useState(0);
    const [emotionRes, setEmotionRes] = useState();
    const { postId } = useParams();

    const ValidationItem = useValidationItem();

    useEffect(() => {
        const getDetaillPost = async () => {
            console.log('getDetaillPost() CALLED!!');
            try {
                setIsLoading(true);
                const response = await ValidationItem('get', '/community/getDetailPost/' + postId, null);
                if (response?.code === 200 && response?.data !== null) {
                    setResponseData(response);
                }
                const post_no = postId;
                const emotionRes = await ValidationItem('get', '/community/getEmotions/' + post_no, null);
                if (emotionRes?.code === 200 && emotionRes?.data !== null) {
                    console.log(emotionRes);
                    setEmotionRes(emotionRes);
                }
            } catch (error) {
                console.error('Error fetching posts', error);
            } finally {
                setIsLoading(false);
            }
        };
        getDetaillPost();
    }, [emotionBtnclickCnt]);

    const emotionBtnHandler = async (btnIndex, post_no) => {
        try {
            const res = await ValidationItem('put', `/community/updateEmotionBtn/` + btnIndex + `/` + post_no, null);
        } catch (error) {
            console.error(error);
        } finally {
            setEmotionBtnclickCnt(emotionBtnclickCnt + 1);
        }
    };
    return (
        <div className="emotion_btns_indetail flex">
            <div className={`flex ${emotionRes?.data === 1 ? 'likeBtnClicked' : ''} `}>
                <a className="flex none_underline" onClick={() => emotionBtnHandler(1, responseData?.data?.no)}>
                    <div>
                        <img className="emotion_btn" src="/test_imgs/png/heart.png" />
                    </div>
                    <div className="emotion_btn_cnt">{responseData?.data?.like_cnt}</div>
                </a>
            </div>
            <div className={`flex ${emotionRes?.data === 2 ? 'greatBtnClicked' : ''} `}>
                <a className="flex none_underline" onClick={() => emotionBtnHandler(2, responseData?.data?.no)}>
                    <div>
                        <img className="emotion_btn" src="/test_imgs/png/like.png" />
                    </div>
                    <div className="emotion_btn_cnt">{responseData?.data?.great_cnt}</div>
                </a>
            </div>
            <div className={`flex ${emotionRes?.data === 3 ? 'sadBtnClicked' : ''} `}>
                <a className="flex none_underline" onClick={() => emotionBtnHandler(3, responseData?.data?.no)}>
                    <div>
                        <img className="emotion_btn" src="/test_imgs/png/sad.png" />
                    </div>
                    <div className="emotion_btn_cnt">{responseData?.data?.sad_cnt}</div>
                </a>
            </div>
        </div>
    );
};

export default EmotionBtnsForDetail;
