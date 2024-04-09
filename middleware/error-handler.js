const errorHandlerMiddleware = ((err, req, res, next) => {
    console.log('err', err)
    res.status(err.status).json({msg: err.message})
  })


  module.exports = errorHandlerMiddleware