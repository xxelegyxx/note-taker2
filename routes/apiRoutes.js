const noteData = require('../db/db');


module.exports = (app) => {

    
    app.get('/api/notes', (req, res) => res.json(noteData));

    
    app.post('/api/notes', (req, res) => {noteData.push(req.body)} );

    
    app.post('/api/clear', (req,res) => {noteData.length = 0} );

}