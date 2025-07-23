const asyncHandler = (requestHandler) => {
  // callback function must return to avoid error
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// const asyncHandler= () =>{}
// const asyncHandler= (fn)=> () =>{} same as const asyncHandler= (fn)=> {return () =>{}}

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (err) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message || "Internal Server Error",
//     });
//   }
// };
// export { asyncHandler };
