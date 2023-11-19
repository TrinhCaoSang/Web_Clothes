window.onload = function()
{
    createProduct();
}
function stylenum(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function createProduct() {
    if (localStorage.getItem('products') === null)
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

function handlePageNum(num) {
    currrentPage = num;
    perProduct = arrayProduct.slice((currrentPage-1)*perPage,(currrentPage-1)*perPage + perPage);
    var s = '<div id="themsanpham" onclick="openProduct();">Thêm sản phẩm</div>' +
     '<div id="maintable">' +
                '<h1 style="color: black;font-size: xx-large">Danh Sách Sản Phẩm</h1>' +
                '<table id="productlist">' +
                    '<tr style="height: 30px; background-color:orange;">' +
                        '<th>#ID</th>' +
                        '<th style="width: 10%;">Ảnh</th>' +
                        '<th style="width: 40%;">Tên sản phẩm</th>' +
                        '<th style="width: 10%;">Loại</th>' +
                        '<th style="width: 20%;">Giá</th>' +
                        '<th></th>' +
                    '</tr>';
    for(var i = 0; i<perProduct.length; i++)
    {   
        s += 
            '<tr>' + 
                '<td>'+ perProduct[i].productID +'</td>' +
                '<td>' +
                    '<div class="img_product">' +
                        '<img src="' + perProduct[i].img + '">' +
                    '</div>' +
                '</td>' + 
                '<td style="text-align: left;">' + perProduct[i].name + '</td>' +
                '<td>' + perProduct[i].brand.toUpperCase() + '</td>' +
                '<td>' + stylenum(perProduct[i].price) + '</td>' +
                '<td class="chucnang">' +
                    '<button class="delete" onclick="deleteproduct('+arrayProduct[i].productID +')">x</button>' +
                    '<button class="change" onclick="showchangeproductbox(' + arrayProduct[i].productID + ')">Sửa</button>' +
                '</td>' +
            '</tr>';
        }
        s += '</table>'; 
        document.getElementById('homecontent').innerHTML = s;
}
var currrentPage = 1;
var perPage = 4; 
var perProduct = [];
var arrayProduct = [];
function bt2click() {
    arrayProduct = JSON.parse(localStorage.getItem('products'));
    perProduct = arrayProduct.slice((currrentPage-1)*perPage,(currrentPage-1)*perPage + perPage);
        var lienket = '';
        var totalpage = Math.ceil(arrayProduct.length / perPage);
        for (var i = 1; i <= totalpage; i++) {
            var a = '<li onclick= handlePageNum('+ i + ')>'  + i + '</li>';
            lienket += '<ul class="pageNum">' + a + '</ul>';
        }
        document.getElementById('page').innerHTML = lienket;
    var s = '<div id="themsanpham" onclick="openProduct();">Thêm sản phẩm</div>' +
            '<div id="maintable">' +
                '<h1 style="color: black; font-size: xx-large;">Danh Sách Sản Phẩm</h1>' +
                '<table id="productlist">' +
                    '<tr style="height: 30px; background-color:orange;">' +
                        '<th>#ID</th>' +
                        '<th style="width: 10%;">Ảnh</th>' +
                        '<th style="width: 40%;">Tên sản phẩm</th>' +
                        '<th style="width: 10%;">Loại</th>' +
                        '<th style="width: 20%;">Giá</th>' +
                        '<th></th>' +
                    '</tr>';
    for(var i = 0; i<perProduct.length; i++)
    {   
        s += 
            '<tr>' + 
                '<td>'+ perProduct[i].productID +'</td>' +
                '<td>' +
                    '<div class="img_product">' +
                        '<img src="' + perProduct[i].img + '">' +
                    '</div>' +
                '</td>' + 
                '<td class="namepr">' + perProduct[i].name + '</td>' +
                '<td>' + perProduct[i].brand.toUpperCase() + '</td>' +
                '<td>' + stylenum(perProduct[i].price) + '</td>' +
                '<td class="chucnang" width="8%">' +
                    '<button class="delete" onclick="deleteproduct('+arrayProduct[i].productID +')">x</button>' +
                    '<button class="change" onclick="showchangeproductbox(' + arrayProduct[i].productID + ')">Sửa</button>' +
                '</td>' +
            '</tr>';
        }
        s += '</table>'; 
        document.getElementById('homecontent').innerHTML = s;
    
    document.getElementById('homecontent').innerHTML = s;
}
function closebtn() {
    document.getElementById('background_tk').style.display = 'none';
}
function openbtn() {
    document.getElementById('background_tk').style.display = 'block';
}
function bt1click()
{
    window.location.href='index.html';
}

// -----------> san pham <-----------


function closeProduct() {
    document.getElementById('modal_add').style.display = 'none';
}
function openProduct() {
    document.getElementById('modal_add').style.display = 'block';
}
function closeProductedit() {
    document.getElementById('modal_edit').style.display = 'none';
}

// ==============> Them san pham <=============
var imgtmp;

function displayPrdImg(input){
    var prdImg = document.getElementById('prdImg');
    var holder = document.getElementById('prdImgHolder');
    if (input.files && input.files[0]) {
        var file = input.files[0];
        if (file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function (e) {
                imgtmp = document.getElementById('imgadd').src = e.target.result;
            };
            reader.readAsDataURL(file);
        } 
        else 
        {
            alert('Vui lòng chỉ chọn định dạng file ảnh.');
            prdImg.value="";
            holder.style.backgroundImage='';
        }
    }
}


var cfm = document.getElementById('confirm');
var arrayProduct = JSON.parse(localStorage.getItem('products'));
cfm.addEventListener('click', function(){
    var tid = arrayProduct[0].productID + 1;
    var tname = document.getElementById('prdName').value;
    var tprice = document.getElementById('prdPrice').value;
    var tbrand = document.getElementById('prdBrand').value;
    var prdImg = document.getElementById('prdImg');
    if(!tid || !tname || !tprice || !tbrand || !imgtmp)
    {
        alert("Bạn chưa nhập đủ thông tin!");
        return false;
    }
    var productttemp =
    {
        productID: tid,
        brand: tbrand,
        name: tname,
        price: parseInt(tprice),
        img: imgtmp
    }
    var productArray = JSON.parse(localStorage.getItem('products'));
    productArray.unshift(productttemp);
    localStorage.setItem('products',JSON.stringify(productArray));
    alert('Thêm sản phẩm thành công!');
    closeProduct();
    document.getElementById('prdName').value = null;
    document.getElementById('prdPrice').value = null;
    prdImg.value="";
    bt2click();
});

// --------------> sửa sản phẩm <===============


function showchangeproductbox(index) {
    document.getElementById('modal_edit').style.display = 'block';
    var arrayProduct = JSON.parse(localStorage.getItem('products'));
    for(var i=0;i<arrayProduct.length;i++)
    {
        if(arrayProduct[i].productID == index)
        {
            document.getElementById('prdIdedit').value = arrayProduct[i].productID;
            document.getElementById('prdNameedit').value = arrayProduct[i].name;
            document.getElementById('prdPriceedit').value = arrayProduct[i].price;
            document.getElementById('imgedit').src = arrayProduct[i].img;
            document.getElementById('confirmedit').setAttribute('onclick','change(' + arrayProduct[i].productID + ')');
        }
    }
}
var imgedit;
function displayPrdImgedit(input){
    var prdImg = document.getElementById('prdImgedit');
    var holder = document.getElementById('prdImgHolderedit');
    if (input.files && input.files[0]) {
        var file = input.files[0];
        if (file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function (e) {
                imgedit = document.getElementById('imgedit').src = e.target.result;
            };
            reader.readAsDataURL(file);
        } 
        else 
        {
            alert('Vui lòng chỉ chọn định dạng file ảnh.');
            prdImg.value="";
            holder.style.backgroundImage='';
        }
    }
}
function change(pos)
{
    var arrayProduct = JSON.parse(localStorage.getItem('products'));
    var prdImg = document.getElementById('prdImgedit');
    for(var i=0;i<arrayProduct.length;i++)
    {
        if(arrayProduct[i].productID == pos)
        {
            arrayProduct[i].name = document.getElementById('prdNameedit').value;
            arrayProduct[i].price = document.getElementById('prdPriceedit').value;
            if(imgedit !== undefined)
            {
                arrayProduct[i].img = imgedit;
            }
        }
    }
    localStorage.setItem('products',JSON.stringify(arrayProduct));
    alert("Sửa thông tin thành công!");
    closeProductedit();
    prdImg.value="";
    bt2click();
}
function deleteproduct(productID){
    var productArray = JSON.parse(localStorage.getItem('products'));
    var confirmation = window.confirm('Tiến hành xóa sản phẩm khỏi mục danh sách?');
    if(!confirmation) exit(0);
    var index;
    for(var i=0;i<productArray.length;i++)
        if(productArray[i].productID == productID){
            index=i;
            break;
        }
    productArray.splice(index,1);
    localStorage.setItem('products',JSON.stringify(productArray));
    alert('Xoá thành công.');
    bt2click();
}

