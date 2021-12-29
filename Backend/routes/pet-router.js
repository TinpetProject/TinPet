const express = require("express");
const router = express.Router();
const petController = require("../controllers/pet-controller.js");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);

router.get("/own", petController.getOwnPet);

router.get("/pet-suggestion", petController.getPetSuggestion);

router.put("/like", petController.sendLike);

router.put("/follow", petController.sendFollow);

module.exports = router;