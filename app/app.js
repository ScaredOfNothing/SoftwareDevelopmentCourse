const defaultOptions = {
    method: METHOD,
    headers: new Headers({
        'Content-type': 'application/json',
        'X-Request-ID': new Date().getTime().toString(),
    }),
};

const fetch = require("node-fetch");

var myHeaders = new fetch.Headers();