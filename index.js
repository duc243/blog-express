const express = require('express');
const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index");
});


app.listen(port, () => {
    console.log(`l'application écoute sur le port ${port}`);
    console.log(`l'application est disponible sur http://localhost:${port}`);
})