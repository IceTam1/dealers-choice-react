const { syncAndSeed, models: { Sandwich } } = require('./db');
const express = require('express')
const app = express();
const path = require('path')

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/sandwiches', async(req, res, next) => {
  try {
    res.send(await Sandwich.findAll())
  }
  catch (ex) {
    next(ex)
  }
})

app.get('/api/sandwiches/:id', async(req, res, next)=> {
  try { 
    res.send(await Sandwich.findByPk(req.params.id));
   }
  catch (ex) {
    next(ex)
   } 
})

const start = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000
    app.listen(port, ()=> console.log(`listening on port ${3000}`))
  }
  catch (ex) {
    console.log(ex)
  }
}

start();