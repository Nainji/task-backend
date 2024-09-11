
const express = require('express');
const app = express();
const db = require('./db');
const cors=require('cors');
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3000;


app.post('/tasks', (req, res) => {
    const { description } = req.body;
    let created_at = new Date()
    db.query('INSERT INTO task_list (description, created_at) VALUES (?, ?)', [description, created_at], (err, results) => {
        if (err) {
            return res.status(500).json({status:false, error: err.message });
        }
        res.status(201).json({status:true,data:{ id: results.insertId, description ,created_at:created_at}});
    });
});


app.get('/tasks', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM task_list', [id], (err, results) => {
      if (err) {
        return res.status(500).json({status:false, error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({status:true,data:results});
    });
  });


  app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM task_list WHERE id = ?', [id], (err, results) => {
      if (err) {
        return res.status(500).json({status:false, error: err.message });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json({status:true,message:"Task Deleted Successfully"});
    });
  });
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
