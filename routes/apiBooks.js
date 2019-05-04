const router = require('express').Router();
const booksController = require('../controllers/booksController');


//Routes to /api/books
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create);

//Routes to /api/books/:id
router.route('/:id')
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove)

module.exports = router;