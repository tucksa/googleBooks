const db = require('../models/books');

module.exports = {
    findAll: (req, res) => {
        db.find(req.query)
          .sort( { date: -1 })
          .then(dbBooks => res.json(dbBooks))
          .catch( err => res.json(err))
    },
    findById: (req, res) => {
        db.findById(req.params.id)
          .then(dbBooks => res.json(dbBooks))
          .catch( err => res.json(err))
    },
    create: (req, res) => {
        db.create(req.body)
          .then(dbBooks => res.json(dbBooks))
          .catch(err => res.json(err))
    },
    update: (req,res) => {
        db.findOneAndUpdate({ _id: req.params.id}, req.body)
          .then(dbBooks => Response.json(dbBooks))
          .catch(err => res.json(err))
    },
    remove: (req, res) => {
        db.remove({ _id: req.params.id })
          .then(dbBooks => console.log(`you have removed: ${dbBooks}`))
          .catch(err => res.json(err))
    }
};