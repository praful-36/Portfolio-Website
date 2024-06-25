// backend/routes/contact.js
const router = require('express').Router();
let contact = require('../Models/Contact.js');


router.route('/').post((req, res) => {
  const newContact = new contact(req.body);

  newContact.save()
    .then(() => res.json('Contact added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
