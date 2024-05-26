export interface LoginForm {
    username: string;
    password: string;
}

interface dataType {
    token?: string;
    message?: string;
}

export interface LoginResponseData {
    code: Number;
    data: dataType;
}

interface checkUser {
    userId: Number;
    avatar: string;
    username: string;
    password: string
    desc: string
    roles: string[];
    buttons: string[];
    routes: string[];
    token: string;
}

interface User {
    checkUser: checkUser;
}

export interface UserResponseData {
    code: Number;
    data: User
}