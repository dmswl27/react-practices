const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route('/messagelist').get(controller.readAllMessage);
router.route('/write').post(controller.createMessage);

module.exports = router;