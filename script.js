let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let product = [
    {
        id: 1,
        name: 'Cheese Pizza',
        image: 'pizza.jpeg',
        price: 7.00
    },
    {
        id: 2,
        name: 'Pepperoni Pizza',
        image: 'p-pizza.jpg',
        price: 7.50
    },
    {
        id: 3,
        name: 'Pasta',
        image: 'pasta.jpg',
        price: 8.00
    },
    {
        id: 4,
        name: 'Cesar Salad',
        image: 'Salad.jpg',
        price: 6.50
    },
    {
        id: 5,
        name: 'Southern Style Plate',
        image: 'Southern.jpg',
        price: 8.00
    },

];
let listCards =[];
function initApp(){
    product.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
           <img src="image/${value.image}"/>
           <div class = "title">${value.name}</div>
           <div class = "price">${value.price.toLocaleString()}</div>
           <button onclick ="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key]==null){
        listCards[key]=JSON.parse(JSON.stringify(product[key]));
        listCards[key].quantity=1;
    }
    reloadCard();

}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count =count+value.quantity;
        if (value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML=`
                <div><img src = "image/${value.image}"</div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick ="changeQuantity(${key}, ${value.quantity-1})">-</button>
                    <div class ="count">${value.quantity}</div>
                    <button onclick ="changeQuantity(${key}, ${value.quantity+1})">+</button>

                </div> `;
            listCard.appendChild(newDiv)  
          }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key,quantity){
    if(quantity==0){
        delete listCards[key];
    }else{
        listCards[key].quantity =quantity;
        listCards[key].price = quantity*product[key].price;
        
    }
    reloadCard();
}
