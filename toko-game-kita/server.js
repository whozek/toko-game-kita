const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/games', (req, res) => {
    res.json([
        { id: 1, name: "Harvester Gun", price: 10.08, oldPrice: 13.23, disc: "23%", img: "https://placehold.co/300x300/1a1b3a/white?text=Gun" },
        { id: 2, name: "Candy Cane Knife", price: 8.82, oldPrice: 9.45, disc: "6%", img: "https://placehold.co/300x300/1a1b3a/white?text=Knife" }
    ]);
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));