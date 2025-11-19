export function logError(error, req) {
  const log = {
    timestamp: new Date().toISOString(),
    message: error.message,
    status: error.status || 500,
    method: req.method,
    path: req.originalUrl,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
  };

  console.error(JSON.stringify(log, null, 2));
}
