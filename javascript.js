window.onload = function()
{
    slideShow();
    createProduct();
    showProduct();
    checklogin();
}
//document.getElementById('containter_shop').style.display = 'none';

function showmenuMobile() {
    var list = document.getElementById('menuMobile_list');
    list.style.display = "block";
    var s = '<div onclick="closemenuMobile()"><i class="fa-regular fa-rectangle-xmark"></i></div>';
    document.getElementById('menuMobile').innerHTML = s;
}

function closemenuMobile() {
    var list = document.getElementById('menuMobile_list');
    list.style.display = "none";
    var s = '<div onclick="showmenuMobile()"><i class="fa-solid fa-bars"></i></div>';
    document.getElementById('menuMobile').innerHTML = s;
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
    if (localStorage.getItem('products') === null)
    {
    var productArray = [
        {
            productID: 22044,
                brand: 'shirt',
                name: 'Áo sơ mi icon ',
                img: 'img/product/product44.png',
                price: 590000
        },
        {
            productID: 22043,
            brand: 'shirt',
            name: 'Áo sơ mi DG ',
            img: 'img/product/product43.png',
            price: 12590000
         },
        {
            productID: 22042,
                brand: 'sport',
                name: 'Bộ thể thao adidas xanh ',
                img: 'img/product/product42.png',
                price: 1590000
        },
        {
            productID: 22041,
            brand: 'sport',
            name: 'Bộ thể thao adidas đen ',
            img: 'img/product/product41.png',
            price: 1590000
        },
        {
            productID: 22040,
                brand: 'polo',
                name: 'Áo polo lascos trắng ',
                img: 'img/product/product40.png',
                price: 1249000
        },
        {
            productID: 22039,
                brand: 'polo',
                name: 'Áo polo lascos world ',
                img: 'img/product/product39.png',
                price: 1999000
        },
        {
            productID: 22038,
                brand: 'polo',
                name: 'Áo polo lascos ',
                img: 'img/product/product38.png',
                price: 999000
        },
        {
            productID: 22037,
                brand: 'shirt',
                name: 'Áo sơ mi BALENCIAGA ',
                img: 'img/product/product37.png',
                price: 1099000
        },
        {
            productID: 22036,
                brand: 'tshirt',
                name: 'Áo thun BALENCIAGA ',
                img: 'img/product/product36.png',
                price: 1299000
        },
        {
            productID: 22035,
                brand: 'tshirt',
                name: 'Áo thun DICO ',
                img: 'img/product/product35.png',
                price: 299000
        },
        {
            productID: 22034,
                brand: 'shirt',
                name: 'Áo sơ mi sọc Y ',
                img: 'img/product/product34.png',
                price: 549000
        },
        {
            productID: 22033,
                brand: 'tshirt',
                name: 'Áo thun họa tiết Y ',
                img: 'img/product/product33.png',
                price: 549000
        },
        {
            productID: 22032,
                brand: 'tshirt',
                name: 'Áo thun NAMI ',
                img: 'img/product/product32.png',
                price: 449000
        },
        {
            productID: 22031,
                brand: 'tshirt',
                name: 'Áo thun LUFFY ',
                img: 'img/product/product31.png',
                price: 449000
        },
        {
            productID: 22030,
                brand: 'tshirt',
                name: 'Áo thun ACE ',
                img: 'img/product/product30.png',
                price: 449000
        },
        {
            productID: 22029,
                brand: 'tshirt',
                name: 'Áo thun tay ngắn DC ',
                img: 'img/product/product29.png',
                price: 299000
        },
        {
            productID: 22028,
                brand: 'tshirt',
                name: 'Áo BRxDC ',
                img: 'img/product/product28.png',
                price: 299000
        },
        {
            productID: 22027,
                brand: 'tshirt',
                name: 'Áo Thương Bạn Gái ',
                img: 'img/product/product27.png',
                price: 299000
        },
        {
            productID: 22026,
                brand: 'tshirt',
                name: 'Áo thun dirty coins ',
                img: 'img/product/product26.png',
                price: 350000
        },
        {
            productID: 22025,
                brand: 'shirt',
                name: 'Áo Sơ mi Bandana ',
                img: 'img/product/product25.png',
                price: 699000
        },
        {
            productID: 22024,
                brand: 'sprot',
                name: 'Áo Thi Đấu Tay Ngắn Mẫu BLACK ROSE',
                img: 'img/product/product24.webp',
                price: 399000
        },
        {
        productID: 22023,
            brand: 'sprot',
            name: 'Áo Thi Đấu Tay Ngắn Gray Light ',
            img: 'img/product/product23.png',
            price: 399000
        },
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

// ----------> cart <---------------
function cart() {
    document.getElementById('order').style.display = 'none';
    document.getElementById('cart').style.display = 'block';
    document.getElementById('list_menu').style.display = 'none';
    document.getElementById('containter_shop').innerHTML = null;
    var s='';
    if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === '[]')
    {
        s += '<div style="text-align: center ;"><img style ="height: 150px;" src="img/empty-cart.png" alt="Hình giỏ hàng trống"></div>' +
        '<div style="text-align: center; font-size:2rem; font-weight: bold;">Giỏ hàng của bạn còn trống</div>' +
        '<div id="Buy-now"><a href="index.html">Mua Ngay</a></div>';
        document.getElementById('cart_container').innerHTML = s; 
    }
    else
    {
        var cartArray = JSON.parse(localStorage.getItem('cart'));
        var s = '';
        s +='<table id="content_table">' +
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
                    '<button id="thanhtoan" onclick="buy()">Thanh Toán</button>';
        document.getElementById('cart_container').innerHTML = s;
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

function buy() {
    var info = '';
    var size = '';
    var quantity = '';
    var totalprice = 0;
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    var date = new Date();
    var chitiet = [];
    for (var i = 0; i < cartArray.length; i++) {
        info += cartArray[i].name + ' <br> ' ;
        size += cartArray[i].size + '<br>';
        quantity += cartArray[i].quantity + '<br>';
        totalprice += cartArray[i].quantity * cartArray[i].price;
        chitiet.push( {
            id : cartArray[i].productID,
            tensp: cartArray[i].name,
            soluong: parseInt(cartArray[i].quantity),
            gia: cartArray[i].price,
            brand:cartArray[i].brand,
            datee:date.getFullYear()+ '-' +(date.getMonth() + 1)+ '-' +date.getDate()
        })
    }
    var customer = JSON.parse(localStorage.getItem('userlogin'));
    var date2=date.getFullYear()+ '-' +(date.getMonth() + 1)+ '-' +date.getDate();
    var d = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    if (localStorage.getItem('bill') === null) {
        var billArray = [];
        var bill = {
            id: billArray.length,
            info: info,
            quantity: quantity,
            size: size,
            chitietsp: chitiet,
            totalprice: totalprice,
            customer: customer,
            date: d,
            date2:date2,
            status: 'Chưa xử lý'
        };
        billArray.unshift(bill);
        localStorage.setItem('bill', JSON.stringify(billArray));
    } else {
        var billArray = JSON.parse(localStorage.getItem('bill'));
        var bill = {
            id: billArray.length,
            info: info,
            quantity: quantity,
            size: size,
            chitietsp: chitiet,
            totalprice: totalprice,
            customer: customer,
            date: d,
            date2:date2,
            status: 'Chưa xử lý'
        };
        billArray.unshift(bill);
        localStorage.setItem('bill', JSON.stringify(billArray));
    }
    localStorage.removeItem('cart');
    cart();
}

function openOrder() {
        document.getElementById('order').style.display = 'block';
        document.getElementById('cart').style.display = 'none';
        document.getElementById('list_menu').style.display = 'none';
        document.getElementById('containter_shop').innerHTML = null;

        if (localStorage.getItem('bill') !== null) {
            var user = JSON.parse(localStorage.getItem('userlogin'));
            var billArray = JSON.parse(localStorage.getItem('bill'));
            for (var i = 0; i <billArray.length; i++) {
                if (user.username == billArray[i].customer.username) {
                    document.getElementById("order_container2").style.display = "none";
                    document.getElementById("order_container").style.display = "block";
                    var s = '<table id="bill_list">' +
                            '<tr style="height: 45px">' +
                            '<th style="width: 5%; font-size: 2.3rem;">Stt</th>'+
                            '<th style="width: 30%; font-size: 2.3rem;">Sản phẩm</th>' + 
                            '<th style="width: 10%; font-size: 2.3rem;">Số lượng</th>' +
                            '<th style="width: 8%; font-size: 2.3rem;">Size</th>' +
                            '<th style="width: 17%; font-size: 2.3rem;">Tổng tiền</th>' +
                            '<th style="width: 16%; font-size: 2.3rem;">Ngày đặt hàng</th>' +
                            '<th style="width: 16%; font-size: 2.3rem;">Trạng thái</th>' +
                            '</tr>';
                    var count = 0;
                    for (var j = 0; j < billArray.length; j++) {
                        if (user.username == billArray[j].customer.username) {
                            count++;
                            s += '<tr>' +
                                '<td style="text-align: center; font-size: 1.8rem;">'+ count +'</td>' +
                                '<td style="text-align: center; font-size: 1.9rem; line-height: 25px">'+ billArray[j].info +'</td>' +
                                '<td style="text-align: center; font-size: 1.8rem; color: darkcyan; line-height: 25px">'+ billArray[j].quantity +'</td>' +
                                '<td style="text-align: center; font-size: 1.8rem; color: orange; line-height: 25px">'+ billArray[j].size +'</td>' +
                                '<td style="text-align: center; font-size: 1.8rem; color: red">'+ stylenum(billArray[j].totalprice) +'</td>' +
                                '<td style="text-align: center; font-size: 1.8rem; color: green">'+ billArray[j].date +'</td>' +
                                '<td style="text-align: center; font-size: 1.9rem; font-weight: 600;">'+ billArray[j].status +'</td>' +
                                '</tr>';
                        }
                    }

                }
            }
            s += '</table>';
            document.getElementById('order_container').innerHTML = s;
        } 
}




