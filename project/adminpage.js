const bars = document.querySelectorAll('.bar');
const bt1 = document.getElementById('button1');
const bt2 = document.getElementById('button2');
const bt3 = document.getElementById('button3');
const bt4 = document.getElementById('button4');
const bt5 = document.getElementById('button5');
const bt6 = document.getElementById('button6');
const contentHolder = document.getElementById('content');

let selectedPane = null;
    
bars.forEach(bar => {
    let timeout;
    var check=false;

    bar.addEventListener('mouseenter', () => {
    bar.classList.add('textSlide');
    });
    
    bar.addEventListener('mouseleave', () => {
    bar.classList.remove('textSlide');
    });

    bar.addEventListener('click', () => {
        if(selectedPane!=null)
            selectedPane.classList.remove('selectedPane');
        bar.classList.add('selectedPane');
        selectedPane = bar;
    });
});

bt1.addEventListener('click', () => {
    fetch("homepage.html")
        .then(response => response.text())
        .then(data =>{
            contentHolder.innerHTML = data;
        })
        .catch(error =>{
            console.error("Error loading content", error);
        });
});

bt2.addEventListener('click', () => {
    fetch("product.html")
        .then(response => response.text())
        .then(data =>{
            contentHolder.innerHTML = data;
        })
        .catch(error =>{
            console.error("Error loading content", error);
        });
});