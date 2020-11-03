const express = require('express');
const app = express();
const router = express.Router();


app.set('port', 3000);

app.use(express.static(__dirname))

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

router.get('/', (req, res) => {
    res.render('index.html')
})