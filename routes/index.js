const { Router } = require('express');

const UserRoutes = require('./user.routes');

const router = new Router();

router.use('/users', UserRoutes);

module.exports = router;
