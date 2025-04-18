const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);
  
  export default asyncHandler;
  //avoid try-catch blocks in every route handler
  //this function will handle error without try-catch blocks