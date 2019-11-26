import createHistory from 'history/createBrowserHistory'

let options = process.env.NODE_ENV === 'production' ? { basename: '/jegyek' } : {}
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory(options)

export default history
