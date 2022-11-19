import request from "../../axios/index";

export function recommendArticle(data: any) {
    return request({
        method: "post",
        url: "/api/recommendArticle",
        data: data,
    });
}

// 关注发布
export function focuserArticle(data: any) {
    return request({
        method: "post",
        url: "/api/focuserArticle",
        data: data,
    });
}

// 按类加载
export function loadByClass(data: any) {
    return request({
        method: "post",
        url: "/api/loadByClass",
        data: data,
    });
}

// export function verificate(data: any) {
//     return request({
//         method: "post",
//         url: "/api/verificate",
//         data: data,
//     });
// }

// export function findPassword(data: any) {
//     return request({
//         method: "post",
//         url: "/api/findPassword",
//         data: data,
//     });
// }




