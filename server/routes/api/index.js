const express = require("express");
const User  = require("../../models/user");
const router = express.Router();


//@ route GET api/users
//@ desc Get All users
//@ access public
router.get('/',(req, res) => {
    User.find()
       .sort({create:-1})
       .then(users => res.json(users))
      
});

//@ route POST api/users
//@ desc Create A User
//@ access public
router.post('/',(req, res) => {
    //console.log(req.body);
    let newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password,
        email:req.body.email
    })
    newUser.save()
        .then(user =>res.json(user))
        .catch(errr =>res.json(err));
      
});

//@ route DELETE api/users
//@ desc Delete  A User
//@ access public
router.delete('/:id',(req, res) => {
    User.findById(req.params.id)
       .then(user => user.remove().then(() =>res.json({success:true})))
       .catch(err => res.status(404).json({success:false}));
      
});

module.exports= router;