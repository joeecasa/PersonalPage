const {body} = require("express-validator")

const validationContact = [
    body("name").notEmpty().withMessage("Debe introducir su nombre y apellido").bail().isLength({min:6}).withMessage("Minimo 6 caracteres"),
    body("email","Debe introducir un email valido").isEmail(),
    body("msg","Debe introducir un mensaje").notEmpty()
]



module.exports = validationContact