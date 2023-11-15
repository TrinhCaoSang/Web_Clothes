window.onload = function()
{
    createProduct();
}
function stylenum(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
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

function handlePageNum(num) {
    currrentPage = num;
    perProduct = arrayProduct.slice((currrentPage-1)*perPage,(currrentPage-1)*perPage + perPage);
    var s = '<div id="themsanpham">Thêm sản phẩm</div>' +
     '<div id="maintable">' +
                '<h1 style="color: black;">Danh Sách Sản Phẩm</h1>' +
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
                '<td>' + perProduct[i].name + '</td>' +
                '<td>' + perProduct[i].brand + '</td>' +
                '<td>' + stylenum(perProduct[i].price) + '</td>' +
                '<td>' +
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
    var s = '<div id="themsanpham">Thêm sản phẩm</div>' +
            '<div id="maintable">' +
                '<h1 style="color: black;">Danh Sách Sản Phẩm</h1>' +
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
                '<td>' + perProduct[i].name + '</td>' +
                '<td>' + perProduct[i].brand + '</td>' +
                '<td>' + stylenum(perProduct[i].price) + '</td>' +
                '<td>' +
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
function bt3click()
{
    window.location.href=''
}
function bt4click()
{
    window.location.href='qlkh.html';
}
function bt5click()
{
    window.location.href='';
}
function bt6click()
{
    window.location.href='thongkekinhdoanh.html';
}
// quản lý khách hàng
function showUserList(){
	if(localStorage.getItem('user')===null){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	var tr='<tr><th>HỌ TÊN</th><th>EMAIL</th><th>ĐỊA CHỈ</th><th>SỐ ĐIỆN THOẠI</th><th>Xóa</th></tr>';
	for(var i=1; i<userArray.length;i++){
		tr+='<tr><td>'+userArray[i].fullname+'</td><td>'+userArray[i].email+'</td><td>'+userArray[i].address+'</td><td>'+userArray[i].phone+'</td><td><button class="delete" onClick="delete_user(\''+userArray[i].username+'\')">&times;</button></td></tr>';
	}
	document.getElementById('userlist').innerHTML=tr;
}
function delete_user(usernamedelete){
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].username == usernamedelete){
			if(confirm('Bạn có muốn xóa tài khoản này?')){
				userArray.splice(i, 1);
			}
		}
	}
	localStorage.setItem('user',JSON.stringify(userArray));
	showUserList();
}
function search_custom()
{
    var userArray = JSON.parse(localStorage.getItem('user'));
    var name = document.getElementById('input_search').value;
    if(name="") showUserList();
    else{
    for(var i=0; i<userArray.length;i++){
        if(userArray[i].fullname.toLowercase().search(name)>0)
		tr+='<tr><td>'+userArray[i].fullname+'</td><td>'+userArray[i].email+'</td><td>'+userArray[i].address+'</td><td>'+userArray[i].phone+'</td><td><button class="delete" onClick="delete_user(\''+userArray[i].username+'\')">&times;</button></td></tr>';
	}
    document.getElementById('userlist').innerHTML=tr;
}
}