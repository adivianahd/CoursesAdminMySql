var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test',(req, res) => {
  db.query("SELECT * FROM usuarios" )

    return sendStatus(200);
});

router.get('/test1', (req, res) => {
  const user = {
    idusuarios : "20413261",
    name : "astrid",
    surname : "hernandez"
  }
  
  db.query("INSERT INTO usuarios SET ?", user, (err, data) => {
    console.log(1, err);
    console.log(2, data);
  
  });
 
});



module.exports = router;
