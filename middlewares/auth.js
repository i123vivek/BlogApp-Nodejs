
/* Const Library */
const logger = require('./../libs/loggerLib')
const response = require('./../libs/responseLib')
const check = require('./../libs/checkLib')

let isAuthenticated = (req, res, next) => {
  if (req.params.authToken || req.query.authToken || req.header('authToken')) {
    if(req.params.authToken=="Admin1" || req.query.authToken=="Admin1" || req.header('authToken')=="Admin1"){
      req.user = {fullName:'Admin1',userId:'Admin1'}
      next();
    }
    else{
      logger.error('Incorrect authentication token', 'Authentication Middleware', 5)
      let apiResponse = response.generate(true, 'Incorrect authentication token', 403, null)
      res.send(apiResponse)
    }
  } else {
    logger.error('Authentication Token Missing', 'Authentication Middleware', 5)
    let apiResponse = response.generate(true, 'Authentication Token Is Missing In Request', 403, null)
    res.send(apiResponse)
  }
}



module.exports = {
  isAuthenticated: isAuthenticated
}
