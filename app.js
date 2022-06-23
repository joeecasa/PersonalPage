// ************ Require's ************/
const express = require("express")
const path = require("path")
const publicPath = path.resolve(__dirname,'./public')


/*** Main Router (require) */
const mainRoutes = require('./routes/mainRoutes')

// ************ Express() ************/
const app = express()


// ************  Middlewares ************/

app.use(express.static(publicPath))



//permite capturar la información que se envía desde un formulario vía post en req.body
app.use(express.urlencoded({extended:false}))

//Configurando EJS
app.set('view engine', 'ejs')

/*** Main Router (use) */
app.use('/',mainRoutes)

/*** Error (404) */
app.use((req, res, next)=>{
    res.status(404).render('error404')
});

//Definiendo pueto y levantando servidor
const puerto = 5000
app.listen(process.env.PORT || puerto, ()=>console.log("Servidor corriendo en el puerto ---> " + puerto))