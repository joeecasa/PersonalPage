const path = require("path")
const fs = require("fs")
const { validationResult } = require('express-validator')




const mainController = {
    index: (req, res) => {
        res.render("index")
    },
    contact: (req, res) => {

        res.render("contact")
    },
    processContact: (req, res) => {
        const pathLogContact = path.join(__dirname, "../logs/contact.json")
        const errors = validationResult(req)
        console.log(req.body)

        if(!errors.isEmpty()){
            res.render("contact",{errors:errors.mapped(), old : req.body, title : "Contacto"})
        } else {
            let logForm = {
                name : req.body.name,
                email : req.body.email,
                mensaje : req.body.msg
       
               }
               let NewMsg = []
               const readContactJson = fs.readFileSync(pathLogContact)
       
               NewMsg = JSON.parse(readContactJson)
               NewMsg.push(logForm)
       
               fs.writeFileSync(pathLogContact,JSON.stringify(NewMsg,null, "\t"))
       
               
       
               res.render("msgSuccess",{title:"Contacto"})
        }
        
        


    }
}

module.exports = mainController

