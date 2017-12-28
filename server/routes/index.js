var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
})

var User = mongoose.model('UserData', UserSchema);

/* GET home page. */
router.get('/users', function(req, res, next) {
  User.find(function (err, data) {
    if (err) console.log(err);
    res.send(data)
  })
});
router.post('/users', function (req, res, next){
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })

  user.save(function(err, data){
      if (err) return console.log(err);
      console.log(data);
  })
  res.send('user saved')
})

router.delete('/users', function(req, res, next) {
  console.log(req.body)
  User.remove({firstName: req.body.firstName}, function (err){
    if (err) console.log(err);

  })
  res.status(200).send({message: 'User Deleted'})
})
module.exports = router;
