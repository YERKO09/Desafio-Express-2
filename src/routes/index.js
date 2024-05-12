const router = require('express').Router();
const filesRouter = require('./files/filesRouter')
;
//Files Routes
router.use('/files', filesRouter);

module.exports = router;
