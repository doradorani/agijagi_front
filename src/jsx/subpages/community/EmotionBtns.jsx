import React, { useState } from 'react';
import { useValidationItem } from '../../../js/api/VlidationItem';

const EmotionBtns = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [btnNo, setBtnNo] = useState(0);

    const validationForEmotionBtn = useValidationItem();

    const emotionBtnHandler = async (btnIndex, post_no) => {
        try {
            const res = await validationForEmotionBtn(
                'put',
                `/community/updateEmotionBtn/` + btnIndex + `/` + post_no,
                null
            );
        } catch (error) {
            console.error(error);
        } finally {
        }
    };
    return (
        <div className="emotion_btns flex">
            <div className={`flex ${data?.btn_no === 1 ? 'likeBtnClicked' : ''} `}>
                <a className="flex none_underline" onClick={() => emotionBtnHandler(1, data?.no)}>
                    <div>
                        <img className="emotion_btn" src="/test_imgs/png/heart.png" />
                    </div>
                    <div className="emotion_btn_cnt">{data?.like_cnt}</div>
                </a>
            </div>
            <div className={`flex ${data?.btn_no === 2 ? 'greatBtnClicked' : ''} `}>
                <a className="flex none_underline" onClick={() => emotionBtnHandler(2, data?.no)}>
                    <div>
                        <img className="emotion_btn" src="/test_imgs/png/like.png" />
                    </div>
                    <div className="emotion_btn_cnt">{data?.great_cnt}</div>
                </a>
            </div>
            <div className={`flex ${data?.btn_no === 3 ? 'sadBtnClicked' : ''} `}>
                <a className="flex none_underline" onClick={() => emotionBtnHandler(3, data?.no)}>
                    <div>
                        <img className="emotion_btn" src="/test_imgs/png/sad.png" />
                    </div>
                    <div className="emotion_btn_cnt">{data?.sad_cnt}</div>
                </a>
            </div>
        </div>
    );
};

export default EmotionBtns;
