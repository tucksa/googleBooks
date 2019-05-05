const router = require('express').Router();
const booksController = require('../controllers/booksController');


//Routes to /api/books
router.route('/api/books')
    .get(booksController.findAll)
    .post(booksController.create);

//Routes to /api/books/:id
router.route('/api/books/:id')
    .delete(booksController.remove)

module.exports = router;