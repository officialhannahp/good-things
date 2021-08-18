const controller = require('../controllers/controller');

    module.exports = app => {
// CREATE
app.post('/uploadImage')
app.post('/api/jewelry/new', controller.createJewelry);
// READ
app.get('/api/jewelry', controller.getAllJewelry);
app.get('/api/jewelry/:id', controller.getOneJewelry);
// UPDATE
app.put('/api/jewelry/:id/update', controller.updateJewelry);
// DELETE
app.delete('/api/jewelry/:id/delete', controller.deleteJewelry);    }