import Jsonp from 'jsonp'
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
}