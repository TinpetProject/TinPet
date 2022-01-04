const Pet = require("../models/pet");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const User = require("../models/user");


module.exports = {
    getOwnPet: tryCatchBlock(null, async (req, res, next) => {
        const userIDIsExist = await Pet.isUserIDExist(req.userData.userID);
        if (!userIDIsExist) return next(new HttpError("USERID_NOT_EXIST", 404));

        const pet = new Pet({ userID: req.userData.userID });
        const petProfile = await pet.getPetProfile();

        return res.status(200).send({ message: "GET_OWN_PET_SUCCESS", data: petProfile });
    }),

    getPetSuggestion: tryCatchBlock(null, async (req, res, next) => {
    const start = req.query.start;
    const end = req.query.end;

    const userIDIsExist = await Pet.isUserIDExist(req.userData.userID);
    if (!userIDIsExist) return next(new HttpError("GET_PROFILE_FAIL_USERID_NOT_EXIST", 404));

    const pet = new Pet({ userID: req.userData.userID });
    const petSuggestion = await pet.getPetSuggestion(start, end);
    return res.status(200).send({ message: "GET_SUGGEST_SUCCESS", data: petSuggestion });
    }),

    getRecentImgs: tryCatchBlock(null, async(req, res, next)=>{
        const userIDIsExist = await Pet.isUserIDExist(req.userData.userID);
        if (!userIDIsExist) return next(new HttpError("GET_PROFILE_FAIL_USERID_NOT_EXIST", 404));

        const pet = new Pet({ userID: req.userData.userID });
        const petImgs = await pet.getRecentImgs();
        return res.status(200).send({ message: "GET_RECENT_IMAGES_SUCCESS", data: petImgs });
    }),


    sendLike: tryCatchBlock(null, async (req, res, next) => {
        // follow
        const { targetUserID } = req.body;
        const userIDIsExist = await Pet.isUserIDExist(req.userData.userID);
        const targetPetIDIsExist = await Pet.isUserIDExist(targetUserID);
        if (!userIDIsExist || !targetPetIDIsExist) return next(new HttpError("LIKE_PROCESSING_FAIL_USERID_NOT_EXIST", 404));
        
        const pet = new Pet({ userID: req.userData.userID });
        const status = await pet.like(targetUserID);
        return res.status(200).send({ message: "LIKE_PROCESSING_SUCCESS", status: status });
    }),

    sendFollow: tryCatchBlock(null, async (req, res, next) => {
        
        const { targetUserID } = req.body;
        const userIDIsExist = await Pet.isUserIDExist(req.userData.userID);
        const targetPetIDIsExist = await Pet.isUserIDExist(targetUserID);
        if (!userIDIsExist || !targetPetIDIsExist) return next(new HttpError("FOLLOW_PROCESSING_FAIL_USERID_NOT_EXIST", 404));
        
        const pet = new Pet({ userID: req.userData.userID });
        const status = await pet.follow(targetUserID);
        return res.status(200).send({ message: "FOLLOW_PROCESSING_SUCCESS", status: status });
    }),

    testRedis: tryCatchBlock(null, async (req, res, next) => {
        console.log('hehe');
        const userIDIsExist = await Pet.isUserIDExist(req.userData.userID);
        if (!userIDIsExist) return next(new HttpError("USERID_NOT_EXIST", 404));

        const pet = new Pet({ userID: req.userData.userID });
        const result = await pet.testRedis();
        return res.status(200).send({ message: "TEST_REDIS_SUCCESS", data: result });
    }),

    getBreeds: tryCatchBlock(null, async (req, res, next) => {
        const pet = new Pet("");
        const petBreeds = await pet.getBreeds();
        return res.status(200).send({ message: "GET_BREAD", data: petBreeds });
    }),
    changeInfoPet: tryCatchBlock(null, async (req, res, next) => {
        const pet = new Pet("");
        await pet.changeInfoPet(req.body);
        return res.status(200).send({ message: "SAVE_COMPLETE_PROFILE_SUCCESSFULLY"})
    }),
  //waiting for sql query

  // getPostByOffset: tryCatchBlock(null, async (req, res, next) => {
  //   const userIDIsExist = await User.isUserIDExist(req.userData.userID);
  //   if (!userIDIsExist) return next(new HttpError("GET_POST_FAIL_USERID_NOT_EXIST", 404));

  //   const posts = await User.getPostByOffset(req.userData.userID, req.params.offset);
  //   return res.status(200).send({ message: "GET_POST_SUCCESS", data: imgs });
  // }),

  // likeProcessing: tryCatchBlock(null, async (req, res, next) => {
  //   const { targetUserID } = req.body;
  //   const userIDIsExist = await User.isUserIDExist(req.userData.userID);
  //   const targetUserIDIsExist = await User.isUserIDExist(targetUserID);
  //   if (!userIDIsExist || !targetUserIDIsExist) return next(new HttpError("LIKE_PROCESSING_FAIL_USERID_NOT_EXIST", 404));

  //   await User.like(userID, targetUserID);
  //   return res.status(200).send({ message: "LIKE_PROCESSING_SUCCESS", data: imgs });
  // }),

  // macthProcessing: tryCatchBlock(null, async (req, res, next) => {
  //   const { targetUserID } = req.body;
  //   const userIDIsExist = await User.isUserIDExist(req.userData.userID);
  //   const targetUserIDIsExist = await User.isUserIDExist(targetUserID);
  //   if (!userIDIsExist || !targetUserIDIsExist) return next(new HttpError("MATCH_PROCESSING_FAIL_USERID_NOT_EXIST", 404));

  //   await User.match(userID, targetUserID);
  //   return res.status(200).send({ message: "MATCH_PROCESSING_SUCCESS", data: imgs });
  // }),
};
