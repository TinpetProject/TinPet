module.exports = {
  tryCatchBlock: (validateFunc, next) => {
    return (reqBody, controller) => {
      const validRequest = validateFunc(req.body);
      if (!validRequest) return next(new HttpError("GET_PROFILE_INVALID_SCHEMA", 400));

      try {
        const validUserId = await User.validateUserId(req.body.userId);
        if (!validUserId) return next(new HttpError("GET_PROFILE_NOT_EXIST", 404));

        const userProfile = await User.getProfile(req.body.userId);
        console.log(userProfile);
        return res.status(200).send({ message: "GET_PROFILE_SUCCESS", data: userProfile });
      } catch (error) {
        next(error);
      }
    };
  },
};
