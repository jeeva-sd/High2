// HTTP
import Http from './http';

const http = new Http('https://tags.jee6.in');
const http_yt = new Http('https://suggestqueries.google.com');
const http_high = new Http('http://localhost:1314');

export {
    http, http_yt, http_high
};