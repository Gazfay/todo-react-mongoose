import 'whatwg-fetch';

const httpFetch = (url, options = {method: 'GET'}) => {
  let params = {
    method: options.method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (options.method !== 'HEAD' && options.method !== 'GET'){
      params['body'] = JSON.stringify(options.body) || {}
  }

  return fetch(url)
    .then((r) => {
      console.log(r);
      return r
    })
    .then((r) => r.json())
    .catch((r)=> {
      console.log(r);
      return {};
    });
};



window.getQuery = httpFetch;

export default httpFetch;