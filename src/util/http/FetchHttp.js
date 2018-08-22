export default class FetchHttp {

  static getHeader() {
    let headers = new Headers();
    headers.append("Content-Type", "text/plain");
    headers.append("X-My-Custom-Header", "CustomValue");
    headers.append("CLOUD_HEADER", "CLOUD_HEADER_VALUE");
    headers.set("Content-Type", "application/json");
    return headers;
  }

  static getRequest = (url, callback) => {
    fetch(url, {
      method: "GET",
      credentials: "include",
      headers: FetchHttp.getHeader()
    }).then(response => response.json().then(data => callback(data))
    ).catch(err => console.log("Fetch错误:" + err));
  };

  static postRequest = (url, params, callback) => {
    let data = new FormData();
    data.append("name", "hello");
    fetch(url, {
      method: "post",
      body: JSON.stringify(params),
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then((response) => {
      response.json().then(function(data) {
        callback(data);
      });
    }).catch(function(error) {
      console.info(error);
    });
  };
}
