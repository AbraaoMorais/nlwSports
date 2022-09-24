import express from "express";
const app = express();
app.get('/ads', (req, res) => {
    console.log("opa!");
    return res.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 2, name: 'Anúncio 2' }
    ]);
});
app.listen(3333);
