let express = require('express')

let app = express()

app.set('view engine','pug')

app.use('/public',express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})



app.listen(3000,function(err){
	if (err) return console.log('Hubo un Error',process.exit(1))

	console.log(__dirname)

	console.log('Platzigram Escuchando en el puerto 3000')
})