const REMOTE_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_REMOTE_URL  : process.env.REACT_APP_REMOTE_TEST_URL
const BARIONURL = process.env.NODE_ENV === 'production' ? "api.barion.com"  : "api.test.barion.com"
const BARIONKEY = process.env.NODE_ENV === 'production' ? "bb33c0ea62a24af8b1241ffa33f7bcf5" : "c7fac0dccb2748c6814584a61f18bd7d"
const BARION_CALLBACK_URL = process.env.NODE_ENV === 'production' ? "https://mobiljeg.hu:7235/data/ticket/ticket-status" : "http://localhost:7235/data/ticket/ticket-status"
const BARION_RETURN_URL = process.env.NODE_ENV === 'production' ? "https://mobiljeg.hu/jegyek/rendeles" : "http://localhost:3000/jegyek/rendeles"
export { REMOTE_URL, BARIONKEY, BARIONURL, BARION_CALLBACK_URL, BARION_RETURN_URL }