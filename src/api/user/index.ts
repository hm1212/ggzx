import request from '@/utils/request';
import {LoginForm, LoginResponseData, UserResponseData} from "@/api/user/type.ts";

enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',

}

export const ReqLogin = (data: LoginForm) => request.post<any, LoginResponseData>(API.LOGIN_URL, data);
export const ReqUserInfo = () => request.get<any, UserResponseData>(API.USERINFO_URL);