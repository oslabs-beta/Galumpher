module.exports = {
  createError: (errInfo, method) => {
    return {
      log: `${errInfo}`,
      status: 409,
      message: { err: `Error occured in ${method}. Check server logs for more details.` }
    };
  }
};