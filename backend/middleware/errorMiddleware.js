const errorHandler = (err, req, res, next) => {
  const ststusCode = res.ststusCode ? res.ststusCode : 500;
  res.status(ststusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
module.exports = {
  errorHandler,
};
