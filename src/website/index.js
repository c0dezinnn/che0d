const { connect } = require('mongoose')
const Models = require('../database/models/Models.js')
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.set('views',__dirname+'/site')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/public'))
app.listen(port, async () => {
    console.log(`Tudo Azur`)
  
    const connection  = require('../../db')
    connection.connectdb();
  
  app.get('/', (req,res) => {
    res.render("home.ejs")
  })
  
  app.get('/dashboard', (req,res) => {
    res.redirect("/lang/dashboard")
  })

  app.get("/dashboard.css", (req,res) => {
res.sendfile("/style.css")
})

  app.get("/logo.png", (req,res) => {
res.sendfile("./src/website/site/logo.png")
})

  app.get('/lang/dashboard', (req,res) => {
    res.cookie('vvvvvvvvvvvvvvb', 'cookieValue')
    res.render("dashboard.ejs")
  })
    /*const connection = await connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Database conectada com sucesso!')

    this.db = { connection, ...Models }
    */
})