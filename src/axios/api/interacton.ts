import request from "../../axios/index";

export function selectAllFocus(data: any) {
    return request({
        method: "post",
        url: "/api/selectAllFocus",
        data: data,
    });
}


export function selectFocus(data: any) {
    return request({
        method: "post",
        url: "/api/selectFocus",
        data: data,
    });
}


export function addFocus(data: any) {
    return request({
        method: "post",
        url: "/api/addFocus",
        data: data,
    });
}

export function deleteFocus(data: any) {
    return request({
        method: "post",
        url: "/api/deleteFocus",
        data: data,
    });
}

export function selectFans(data: any) {
    return request({
        method: "post",
        url: "/api/selectFans",
        data: data,
    });
}

export function selectComments(data: any) {
    return request({
        method: "post",
        url: "/api/selectComments",
        data: data,
    });
}

export function addComments(data: any) {
    return request({
        method: "post",
        url: "/api/addComments",
        data: data,
    });
}

export function deleteComments(data: any) {
    return request({
        method: "post",
        url: "/api/deleteComments",
        data: data,
    });
}

export function selectLove(data: any) {
    return request({
        method: "post",
        url: "/api/selectLove",
        data: data,
    });
}

export function judgeLoveCollect(data: any) {
    return request({
        method: "post",
        url: "/api/judgeLoveCollect",
        data: data,
    });
}




export function addLove(data: any) {
    return request({
        method: "post",
        url: "/api/addLove",
        data: data,
    });
}

export function deleteLove(data: any) {
    return request({
        method: "post",
        url: "/api/deleteLove",
        data: data,
    });
}

export function selectCollect(data: any) {
    return request({
        method: "post",
        url: "/api/selectCollect",
        data: data,
    });
}


export function addCollect(data: any) {
    return request({
        method: "post",
        url: "/api/addCollect",
        data: data,
    });
}



export function deleteCollect(data: any) {
    return request({
        method: "post",
        url: "/api/deleteCollect",
        data: data,
    });
}


export function selectLoveCollectNum(data: any) {
    return request({
        method: "post",
        url: "/api/selectLoveCollectNum",
        data: data,
    });
}


