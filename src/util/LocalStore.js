import { Cookies } from "react-cookie";

export default class LocalStore {

  static cookies = new Cookies();

  static default_time_out = 30 * 60 * 1000;

  static setItem(key, value) {
    localStorage.setItem(key, value);
  }

  static getItem(key) {
    return localStorage.getItem(key);
  }

  static clearStorage() {
    localStorage.clear();
  }

  static setSessionItem(key, value) {
    sessionStorage.setItem(key, value);
  }

  static getSessionItem(key) {
    return sessionStorage.getItem(key);
  }

  static clearSessionItem() {
    sessionStorage.clear();
  }

  /**
   * 设定cookie
   * @param key
   * @param value
   * @param options {path?: string; expires?: Date; maxAge?: number; domain?: string; secure?: boolean; httpOnly?: boolean;}
   */
  static setCookie(key, value, options = {}) {

    if (!options.expires) {
      let now = new Date().getTime();
      options.expires = new Date(now + this.default_time_out);
    }
    this.cookies.set(key, value, options);
  }

  /**
   * 删除cookie
   * @param key
   * @param options {path?: string; expires?: Date; maxAge?: number; domain?: string; secure?: boolean; httpOnly?: boolean;}
   */
  static deleteCookie(key, options = {}) {
    let now = new Date().getTime();
    options.expires = new Date(now - this.default_time_out);
    this.cookies.remove(key, options);
  }
}
