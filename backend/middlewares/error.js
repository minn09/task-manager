import { logError } from "../logger.js";
import ApiError from "../ApiError.js";

export const errorHandler = (err, req, res, next) => {
  logError(err, req)

  const status = err instanceof ApiError ? err.status : 500;

  res.status(status).json({
    success: false,
    error: err.message || 'Internal Server Error'
  })
}
