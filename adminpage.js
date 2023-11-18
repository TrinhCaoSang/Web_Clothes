var addNew = document.getElementById('prdAdd');
addNew.style.display = 'none';

var mode;
//mode(isEdit)

var cancel = document.getElementById('cancel');
cancel.addEventListener('click', function(){
    if(addNew.style.display!='none') addNew.style.display = 'none';
});

var cfm = document.getElementById('confirm');
cfm.addEventListener('click', function(){
    var checking = 0;
    var tid, tname, tprice, tbrand, timg;

    var temp = document.getElementById('prdId');
    tid = temp.value;
    if(tid.trim() === "") checking = 1;
    for(var i=0;i<arrayProduct.length;i++)
        if(tid === arrayProduct[i].productID){
            checking=2;
            break;
        }

    temp = document.getElementById('prdName');
    tname = temp.value;
    if(tname.trim() === "") checking = 1;

    temp = document.getElementById('prdPrice');
    tprice = temp.value;
    if(tprice.trim() === "") checking = 1;
    if(tprice<500) checking=3;

    temp = document.getElementById('prdBrand');
    tbrand = temp.value;
    if(tbrand.trim() === "") checking = 1;
    
    temp = document.getElementById('prdImg');
    timg = temp.value;
    if(timg.trim() === "" && !mode) checking = 1;

    var s;
    switch(checking){
        case 0: 
            if(!mode) s = 'Thêm thành công.';
            else s = 'Sửa thành công.';
            break;
        case 1: s = 'Vui lòng không để trống thông tin nào, kể cả ảnh sản phẩm.'; break;
        case 2: s = 'ID bị trùng, vui lòng kiểm tra lại.'; break;
        case 3: s = 'Giá tiền không hợp lệ, vui lòng kiểm tra lại.(Giá tiền tối thiểu là 500VND)'; break;
    }
    var tindex;
    if(checking===0){
        if(!mode){
            tindex = arrayProduct.length;
            arrayProduct[tindex].productID = tid;
        } else {
            for(var i=0;i<arrayProduct.length;i++)
                if(arrayProduct[i].productID===tid){
                    tindex = i;
                    break;
                }
            arrayProduct[tindex].name = tname;
            arrayProduct[tindex].brand = tbrand;
            arrayProduct[tindex].price = tprice;
            arrayProduct[tindex].img = timg;
            }
    }

    alert(s);
    addNew.style.display = 'none';
    handlePageNum(currrentPage);
});

var quickId = document.getElementById('quickID');
quickId.addEventListener('click', function(){
    //inititalize min
    var min = 99999;
    var i;
    for(i=0;i<arrayProduct.length;i++)
        if(arrayProduct[i].productID < min) min=arrayProduct[i].productID;
    
    //if Id(min) is used then min++ and then checking again
    while(arrayProduct.some(product => product.productID === min))
        min++;
    
    var quickID = document.getElementById('prdId');
    quickID.value = min;
});



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
    
    var addBtn = document.getElementById('themsanpham');
        addBtn.addEventListener('click', function(){
            mode=false;
            initEditPRD(-1);
        });
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

    var addBtn = document.getElementById('themsanpham');
        addBtn.addEventListener('click', function(){
            mode=false;
            initEditPRD(-1);
        });
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

function initEditPRD(index){
    var temp = document.getElementById('prdId');
    if(index!=-1){
        document.getElementById('prdId').disabled = true;
        document.getElementById('quickID').disabled = true;

        temp.value=arrayProduct[index].productID;
        temp = document.getElementById('prdName');
        temp.value=arrayProduct[index].name;
        temp = document.getElementById('prdPrice');
        temp.value=arrayProduct[index].price;
        temp = document.getElementById('prdBrand');
        temp.value=arrayProduct[index].brand;
        
        var holder = document.getElementById('prdImgHolder');
        holder.style.backgroundImage = 'url('+arrayProduct[index].img+')';
        
    } else {
        temp.value='';
        document.getElementById('prdId').disabled = false;
        document.getElementById('quickID').disabled = false;

        temp = document.getElementById('prdName'); temp.value='';
        temp = document.getElementById('prdPrice'); temp.value='';
        temp = document.getElementById('prdBrand'); temp.value='';
        temp = document.getElementById('prdImg'); temp.value='';

        var holder = document.getElementById('prdImgHolder');
        holder.style.backgroundImage = 'none';
    }
    addNew.style.display = 'flex';
}

function displayPrdImg(){
    var prdImg = document.getElementById('prdImg');
    var holder = document.getElementById('prdImgHolder');

    if(prdImg.files.length>0){
        var file = prdImg.files[0];

        if (file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function (e) {
                holder.style.backgroundImage = 'url(' + e.target.result + ')';
            };
            reader.readAsDataURL(file);
        } else {
            alert('Vui lòng chỉ chọn định dạng file ảnh.');
            prdImg.value="";
            holder.style.backgroundImage='';
        }
    } else holder.style.backgroundImage='';
}

function deleteproduct(productID){
    var confirmation = window.confirm('Tiến hành xóa sản phẩm khỏi mục danh sách?');
    if(!confirmation) exit(0);
    var index;
    for(var i=0;i<arrayProduct.length;i++)
        if(arrayProduct[i].productID === productID){
            index=i;
            break;
        }
    perProduct.splice(index, 1);
    arrayProduct.splice(index, 1);
    alert('Xoá thành công.');
    handlePageNum(currrentPage);
}

function showchangeproductbox(productID){
    var index;
    for(var i=0;i<arrayProduct.length;i++)
        if(arrayProduct[i].productID === productID){
            index=i;
            break;
        }
    mode=true;
    initEditPRD(index);
}
