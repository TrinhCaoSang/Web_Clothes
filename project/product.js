function products(id, name, amount, price, imgsrc){
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.image = new Image();
    this.image.src = imgsrc;
}

const prd = [
    new products('SP001', 'Giày 01', 100, 100.000),
    new products('SP002', 'Giày 02', 100, 100.000),
    new products('SP003', 'Giày 03', 100, 100.000),
    new products('SP004', 'Giày 04', 100, 100.000),
    new products('SP005', 'Giày 05', 100, 100.000),
    new products('SP006', 'Giày 06', 100, 100.000),
    new products('SP007', 'Giày 07', 100, 100.000),
    new products('SP008', 'Giày 08', 100, 100.000),
    new products('SP009', 'Giày 09', 100, 100.000),
    new products('SP010', 'Giày 10', 100, 100.000),
    new products('SP011', 'Giày 11', 100, 100.000),
];

const prdContainer = document.getElementById('container');
prd.forEach(products =>{
    const productHandler = document.createElement('div');
    productHandler.className = 'productHandler';
    
    const productName = document.createElement('h1');
    productName.textContent = products.name;

    //const productImage = products.image;

    const productAmount = document.createElement('p');
    productAmount.textContent = `Amount: ${products.amount}`;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${products.price.toFixed(2)}`;

    productHandler.appendChild(productName);
    //productHandler.appendChild(productImage);
    productHandler.appendChild(productAmount);
    productHandler.appendChild(productPrice);

    prdContainer.appendChild(productHandler);
});