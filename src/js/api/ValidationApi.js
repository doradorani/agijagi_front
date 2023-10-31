import TokenApi from "./TokenApi";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {tokenAction} from "./redux_store/slice/tokenSlice";
import token_config from "./config/token_config";
import moment from "moment/moment";

export function useValidationUser(url) {

    const tokenDispatch = useDispatch();
    const navigate = useNavigate();

    return async () => {
        try {
            const response = await TokenApi.post(url);
            tokenDispatch(tokenAction.setTokenName(token_config.tokenName));
            tokenDispatch(tokenAction.setTokenExpired(moment().add(10, 'seconds').format("yyyy-MM-DD HH:mm:ss")));
            return response.data; // 데이터 반환
        } catch (error) {
            if (error.response.status === 401) {
                alert("올바르지 않은 토큰입니다.");
                navigate('/');
                throw error;
            } else if (error.response.status === 403) {
                alert("관리자만 사용할 수 있습니다.");
                navigate('/');
                throw error;
            } else {
                // 다른 오류 처리
                console.error("Error:", error);
                navigate('/');
                throw error;
            }
        }
    };
}


// import TokenApi from "./TokenApi";
// import {tokenAction} from "./redux_store/slice/tokenSlice";
// import token_config from "./config/token_config";
// import moment from "moment";
// import {useDispatch} from "react-redux";
// import {useNavigate} from "react-router-dom";
// import {useEffect} from "react";
//
// export function useValidationUser(url) {
//     const tokenDispatch = useDispatch();    //useDispatch()를 통해 변경되는 값을 스토어로 전달한다.z
//     const navigate = useNavigate();
//
//     let res = null;
//
//     useEffect(() => {
//         const validationUser = async () => {
//
//
//             try {
//                 res = await TokenApi.post(url);   //TokenApi의 주소 + /user/validate
//                 tokenDispatch(tokenAction.setTokenName(token_config.tokenName));
//                 tokenDispatch(tokenAction.setTokenExpired(moment().add(10, 'seconds').format("yyyy-MM-DD HH:mm:ss")));
//
//             } catch (error) {
//                 if (error.response.status === 401) {
//                     alert('올바르지 않은 토큰입니다.');
//                     navigate('/');
//                 }
//                 if (error.response.status === 403) {
//                     alert('관리자만 사용할 수 있습니다.');
//                     navigate('/');
//                 }
//                 else {
//                     // 다른 오류 처리
//                     console.error('Error:', error);
//                 }
//             }
//         }
//         validationUser()
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
//
//     console.log('res => ' + res);
//     console.log('res => ' + res.data);
//
//     return res;
// }