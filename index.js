const express = require('express');
const port = 3000;
const app = express();

app.set('views engine', 'ejs');
app.set('views')


app.listen(() => {
    console.log(`l'application écoute sur le port ${port}`);
    console.log(`l'application est disponible sur http://localhost:${port}`);
})