var index_slideshow = 0;
slideShow();
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
function showProductInfo() {
    document.getElementById('productInfo').style.display = 'block';
    // hien thi san pham
}
function closeProductInfo() {
    document.getElementById('productInfo').style.display = 'none';
}