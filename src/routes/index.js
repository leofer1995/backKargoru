const { Router } = require('express');

const clientsRouter = require('./clients');
const quotationRouter = require('./quotations');
const conceptRouter = require('./concepts');

const router = Router();

router.use('/clients', clientsRouter)
router.use('/quotation', quotationRouter);
router.use('/concept', conceptRouter);
// router.use('/seller', sellerRouter);

module.exports = router