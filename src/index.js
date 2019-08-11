const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'src/uploads/' });
const app = express();

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares

//Routes

app.get('/', (req, res) => {
	res.render('index');
});

app.post('/upload', upload.single('file'), (req, res) => {
	console.log(req.file);
});

//Star the server 
app.listen(app.get('port'), () => {
	console.log('Server on port ', app.get('port'));
});