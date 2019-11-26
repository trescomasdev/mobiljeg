const REMOTE_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_REMOTE_URL  : process.env.REACT_APP_REMOTE_TEST_URL
const BARIONURL = process.env.NODE_ENV === 'development' || process.env.REACT_APP_BARION_TEST_MODE === "true" ? "api.test.barion.com" : "api.barion.com"
const BARIONKEY = process.env.NODE_ENV === 'development' || process.env.REACT_APP_BARION_TEST_MODE === "true" ? "c7fac0dccb2748c6814584a61f18bd7d" : "bb33c0ea62a24af8b1241ffa33f7bcf5"
const BARION_CALLBACK_URL = process.env.NODE_ENV === 'development' ? "http://localhost:7235/data/ticket/ticket-status" : "https://mobiljeg.hu:7235/data/ticket/ticket-status"
const BARION_RETURN_URL = process.env.NODE_ENV === 'development' ? "http://localhost:3000/jegyek/rendeles" : "https://mobiljeg.hu/jegyek/rendeles"
export { REMOTE_URL, BARIONKEY, BARIONURL, BARION_CALLBACK_URL, BARION_RETURN_URL }
