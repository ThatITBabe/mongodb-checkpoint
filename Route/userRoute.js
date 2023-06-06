const express =     require("express")
const router = express.Router()

const userSchema = require("../Model/userModel");


router.get('/user', (req, res) => {
    userSchema.find()
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
});
router.post('/users', (req, res) => {
    const newUser = new userSchema({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        phone: req.body.phone,
        job: req.body.job,
        address: [{
            number: req.body.number,
            street: req.body.street,
            lga: req.body.lga,
            state: req.body.state,
            country: req.body.country,
        }]
    })
    newUser.save()
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(400).json({error: err.message})
    })
});
router.put('/users/:id', (req, res) => {
        const userId = req.params.id; // Get the user ID from the URL parameter
        const updatedUser = {
          name: req.body.name,
          email: req.body.email,
          age: req.body.age,
          phone: req.body.phone,
          job: req.body.job,
          address: {
            number: req.body.number,
            street: req.body.street,
            lga: req.body.lga,
            state: req.body.state,
            country: req.body.country,
          },
        };
      
        userSchema.findByIdAndUpdate(userId, updatedUser, { new: true })
          .then(updatedUser => {
            if (!updatedUser) {
              return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(updatedUser);
          })
          .catch(err => {
            res.status(400).json({ error: err.message });
          });
      });


router.delete('/users/:id', (req, res) => {
    res.send({
        type: "DELETE"
    })
});













module.exports = router