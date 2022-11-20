import request from "../../axios/index";

export function login(data: any) {
    return request({
        method: "post",
        url: "/api/login",
        data: data,
    });
}

export function register(data: any) {
    return request({
        method: "post",
        url: "/api/register",
        data: data,
    });
}

export function verificate(data: any) {
    return request({
        method: "post",
        url: "/api/verificate",
        data: data,
    });
}

export function findPassword(data: any) {
    return request({
        method: "post",
        url: "/api/findPassword",
        data: data,
    });
}




