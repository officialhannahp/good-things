const Jewelry = require('../models/models');
    module.exports = {
    // CREATE
    uploadImage: (req, res) => {
        Jewelry.create(req.body)
            .then(image => res.json({ message: "success", results: image }))
            .catch(err => res.json({ message: "error", results: err }));
    },

    createJewelry: (req, res) => {
        Jewelry.create(req.body)
            .then(jewelry => res.json({ message: "success", results: jewelry }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // READ
    getAllJewelry: (req, res) => {
        Jewelry.find()
            .then(jewelry => res.json({ message: "success", results: jewelry }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    getOneJewelry: (req, res) => {
        Jewelry.findOne({_id:req.params.id})
            .then(jewelry => res.json({ message: "success", results: jewelry }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // UPDATE
    updateJewelry: (req, res) => {
        Jewelry.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true })
            .then(jewelry => res.json({ message: "success", results: jewelry }))
            .catch(err => res.json({ message: "error", results: err }));
    },
    // DELETE
    deleteJewelry: (req, res) => {
        Jewelry.findByIdAndDelete(req.params._id)
            .then(jewelry => res.json({ message: "success", results: jewelry }))
            .catch(err => res.json({ message: "error", results: err }));
    }
}