const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
//http logger
//app.use(morgan('combined'))

//template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//Home, search , contact

// Route init
route(app)


//127.0.0.1 -localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


    

