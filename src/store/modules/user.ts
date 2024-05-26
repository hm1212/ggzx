//创建用户相关小仓库
import {defineStore} from "pinia";
import {LoginForm, LoginResponseData} from "@/api/user/type.ts";
import {ReqLogin} from "@/api/user";
import {TokenData} from "@/store/modules/types/type.ts";
import {GET_TOKEN, SET_TOKEN} from "@/utils/token.ts";

let userStore = defineStore('User', {
    state: (): TokenData => {
        return {
            token: GET_TOKEN()
        };
    },
    actions: {
        async userLogin(data: LoginForm) {
            let res: LoginResponseData = await ReqLogin(data);
            if (res.code == 200) {
                //存储token
                this.token = (res.data.token as string);
                SET_TOKEN(res.data.token as string);
                console.log(this.token)
                return "ok";
            } else {
                return Promise.reject(new Error(res.data.message));
            }
        }
    },
    getters: {}
})
export default userStore;