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
            productID: 22044,
                brand: 'shirt',
                name: 'Áo sơ mi icon',
                img: 'img/product/product44.png',
                price: 590000
         },
        {
            productID: 22043,
                brand: 'shirt',
                name: 'Áo sơ mi DG',
                img: 'img/product/product43.png',
                price: 12590000
         },
        {
            productID: 22042,
                brand: 'sport',
                name: 'Bộ thể thao adidas xanh',
                img: 'img/product/product42.png',
                price: 1590000
         },
        {
            productID: 22041,
                brand: 'sport',
                name: 'Bộ thể thao adidas đen',
                img: 'img/product/product41.png',
                price: 1590000
         },
        {
            productID: 22040,
                brand: 'polo',
                name: 'Áo polo lascos trắng',
                img: 'img/product/product40.png',
                price: 1249000
         },
        {
            productID: 22039,
                brand: 'polo',
                name: 'Áo polo lascos world',
                img: 'img/product/product39.png',
                price: 1999000
         },
        {
            productID: 22038,
                brand: 'polo',
                name: 'Áo polo lascos',
                img: 'img/product/product38.png',
                price: 999000
         },
        {
            productID: 22037,
                brand: 'shirt',
                name: 'Áo sơ mi BALENCIAGA',
                img: 'img/product/product37.png',
                price: 1099000
         },
        {
            productID: 22036,
                brand: 'tshirt',
                name: 'Áo thun BALENCIAGA',
                img: 'img/product/product36.png',
                price: 1299000
         },
        {
            productID: 22035,
                brand: 'tshirt',
                name: 'Áo thun DICO',
                img: 'img/product/product35.png',
                price: 299000
         },
        {
            productID: 22034,
                brand: 'shirt',
                name: 'Áo sơ mi sọc Y',
                img: 'img/product/product34.png',
                price: 549000
         },
        {
            productID: 22033,
                brand: 'tshirt',
                name: 'Áo thun họa tiết Y',
                img: 'img/product/product33.png',
                price: 549000
         },
        {
            productID: 22032,
                brand: 'tshirt',
                name: 'Áo thun NAMI',
                img: 'img/product/product32.png',
                price: 449000
         },
        {
            productID: 22031,
                brand: 'tshirt',
                name: 'Áo thun LUFFY',
                img: 'img/product/product31.png',
                price: 449000
         },
        {
            productID: 22030,
                brand: 'tshirt',
                name: 'Áo thun ACE',
                img: 'img/product/product30.png',
                price: 449000
         },
        {
            productID: 22029,
                brand: 'tshirt',
                name: 'Áo thun tay ngắn DC',
                img: 'img/product/product29.png',
                price: 299000
         },
        {
            productID: 22028,
                brand: 'tshirt',
                name: 'Áo BRxDC',
                img: 'img/product/product28.png',
                price: 299000
         },
        {
            productID: 22027,
                brand: 'tshirt',
                name: 'Áo Thương Bạn Gái',
                img: 'img/product/product27.png',
                price: 299000
         },
        {
            productID: 22026,
                brand: 'tshirt',
                name: 'Áo thun dirty coins',
                img: 'img/product/product26.png',
                price: 350000
         },
        {
            productID: 22025,
                brand: 'tshirt',
                name: 'Áo Sơ mi Bandana',
                img: 'img/product/product25.png',
                price: 699000
         },
        {
            productID: 22024,
                brand: 'sport',
                name: 'Áo Thi Đấu Tay Ngắn Mẫu BLACK ROSE',
                img: 'img/product/product24.webp',
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
                '<td class="chucnang" width="8%">' +
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
            lienket += '<ul class="pageNum" ">' + a + '</ul>';//
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

// quản lý khách hàng
function bt4click(){
	var userArray = JSON.parse(localStorage.getItem('user'));
	var tr=
    '<div id="maintable">' +
    '<h1 style="color: black;font-size: xx-large">Danh Sách Khách Hàng</h1>' +
    '<table id="productlist">' +
    '<tr><th>Ngày đăng kí</th><th>HỌ TÊN</th><th>EMAIL</th><th>ĐỊA CHỈ</th><th>SỐ ĐIỆN THOẠI</th><th>Xóa</th></tr>';
	for(var i=1; i<userArray.length;i++){
		tr+='<tr><td>'+userArray[i].datesignup+'</td><td>'+userArray[i].fullname+'</td><td>'+userArray[i].email+'</td><td>'+userArray[i].address+'</td><td>'+userArray[i].phone+'</td><td><button class="delete" onClick="delete_user(\''+userArray[i].username+'\')">&times;</button></td></tr>';
	}
    
	document.getElementById('homecontent').innerHTML=tr;
    document.getElementById('page').innerHTML = "";
   
    
}
function closepage()
{
    document.getElementsById('page').style.display='none';
}
function openpage()
{
    document.getElementsById('page').style.display='block';
}
function closesearch() {
    document.getElementById('search').style.display = 'none';
}
function opensearch() {
    document.getElementById('search').style.display = 'block';
}
function closefilter() {
    document.getElementById('filter').style.display = 'none';
}
function openfilter() {
    document.getElementById('filter').style.display = 'block';
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
	bt4click();
    
}
function search_user()
{
    var userArray = JSON.parse(localStorage.getItem('user'));
    var name = document.getElementById('input_search').value;
    var tr = '<div id="maintable">' +
    '<h1 style="color: black;font-size: xx-large">Danh Sách Khách Hàng</h1>' +
    '<table id="productlist">' +
    '<tr><th>HỌ TÊN</th><th>EMAIL</th><th>ĐỊA CHỈ</th><th>SỐ ĐIỆN THOẠI</th><th>Xóa</th></tr>';
    if(name !=null){
    for(var i=1; i<userArray.length;i++){
        if(userArray[i].fullname.indexOf(name)>=0)
		tr+='<tr><td>'+userArray[i].fullname+'</td><td>'+userArray[i].email+'</td><td>'+userArray[i].address+'</td><td>'+userArray[i].phone+'</td><td><button class="delete" onClick="delete_user(\''+userArray[i].username+'\')">&times;</button></td></tr>';
	}
}
    document.getElementById('homecontent').innerHTML=tr;
  
}
//}
//đơn hàng
function bt3click(){
	if(localStorage.getItem('bill')===null){
		
		var s='<div id="maintable">' +
        '<h1 style="color: black;font-size: xx-large">Không có đơn hàng</h1></div>';
        document.getElementById('homecontent').innerHTML=s;
		return false;
	}
	var s='<div id="maintable">' +
    '<h1 style="color: black;font-size: xx-large">Danh Sách Đơn Hàng</h1>' +
    '<table id="productlist">' +
    '<tr><th>Ngày</th><th>Khách hàng</th><th>Giá đơn hàng</th><th>đơn hàng</th><th>Trạng thái</th></tr>';
	var billArray = JSON.parse(localStorage.getItem('bill'));
	for(var i=0;i<billArray.length;i++){
		if(billArray[i].status=='Chưa xử lý'){
			s+=
    '<td>'+billArray[i].date+'</td>'+
    '<td>'+billArray[i].customer.fullname+'</td>'+
    '<td>'+stylenum(billArray[i].totalprice)+'</td>'+
    '<td style="text-decoration: underline;cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
    '<td style="color: red">'+billArray[i].status+'</td>'+
    '</tr>';
    }
    else {
    s+=
    '<td>'+billArray[i].date+'</td>'+
    '<td>'+billArray[i].customer.fullname+'</td>'+
    '<td>'+stylenum(billArray[i].totalprice)+'</td>'+
    '<td onclick="showbill('+billArray[i].id+')" style="text-decoration: underline; cursor: pointer;">Chi tiết đơn hàng</td>'+
    '<td style="color: blue">'+billArray[i].status+'</td>'+
    '</tr>';
}
}
    document.getElementById('homecontent').innerHTML=s;
    document.getElementById('page').innerHTML='';


}
function closebill(){
    document.getElementById('modal_donhang').style.display='none';
}
    function showbill(id){
        document.getElementById('modal_donhang').style.display = 'block';
        var billArray = JSON.parse(localStorage.getItem('bill'));
       var s='<button class="close" onClick="closebill()">&times;</button>';
        for (var i = 0; i < billArray.length; i++) {
            if(billArray[i].id==id){
                s +='<h4>Thông tin đơn hàng:</h4>'+
                '<p>'+billArray[i].info+'</p>'+
                '<h4>Ngày tạo đơn hàng:</h4>'+
                '<p>'+billArray[i].date+'</p>'+
                '<h4>Tên khách hàng:</h4>'+
                '<p>'+billArray[i].customer.fullname+'</p>'+
                '<h4>Địa chỉ:</h4>'+
                '<p>'+billArray[i].customer.address+'</p>'+
                '<h4>Số điện thoại liên lạc:</h4>'+
                '<p>'+billArray[i].customer.phone+'</p>'+
                '<h4>Tổng giá tiền:</h4>'+
                '<p>'+stylenum(billArray[i].totalprice)+'</p>';
                if (billArray[i].status=="Chưa xử lý") {
                    s+='<h4>Tình trạng:</h4>'+
                        '<div><span id="status" style="color:red">'+billArray[i].status+'</span><label><input type="checkbox" onchange="changeStatus(this,'+billArray[i].id+')" ><span class="slider"></span></label></div>';
                }
                else {
                    s+='<h4>Tình trạng:</h4>'+
                        '<div><span id="status" style="color:blue">'+billArray[i].status+'</span><label><input type="checkbox" checked onchange="changeStatus(this,'+billArray[i].id+')" ><span class="slider"></span></label></div>';
                }
                s+='<button class="printbtn" onClick="window.print()">In đơn hàng</button>';
            }
        }
        document.getElementById('info_donhang').innerHTML = s;
    
    }

    function changeStatus(checkbox,id){
        var billArray = JSON.parse(localStorage.getItem('bill'));
        if (checkbox.checked==true) {
            for (var i = 0; i < billArray.length; i++) {
                if(billArray[i].id==id){
                    billArray[i].status = 'Đã xử lý';
                }
            }
            document.getElementById('status').innerHTML="Đã xử lý";
            document.getElementById('status').style.color = 'blue';
        }else {
            for (var i = 0; i < billArray.length; i++) {
                if(billArray[i].id==id){
                    billArray[i].status = 'Chưa xử lý';
                }
            }
            document.getElementById('status').innerHTML="Chưa xử lý";
            document.getElementById('status').style.color = 'red';
        }
        localStorage.setItem('bill',JSON.stringify(billArray));
        bt3click();
    }


function bt5click(){
    var billArray = JSON.parse(localStorage.getItem('bill'));
    if(localStorage.getItem('bill')===null){
		
		var s='<div id="maintable">' +
        '<h1 style="color: black;font-size: xx-large">Chưa có đơn hàng thống kê</h1></div>';
        document.getElementById('homecontent').innerHTML=s;
		return false;
	}
    var thongkettemp = [];


    for(var i=0;i<billArray.length;i++){
       
        for(var k=0;k<billArray[i].chitietsp.length;k++)
        {
            if(billArray[i].status=='Đã xử lý')
            thongkettemp.push( 
            {
                ngay: billArray[i].date,
                ten: billArray[i].chitietsp[k].tensp,
                soluong: billArray[i].chitietsp[k].soluong ,
                doanhthu :  billArray[i].chitietsp[k].gia*billArray[i].chitietsp[k].soluong,
                brand: billArray[i].chitietsp[k].brand,
                datee:billArray[i].chitietsp[k].datee
            })
           
            
        }
        
    }
   
        
    localStorage.setItem('thongkesptemp',JSON.stringify(thongkettemp));
    var n=0;
    while(n<thongkettemp.length)
    {
    for(var i=0;i<thongkettemp.length-1;i++){
        for(var j=i+1;j<thongkettemp.length;j++){
            if(thongkettemp[i].ngay==thongkettemp[j].ngay && thongkettemp[i].ten==thongkettemp[j].ten)
            {
                thongkettemp[i].soluong+=thongkettemp[j].soluong;
                thongkettemp[i].doanhthu+=thongkettemp[j].doanhthu;
                thongkettemp.splice(j,1);
            
            }
          
        }
    }
    n++;
}

  
    localStorage.setItem('thongkesp',JSON.stringify(thongkettemp));
    var thongkesp = JSON.parse(localStorage.getItem('thongkesp'));
    var h='<div id="maintable">' +
    '<h1 style="color: black;font-size: xx-large">Thống kê kinh doanh</h1>' +
    '<table id="productlist">' +
    '<tr><th>Ngày</th><th>Tên sản phẩm</th><th>Số lượng</th><th>Doanh thu</th</tr>';
    for( var i=0;i<thongkesp.length;i++){
        h+=        
        '<tr>' +'<td>'+ thongkesp[i].ngay +'</td>' +
    '<td style="text-align: left;padding-left:10px">'+
         thongkesp[i].ten + 
    '</td>' + 
    '<td class="soluong">' + thongkesp[i].soluong + '</td>' +
    
    '<td class="doanhthu" style="display:none" >' + thongkesp[i].doanhthu + '</td>' +
    '<td>' + stylenum(thongkesp[i].doanhthu) + '</td>'      
+ '</tr>';
    }
    document.getElementById('homecontent').innerHTML=h;
    var doanhthu=document.getElementsByClassName("doanhthu");
    var tongdoanhthu=0;
    for(var i=0;i<doanhthu.length;i++){
        tongdoanhthu+=parseInt(doanhthu.item(i).innerHTML);
        
    }
    var soluong=document.getElementsByClassName("soluong");
    var tongsoluong = 0;
    for(var i=0;i<soluong.length;i++){
        tongsoluong+=parseInt(soluong.item(i).innerHTML);
        
    }
    h+='<tr>'+'<td colspan="2" style="text-align:right;color:red ;padding-right:10px; font-weight: bold;">'+"Tổng:"+'</td>'
    +'<td>'+tongsoluong+'</td>'+'<td>'+stylenum(tongdoanhthu)+'</td>'
    document.getElementById('homecontent').innerHTML=h;
   document.getElementById('page').innerHTML = '';
   
}

function filter(){
    var thongkesp=JSON.parse(localStorage.getItem('thongkesp'));
 
    var date1 = document.getElementById('date1').value;
    var date2 = document.getElementById('date2').value;
    var loai = document.getElementById('loai').value;
    var date11=new Date(date1);
    var date22=new Date(date2);
    if(date11>date22) 
    {
        alert('nhập ngày không chính xác vui lòng nhập lại');
        bt5click();
    }
    else{
    var h='<div id="maintable">' +
    '<h1 style="color: black;font-size: xx-large">Thống kê kinh doanh</h1>' +
    '<table id="productlist">' +
    '<tr><th>Ngày</th><th>Tên sản phẩm</th><th>Số lượng</th><th>Doanh thu</th</tr>';
    for(var i=0;i<thongkesp.length;i++){
        
        var date=new Date(thongkesp[i].datee);
        if(date>=date11 && date<=date22)
        {    
                 if(loai=='all')
                   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                 '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                  '<td>' + thongkesp[i].soluong + '</td>' +  
                 '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>' + '</tr>';
                
            
                if(loai=='sport')
                
                    if(thongkesp[i].brand=='sport')
                 {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                    '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                    '<td>' + thongkesp[i].soluong + '</td>' +  
                    '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                   
                 }
                 if(loai=='tshirt')
                    if(thongkesp[i].brand=='tshirt')
                 {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                    '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                    '<td>' + thongkesp[i].soluong + '</td>' +  
                    '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                 }
                 if(loai=='shirt')
                    if(thongkesp[i].brand=='shirt')
                 {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                    '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                    '<td>' + thongkesp[i].soluong + '</td>' +  
                    '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                 }
                 if(loai=='polo')
                    if(thongkesp[i].brand=='polo')
                 {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                    '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                    '<td>' + thongkesp[i].soluong + '</td>' +  
                    '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                 }
                
                
            }
            else
            if(date>=date11 && Number.isNaN(date22.valueOf()))
            {  
           
                if(loai=='all')
                       h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                     '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                '<td>' + thongkesp[i].soluong + '</td>' +  
                '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'       + '</tr>'; 
                     
                
                    if(loai=='sport')
                    
                        if(thongkesp[i].brand=='sport')
                     {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                        '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                        '<td>' + thongkesp[i].soluong + '</td>' +  
                        '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>'; 
                       
                     }
                     if(loai=='tshirt')
                        if(thongkesp[i].brand=='tshirt')
                     {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                        '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                        '<td>' + thongkesp[i].soluong + '</td>' +  
                        '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                        
                     }
                     if(loai=='shirt')
                        if(thongkesp[i].brand=='shirt')
                     {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                        '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                        '<td>' + thongkesp[i].soluong + '</td>' +  
                        '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                       
                     }
                     if(loai=='polo')
                        if(thongkesp[i].brand=='polo')
                     {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                        '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                        '<td>' + thongkesp[i].soluong + '</td>' +  
                        '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                       
                     }
                    
                    
                }
                else
                if(date<=date22 && Number.isNaN(date11.valueOf()))
                {  
           
                    if(loai=='all')
                {        h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                         '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                    '<td>' + thongkesp[i].soluong + '</td>' +  
                    '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'+ '</tr>';
                   
                }
                        if(loai=='sport')
                        
                            if(thongkesp[i].brand=='sport')
                         {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                            '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                            '<td>' + thongkesp[i].soluong + '</td>' +  
                            '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                           
                         }
                         if(loai=='tshirt')
                            if(thongkesp[i].brand=='tshirt')
                         {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                            '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                            '<td>' + thongkesp[i].soluong + '</td>' +  
                            '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                           
                         }
                         if(loai=='shirt')
                            if(thongkesp[i].brand=='shirt')
                         {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                            '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                            '<td>' + thongkesp[i].soluong + '</td>' +  
                            '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                           
                         }
                         if(loai=='polo')
                            if(thongkesp[i].brand=='polo')
                         {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                            '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                            '<td>' + thongkesp[i].soluong + '</td>' +  
                            '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                           
                         }
                        
                        
                    }
                    else 
                    if( Number.isNaN(date11.valueOf())&& Number.isNaN(date22.valueOf()))
                   { 
                    if(loai=='all')
                 {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                     '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                    '<td>' + thongkesp[i].soluong + '</td>' +  
                     '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>' + '</tr>';
                   
                   }
                 if(loai=='sport')
                 
                     if(thongkesp[i].brand=='sport')
                  {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                     '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                     '<td>' + thongkesp[i].soluong + '</td>' +  
                     '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                    
                  }
                  if(loai=='tshirt')
                     if(thongkesp[i].brand=='tshirt')
                  {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                     '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                     '<td>' + thongkesp[i].soluong + '</td>' +  
                     '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                    
                  }
                  if(loai=='shirt')
                     if(thongkesp[i].brand=='shirt')
                  {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                     '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                     '<td>' + thongkesp[i].soluong + '</td>' +  
                     '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                    
                  }
                  if(loai=='polo')
                     if(thongkesp[i].brand=='polo')
                  {   h+=  '<tr>' +'<td>'+ thongkesp[i].ngay + '</td>' + 
                     '<td style="text-align: left;padding-left:10px">'+    thongkesp[i].ten +   '</td>' + 
                     '<td>' + thongkesp[i].soluong + '</td>' +  
                     '<td class="doanhthu">' + thongkesp[i].doanhthu + '</td>'  + '</tr>';
                    
                  }
                 
                   }
    }
    
   
    document.getElementById('homecontent').innerHTML=h;
    var doanhthu=document.getElementsByClassName("doanhthu");
   
    var tongdoanhthu=0;
    for(var i=0;i<doanhthu.length;i++){
        tongdoanhthu+=parseInt(doanhthu.item(i).innerHTML);
        
    }
    h+='<tr>'+'<td colspan="3" style="text-align:right;color:red ;padding-right:10px">'+"Tổng:"+'</td>'+'<td>'+tongdoanhthu+'</td>'
    document.getElementById('homecontent').innerHTML=h;
   document.getElementById('page').innerHTML = '';
    
}

}
function closefil_donhang(){
    document.getElementById('filter_donhang').style.display='none';
}
function openfil_donhang(){
    document.getElementById('filter_donhang').style.display='block';
}
function filter_donhang(){
    var billArray=JSON.parse(localStorage.getItem('bill'));
 
    var date3 = document.getElementById('date3').value;
    var date4 = document.getElementById('date4').value;
    
    var date33=new Date(date3);
    var date44=new Date(date4);
    if(date33>date44) 
    {
        alert('nhập ngày không chính xác vui lòng nhập lại');
        bt3click();
    }
    else{
    var s='<div id="maintable">' +
    '<h1 style="color: black;font-size: xx-large">Danh Sách Đơn Hàng</h1>' +
    '<table id="productlist">' +
    '<tr><th>Ngày</th><th>Khách hàng</th><th>Giá đơn hàng</th><th>đơn hàng</th><th>Trạng thái</th></tr>';
    for(var i=0;i<billArray.length;i++){
        var date=new Date(billArray[i].date2);
        if(date>=date33 && date<=date44)
        {
		if(billArray[i].status=='Chưa xử lý'){
			s+=
    '<td>'+billArray[i].date+'</td>'+
    '<td>'+billArray[i].customer.fullname+'</td>'+
    '<td>'+stylenum(billArray[i].totalprice)+'</td>'+
    '<td style="text-decoration: underline; cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
    '<td style="color: red">'+billArray[i].status+'</td>'+
    '</tr>';
    }
    else {
    s+=
    '<td>'+billArray[i].date+'</td>'+
    '<td>'+billArray[i].customer.fullname+'</td>'+
    '<td>'+stylenum(billArray[i].totalprice)+'</td>'+
    '<td style="text-decoration: underline; cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
    '<td style="color: blue">'+billArray[i].status+'</td>'+
    '</tr>';
    }
        }
    else
    if(date>=date33 && Number.isNaN(date44.valueOf())){
        if(billArray[i].status=='Chưa xử lý'){
			s+=
    '<td>'+billArray[i].date+'</td>'+
    '<td>'+billArray[i].customer.fullname+'</td>'+
    '<td>'+stylenum(billArray[i].totalprice)+'</td>'+
    '<td style="text-decoration: underline; cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
    '<td style="color: red">'+billArray[i].status+'</td>'+
    '</tr>';
    }
    else {
    s+=
    '<td>'+billArray[i].date+'</td>'+
    '<td>'+billArray[i].customer.fullname+'</td>'+
    '<td>'+stylenum(billArray[i].totalprice)+'</td>'+
    '<td style="text-decoration: underline; cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
    '<td style="color: blue">'+billArray[i].status+'</td>'+
    '</tr>';
    }
}
    else
    if(date<=date44 && Number.isNaN(date33.valueOf())){   
          if(billArray[i].status=='Chưa xử lý'){
        s+=
'<td>'+billArray[i].date+'</td>'+
'<td>'+billArray[i].customer.fullname+'</td>'+
'<td>'+stylenum(billArray[i].totalprice)+'</td>'+
'<td style="text-decoration: underline; cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
'<td style="color: red">'+billArray[i].status+'</td>'+
'</tr>';
}
else {
s+=
'<td>'+billArray[i].date+'</td>'+
'<td>'+billArray[i].customer.fullname+'</td>'+
'<td>'+stylenum(billArray[i].totalprice)+'</td>'+
'<td style="text-decoration: underline; cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
'<td style="color: blue">'+billArray[i].status+'</td>'+
'</tr>';
        
}
}
if(Number.isNaN(date33.valueOf()) && Number.isNaN(date44.valueOf())){
    if(billArray[i].status=='Chưa xử lý'){
        s+=
'<td>'+billArray[i].date+'</td>'+
'<td>'+billArray[i].customer.fullname+'</td>'+
'<td>'+stylenum(billArray[i].totalprice)+'</td>'+
'<td style="text-decoration: underline; cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
'<td style="color: red">'+billArray[i].status+'</td>'+
'</tr>';
}
else {
s+=
'<td>'+billArray[i].date+'</td>'+
'<td>'+billArray[i].customer.fullname+'</td>'+
'<td>'+stylenum(billArray[i].totalprice)+'</td>'+
'<td style="text-decoration: underline; cursor: pointer;" onclick="showbill('+billArray[i].id+')">Chi tiết đơn hàng</td>'+
'<td style="color: blue">'+billArray[i].status+'</td>'+
'</tr>';
}
}


    }
    document.getElementById('homecontent').innerHTML=s;
}
}