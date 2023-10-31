import {useEffect} from "react";
import token_config from "./config/token_config";
import axios from "axios";
import {tokenAction} from "./redux_store/slice/tokenSlice";
import moment from "moment";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {userStateAction} from "./redux_store/slice/userLoginSlice";
import userLogin_config from "./config/userLogin_config";

export function useKakaoLogin(code) {
    const tokenDispatch = useDispatch();
    const userLoginDispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const server = token_config.server;

        const kakaoLogin = async () => {

            try {
                const response = await axios.post(`${server}/kakao/login?code=${code}`);

                tokenDispatch(tokenAction.setTokenName(response.data.accessToken));
                tokenDispatch(tokenAction.setTokenExpired(moment().add(10, 'seconds').format("yyyy-MM-DD HH:mm:ss")));
                //userLoginDispatch(userStateAction.setState(true));
                userLogin_config.state = true;

                if (response.data.newUser > 0) {
                    alert('회원가입!!');
                } else {
                    alert('기존 회원');
                }

                navigate("/");
            } catch (error) {
                console.error("Kakao login error:", error);
            }
        }

        kakaoLogin();
    }, [code, tokenDispatch, navigate]);

    return null;
}