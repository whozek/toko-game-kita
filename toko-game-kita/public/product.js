// Simpan data produk di sini supaya senang edit
const products = [
    { 
        id: 1, 
        name: "Harvester Gun", 
        price: 35.50, 
        oldPrice: 45.00, 
        disc: "21%", 
        img: "https://placehold.co/300x300/1a1b3a/white?text=Gun",
        stock: "In Stock"
    },
    { 
        id: 2, 
        name: "Candy Cane Knife", 
        price: 28.00, 
        oldPrice: 32.00, 
        disc: "12%", 
        img: "https://placehold.co/300x300/1a1b3a/white?text=Knife",
        stock: "Low Stock"
    },
    { 
        id: 3, 
        name: "Heartblade Knife", 
        price: 50.00, 
        oldPrice: 65.00, 
        disc: "23%", 
        img: "https://placehold.co/300x300/1a1b3a/white?text=Heart",
        stock: "In Stock"
    },
    { 
        id: 4, 
        name: "Luger Gun", 
        price: 42.00, 
        oldPrice: 50.00, 
        disc: "16%", 
        img: "https://placehold.co/300x300/1a1b3a/white?text=Luger",
        stock: "Out of Stock"
    }
];

// Supaya file lain boleh baca data ini
window.gameProducts = products;