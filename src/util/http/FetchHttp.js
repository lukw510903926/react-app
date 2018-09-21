export default class FetchHttp {

    static getHeader() {
        let headers = new Headers();
        headers.append("Content-Type", "text/plain");
        headers.append("X-My-Custom-Header", "CustomValue");
        headers.append("CLOUD_HEADER", "CLOUD_HEADER_VALUE");
        headers.set("Content-Type", "application/json");
        return headers;
    }

    /**
     * GET 请求
     * @param url 请求地址
     * @param callback 回调函数
     */
    static getRequest = (url, callback) => {
        fetch(url, {
            method: "GET",
            credentials: "include",
            headers: FetchHttp.getHeader()
        }).then(response => callback(response.json()))
            .catch(err => console.log("Fetch错误:" + err));
    };

    /**
     * POST请求
     * @param url 请求地址
     * @param params 请求参数
     * @param callback 回调函数
     */
    static postRequest = (url, params, callback) => {
        let data = new FormData();
        data.append("name", "hello");
        fetch(url, {
            method: "post",
            body: JSON.stringify(params),
            mode: "cors",
            headers: FetchHttp.getHeader()
        }).then(response => callback(response.json()))
            .catch(error => console.info(error));
    };
}
