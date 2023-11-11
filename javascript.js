window.onload = function()
{
    
    slideShow();
    createProduct();
    showProduct();
}

function stylenum(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
var index_slideshow = 0;
function slideShow() {
    var i;
    var slides = document.getElementsByClassName('slideshow');
    for(i=0 ; i < slides.length;i++)
    {
        // console.log(slides.length);
        slides[i].style.display = "none";
    }
    index_slideshow++;
    if(index_slideshow > slides.length)
    {
        index_slideshow = 1;
    }
    // console.log(index_slideshow);
    slides[index_slideshow-1].style.display = "block";
    setTimeout(slideShow,3000);
}
function quantitydown() {
    if(document.getElementById('quantity').value > 1)
    {
        document.getElementById('quantity').value--;
    }
}

function quantityup() {
        document.getElementById('quantity').value++;
}
function showProductInfo(productID) {
    document.getElementById('productInfo').style.display = 'block';
    var arrayProduct = JSON.parse(localStorage.getItem('products'));
    for(var i =0; i<arrayProduct.length;i++)
    {
        if(arrayProduct[i].productID == productID)
        {
            document.getElementById('imgbig').src = arrayProduct[i].img;
            document.getElementById('productname').innerHTML = arrayProduct[i].name;
            document.getElementById('productprice').innerHTML = stylenum(arrayProduct[i].price);
        }
    }
    // hien thi san pham
}
function closeProductInfo() {
    document.getElementById('productInfo').style.display = 'none';
}

function createProduct() {
    if (localStorage.getItem('products'))
    {
    var productArray = [
        {
            productID: 22022,
            brand: 'tshirt',
            name: 'Áo Phông Nam Cotton Dáng Rộng',
            img: 'img/product/product22.webp',
            price: 299000
        },
        {
            productID: 22021,
            brand: 'polo',
            name: 'Áo Polo Zipper Predator Mẫu P3 Black Premium',
            img: 'img/product/product21.jpg',
            price: 359000
        },
        {
            productID: 22020,
            brand: 'sport',
            name: 'Áo Jersey Ngắn Tay Đạp Xe Đường Trường Essential',
            img: 'img/product/product20.avif',
            price: 145000
        },
        {
            productID: 22019,
            brand: 'sport',
            name: 'Áo Đá Bóng F100',
            img: 'img/product/product19.avif',
            price: 159000
        },
        {
            productID: 22018,
            brand: 'tshirt',
            name: 'Áo Thun Longoni Mẫu Next Gen',
            img: 'img/product/product18.webp',
            price: 299000
        },
        {
            productID: 22017,
            brand: 'polo',
            name: 'Áo Polo Nam Cổ Đức Cộc Tay',
            img: 'img/product/product17.webp',
            price: 499000
        },
        {
            productID: 22016,
            brand: 'sport',
            name: 'Áo Chạy Bộ Nam Thoáng Mát',
            img: 'img/product/product16.avif',
            price: 159000
        },
        {
            productID: 22015,
            brand: 'tshirt',
            name: 'Áo Thun Mẫu Pug - Pugnana',
            img: 'img/product/product15.jpg',
            price: 299000
        },
        {
            productID: 22014,
            brand: 'sport',
            name: 'Áo Đá Bóng Viralto',
            img: 'img/product/product14.avif',
            price: 559000
        },
        {
            productID: 22013,
            brand: 'shirt',
            name: 'Áo Sơ Mi Nam Cotton Flannel',
            img: 'img/product/product13.webp',
            price: 450000
        },
        {
            productID: 22012,
            brand: 'sport',
            name: 'Áo Đá Bóng Viralto LTD',
            img: 'img/product/product12.png',
            price: 325000
        },
        {
            productID: 22011,
            brand: 'shirt',
            name: 'Áo Sơ Mi Cotton Cổ Đức Tay Dài',
            img: 'img/product/product11.jpg',
            price: 449000
        },
        {
            productID: 22010,
            brand: 'tshirt',
            name: 'Áo Thun Mit Cues Đen',
            img: 'img/product/product10.png',
            price: 249000
        },
        {
            productID: 22009,
            brand: 'sport',
            name: 'Áo Thể Thao Tay Ngắn Mẫu "GERMAN"',
            img: 'img/product/product9.jpg',
            price: 549000
        },
        {
            productID: 22008,
            brand: 'shirt',
            name: 'Áo Sơ Mi Nam Cotton Flannel',
            img: 'img/product/product8.webp',
            price: 349000
        },
        {
            productID: 22007,
            brand: 'polo',
            name: 'Áo Polo Tay Dài Đen Mẫu Longoni',
            img: 'img/product/product7.png',
            price: 399000
        },
        {
            productID: 22006,
            brand: 'tshirt',
            name: 'Áo Thun Trắng Mẫu Peri',
            img: 'img/product/product6.png',
            price: 250000
        },
        {
            productID: 22005,
            brand: 'tshirt',
            name: 'Áo Thun Mẫu Wildflower',
            img: 'img/product/product5.png',
            price: 299000
        },
        {
            productID: 22004,
            brand: 'sport',
            name: 'Áo Thể Thao Tay Ngắn Mẫu Spirt',
            img: 'img/product/product4.png',
            price: 399000
        },
        {
            productID: 22003,
            brand: 'tshirt',
            name: 'Áo Phông Nam Cotton Basic Dáng Suông',
            img: 'img/product/product3.webp',
            price: 299000
        },
        {
            productID: 22002,
            brand: 'polo',
            name: 'Áo Polo Sợi Nam Dài Tay Dáng Suông',
            img: 'img/product/product2.webp',
            price: 690000
        },
        {
            productID: 22001,
            brand: 'polo',
            name: 'Áo Polo Mezz Đen Mẫu Professional',
            img: 'img/product/product1.png',
            price: 370000
        },
    ];
    localStorage.setItem('products', JSON.stringify(productArray));
    }
}

var currrentPage = 1;
var perPage = 12; 
var perProduct = [];
var arrayProduct = [];
function showProduct() {
    arrayProduct = JSON.parse(localStorage.getItem('products'));
    perProduct = arrayProduct.slice((currrentPage-1)*perPage,(currrentPage-1)*perPage + perPage);
        var lienket = '';
        var totalpage = Math.ceil(arrayProduct.length / perPage);
        for (var i = 1; i <= totalpage; i++) {
            var a = '<li onclick= handlePageNum('+ i + ')>'  + i + '</li>';
            lienket += '<ul class="pageNum">' + a + '</ul>';
        }
        document.getElementById('page').innerHTML = lienket;
        var s='';
        for(var i = 0; i<perProduct.length; i++)
        {   
            s += 
            '<div class="card">' +
                '<div class="card_product">' + 
                '<img src="' + perProduct[i].img + '">' +
                '</div>' + 
                '<p class="name_product">' + perProduct[i].name + '</p>' +
                '<p>' + "Giá: " + '<span class="price">' +stylenum(perProduct[i].price) + '</span>' + '</p>' +
                '<button class="btn_product" onclick=showProductInfo(' +perProduct[i].productID +')>' + "Chi tiết" + '</button>' +
            '</div>' ;
        }
        document.getElementById('product').innerHTML = s;
}

function handlePageNum(num) {
    currrentPage = num;
    perProduct = arrayProduct.slice((currrentPage-1)*perPage,(currrentPage-1)*perPage + perPage);
    var s ='';
    for(var i = 0; i<perProduct.length; i++)
    {   
        s += 
        '<div class="card">' +
            '<div class="card_product">' + 
            '<img src="' + perProduct[i].img + '">' +
            '</div>' + 
            '<p class="name_product">' + perProduct[i].name + '</p>' +
            '<p>' + "Giá: " + '<span class="price">' +stylenum(perProduct[i].price) + '</span>' + '</p>' +
            '<button class="btn_product" onclick=showProductInfo(' +perProduct[i].productID +')>' + "Chi tiết" + '</button>' +
            '</div>' ;
    }
    document.getElementById('product').innerHTML = s;
}

var perMenu = [];
var arrayMenu = [];
function showproductMenu(menu) {
    if(arrayMenu.length > 0)
    {
        arrayMenu = [];
    } 
    arrayProduct = JSON.parse(localStorage.getItem('products'));
    for(var i=0;i<arrayProduct.length;i++)
    {
        if(arrayProduct[i].brand == menu)
            {
                arrayMenu.push(arrayProduct[i]);
            }
    }
    perMenu = arrayMenu.slice((currrentPage-1)*perPage,(currrentPage-1)*perPage + perPage);  
    var lienket = '';
        var totalpage = Math.ceil(arrayMenu.length / perPage);
        for (var i = 1; i <= totalpage; i++) {
            var a = '<li onclick= handlePageMenu('+ i + ')>'  + i + '</li>';
            lienket += '<ul class="pageNum">' + a + '</ul>';
        }
        document.getElementById('page').innerHTML = lienket;
        var s='';
        for(var i = 0; i<perMenu.length; i++)
        {   
            s += 
                '<div class="card">' +
                    '<div class="card_product">' + 
                    '<img src="' + perMenu[i].img + '">' +
                    '</div>' + 
                    '<p class="name_product">' + perMenu[i].name + '</p>' +
                    '<p>' + "Giá: " + '<span class="price">' +stylenum(perMenu[i].price) + '</span>' + '</p>' +
                    '<button class="btn_product" onclick=showProductInfo(' +perMenu[i].productID +')>' + "Chi tiết" + '</button>' +
                '</div>' ;
        }
        document.getElementById('product').innerHTML = s;
}

function handlePageMenu(num) {
    currrentPage = num;
    perMenu = arrayMenu.slice((currrentPage-1)*perPage,(currrentPage-1)*perPage + perPage);
    var s ='';
    for(var i = 0; i<perMenu.length; i++)
    {   
        s += 
        '<div class="card">' +
            '<div class="card_product">' + 
            '<img src="' + perMenu[i].img + '">' +
            '</div>' + 
            '<p class="name_product">' + perMenu[i].name + '</p>' +
            '<p>' + "Giá: " + '<span class="price">' +stylenum(perMenu[i].price) + '</span>' + '</p>' +
            '<button class="btn_product" onclick=showProductInfo(' +perMenu[i].productID +')>' + "Chi tiết" + '</button>' +
            '</div>' ;
    }
    document.getElementById('product').innerHTML = s;
}
// ----------> end <----------------