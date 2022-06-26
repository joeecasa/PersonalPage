const express = require('express')
const router = express.Router()
const mainController = require("../controllers/mainController")
const validationContact = require("../middlewares/ValidationsContact")

router.get("/",mainController.index)
router.get("/contact",mainController.contact)
router.post("/contact",validationContact,mainController.processContact)




module.exports = router