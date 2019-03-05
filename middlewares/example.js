
// example middleware function

let exampleMiddleware = (req, res, next) => {
    req.user = {'firstName': 'vivek', 'lastName':'rai'}
    next();
}

module.exports = {
    exampleMiddleware: exampleMiddleware
}