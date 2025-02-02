const asyncHandler = (requestHandler) => {
  (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((error) => next (error));
  }
};


export {asyncHandler};

// next option

// const asuncHandler = (func) => async(req, res, next) => {
// try{
//  await func(req, res, next)
// }catch(error){
//        res.status(err.code || 500).json({
//        success:false,
//        message: err.message
// })
// }

// }