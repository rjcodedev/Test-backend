class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }

//   send(res) {
//     res.status(this.statusCode).json({
//       success: this.success,
//       message: this.message,
//       data: this.data,
//     });
//   }

//   error(res, error) {
//     res.status(500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//       error: error.errors || [],
//     });
//   }
}

export { ApiResponse };
