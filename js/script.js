
const card_btn2 = document.querySelectorAll('.card_btn');
console.log(card_btn2);

card_btn2.forEach(btn => {
    btn.addEventListener('click', agregado)
});

function agregado(){
    alert("Producto agregado al carrito");
};
