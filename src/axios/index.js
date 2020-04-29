import Jsonp from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';
export default class Axios {
    static jsonp(options) {
        return new Promise((resole, reject) => {
            Jsonp(options.url, {
                param: 'callback'
            }, function(err, respone) {
                if(respone.status === 'success') {
                    resole(respone);
                } else {
                    reject(respone.message);
                }
            })
        })
    }
    static ajax(options) {
        let baseApi = ' https://easy-mock.com/mock/5ea79076b91d8b713ebf1e3e/api';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                params: (options.data && options.data.params) || '',
                timeout: 10000
            }).then((response) => {
                if(response.status === '200') {
                    let res = response.data;
                    console.log(res);
                    if(res.code === '0') {
                        resolve(res);
                    }else {
                        Modal.info({
                            title: "提示",
                            content: res.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        })
    }
}