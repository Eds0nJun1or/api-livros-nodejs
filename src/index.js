const express = require("express")
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000

const Livro = mongoose.model('Livro', { 
  title: String,
  genero: String,
  description: String,
  image_url: String
});

app.get("/", async (req, res) => {
  const livros = await Livro.find();
  return res.send(livros);
});

app.delete("/:id", async (req, res) => {
  const livro = await Livro.findByIdAndDelete(req.params.id);
  if (!livro) {
      return res.status(404).send("Livro não encontrado.");
  }
  return res.send(livro);
});

app.put("/:id", async (req, res) => {
  const livro = await Livro.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    genero: req.body.genero,
    description: req.body.description,
    image_url: req.body.image_url
  }, {
    new: true
  })
  return res.send(livro)
})

app.post("/", async (req, res) => {
    const livro = new Livro({
      title: req.body.title,
      genero: req.body.genero,
      description: req.body.description,
      image_url: req.body.image_url
    })

    await livro.save()
    res.send(livro)
})

app.listen(port, () => {
  mongoose.connect('mongodb+srv://edjr040702:GCyagEgLvBr7s4TX@edson-api.4ikdz5e.mongodb.net/?retryWrites=true&w=majority&appName=edson-api');
  console.log('App runing')
})
