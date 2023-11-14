window.onload = function()
{
    slideShow();
    createProduct();
    checklogin();
    showProduct();
}
//document.getElementById('containter_shop').style.display = 'none';

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
    var productArray = JSON.parse(localStorage.getItem('products'));
    for(var i =0; i<productArray.length;i++)
    {
        if(productArray[i].productID == productID)
        {
            document.getElementById('imgbig').src = productArray[i].img;
            document.getElementById('productname').innerHTML = productArray[i].name;
            document.getElementById('productprice').innerHTML = stylenum(productArray[i].price);
            document.getElementById('size').value = 36;
			document.getElementById('quantity').value = 1;
            document.getElementById('addcart').innerHTML = '<button class="addtocart" id="addtocart" onclick = addtocart('+productArray[i].productID+')>Thêm vào giỏ</button>';
        }
    }
    // hien thi san pham
}
function closeProductInfo() {
    document.getElementById('productInfo').style.display = 'none';
}

function createProduct() {
    if (localStorage.getItem('products') == null)
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

var currentPage = 1;
var perPage = 12; 
var perProduct = [];
var productArray = [];
function showProduct() {
    productArray = JSON.parse(localStorage.getItem('products'));
    perProduct = productArray.slice((currentPage-1)*perPage,(currentPage-1)*perPage + perPage);
        var lienket = '';
        var totalpage = Math.ceil(productArray.length / perPage);
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
    currentPage = num;
    perProduct = productArray.slice((currentPage-1)*perPage,(currentPage-1)*perPage + perPage);
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
    perMenu = arrayMenu.slice((currentPage-1)*perPage,(currentPage-1)*perPage + perPage);  
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
    currentPage = num;
    perMenu = arrayMenu.slice((currentPage-1)*perPage,(currentPage-1)*perPage + perPage);
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
function closebtn() {
    document.getElementById('background_tk').style.display = 'none';
}
function openbtn() {
    document.getElementById('background_tk').style.display = 'block';
}

// chuc nang tim kiem
function searchProduct() {
    var searchTerm = document.getElementById('search').value.toLowerCase();
    var arrayProduct = JSON.parse(localStorage.getItem('products'));
    if(searchTerm == '')
    {
        alert('Vui lòng nhập thông tin sản phẩm cần tìm');
        return false;
    }
    if(arrayMenu.length > 0)
    {
        arrayMenu = [];
    } 
    arrayProduct = JSON.parse(localStorage.getItem('products'));
    for(var i=0;i<arrayProduct.length;i++)
    {
        var productName = arrayProduct[i].name.toLowerCase();
        console.log(productName);
        if(productName.includes(searchTerm))
            {
                arrayMenu.push(arrayProduct[i]);
            }
    }
    if(arrayMenu.length == 0){
        var s = '<h1>Không tìm thấy sản phẩm </h1>';
        document.getElementById('product').innerHTML = s;
        document.getElementById('page').innerHTML  = '';
        return true;
    }
    perMenu = arrayMenu.slice((currentPage-1)*perPage,(currentPage-1)*perPage + perPage);  
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
    

document.getElementById('search').addEventListener('keydown',function (event) {
    if (event.key === 'Enter') {
        // Ngăn chặn hành động mặc định của nút Enter (ví dụ: không submit form)
        event.preventDefault();

        // Gọi hàm tìm kiếm sản phẩm
        searchProduct();
    }
})

// ----------> card <---------------

function cart() {
    document.getElementById('cart').style.display = 'block';
    document.getElementById('containter_shop').innerHTML = null;
    document.getElementById('footer').style.display = 'none';
    var s='';
    if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === '[]')
    {
        s += '<div id="name_cart">Giỏ Hàng</div>' +
        '<h1 style="text-align: center; font-size:32pt;">Không có sản phẩm nào trong giỏ hàng</h1>';
        document.getElementById('cart').innerHTML = s;
        return false;
    }
    else
    {
        var cartArray = JSON.parse(localStorage.getItem('cart'));
        var s = '';
        s += '<div id="name_cart">Giỏ Hàng</div>' +
        '<div id="card_container">' +
            '<div id="bill"> </div>'+
            '<table id="content_table">' +
                        '<tr>' +
                            '<td style="border: none;"></td>' +
                            '<th>Sản phẩm</th>' +
                            '<th>Giá</th>' +
                            '<th>Số lượng</th>' +
                            '<th style="width: 15%";>Tổng</th>' +
                            '<td style="border: none; width: 5%;" ></td>' +
                        '</tr>' +
            '</table>' + 
            '<div id="tien">' +
                        'Thành tiền: ' +
                        '<span id="total">0</span>' +
                    '</div>' +
                    '<button id="thanhtoan">Thanh Toán</button>';
        document.getElementById('cart').innerHTML = s;
        var total = 0;
        for(var i =0;i<cartArray.length;i++)
        {
            var child = document.createElement('tr');
            child.innerHTML =
            '<td style="width: 10%;">' +
                        '<div id="img_sp">' +
                        '<img src="' + cartArray[i].img + '">' +
                        '</div>' +
                        '</td>' +
                        '<td style="text-align:left">' + cartArray[i].name + '<br>SIZE: ' + cartArray[i].size+ '</td>' +
                        '<td style="width: 15%";>' + stylenum(cartArray[i].price) + '</td>' +
                        '<td style="width: 15%";text-align: center;">' +
                            '<button class="quantitydown2" onClick="quantitydown2(' + cartArray[i].productID + ')">-</button>' +
                            '<input id="quantity2" style="border: none;" disabled type="text" value="' + cartArray[i].quantity +'">'+
                            '<button class="quantityup2" onClick="quantityup2(' + cartArray[i].productID + ')">+</button>' +
                        '</td>' +
                         '<td>' +stylenum(cartArray[i].quantity * cartArray[i].price) +'</td>' +
                         '<td><button id="removesp" onClick="del_item('+ cartArray[i].productID + ')">X</button></td>';
            var mytable = document.getElementById("content_table");
            mytable.appendChild(child);
            total += cartArray[i].quantity * cartArray[i].price;
        }
        document.getElementById('total').innerText = stylenum(total);

    }
}
function quantitydown2(ID) {
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    for(var i =0; i<cartArray.length;i++)
    {
        if(cartArray[i].productID == ID)
        {
            if(cartArray[i].quantity > 1)
            {
                cartArray[i].quantity--;
                cartArray[i].total =  cartArray[i].quantity*cartArray[i].price;
            }
            break;
        }
    }
    localStorage.setItem('cart',JSON.stringify(cartArray));
    cart();
}

function quantityup2(ID) {
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    for(var i =0; i<cartArray.length;i++)
    {
        if(cartArray[i].productID == ID)
        {
            cartArray[i].quantity++;
            cartArray[i].total =  cartArray[i].quantity*cartArray[i].price;
            break;
        }
    }
    localStorage.setItem('cart',JSON.stringify(cartArray));
    cart();
}


function addtocart(ID)
{
    var checklogin = JSON.parse(localStorage.getItem('userlogin'));
    if(checklogin === null)
    {
        alert("Vui lòng đăng nhập tài khoản!");
        closeProductInfo();
        return false;
    }
    var size = document.getElementById('size').value;
    var quantity = document.getElementById('quantity').value;
    var arrayProduct = JSON.parse(localStorage.getItem('products'));
    var tmp;
    for(var i=0;i<arrayProduct.length;i++)
    {
        if(arrayProduct[i].productID === ID)
        {
            tmp = arrayProduct[i];
            break;
        }
    }
    if(localStorage.getItem('cart') === null)
    {
        var cartArray = [];
        tmp.quantity = quantity;
        tmp.size = size;
        tmp.total = quantity*tmp.price;
        cartArray.unshift(tmp);
        localStorage.setItem('cart',JSON.stringify(cartArray));
    }else
    {
        var cartArray = JSON.parse(localStorage.getItem('cart'));
        for(var i=0;i<cartArray.length;i++)
        {
            if(cartArray[i].productID === tmp.productID)
            {
                alert("Sản phẩm đã tồn tại trong giỏ hàng!");
                closeProductInfo();
                return false;
            }
        }
        tmp.quantity = quantity;
        tmp.size = size;
        tmp.total = quantity*tmp.price;
        cartArray.unshift(tmp);
        localStorage.setItem('cart',JSON.stringify(cartArray));
    }
    alert("Đã thêm sản phẩm vào giỏ hàng!");
    closeProductInfo();
}
function del_item(ID) {
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<cartArray.length;i++)
        {
            if(cartArray[i].productID == ID)
            {
                cartArray.splice(i,1);
                break;
            }
        }
    localStorage.setItem('cart',JSON.stringify(cartArray));
    cart();
}












