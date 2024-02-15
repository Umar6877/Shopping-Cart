let shop = document.getElementById('shop');
let input = document.getElementsByClassName('input');
let cartAmount = document.getElementById('cartAmount');
let shopData = [
	{     id: "sdsdsd",
		src: 'images/img-1.jpg',
		name:'Casual Shirts',
		description:'Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.',
		price:'45',},
	{     id: 'dsdfdf',
		src: 'images/img-2.jpg',
		name:'Office Shirts',
		description:'Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.',
		price:'100',},
	{   id: 'sdsds',
		src: 'images/img-3.jpg',
		name:'T Shirts',
		description:'Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.',
		price:'25',},
	{   id: 'dssdsdsdf',
		src: 'images/img-4.jpg',
		name:'Mens Suit',
		description:'Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.',
		price:'300',},
	]
let generateShop = ()=>{
	return shop.innerHTML= shopData.map((x)=>{
	let {id,src,name,description,price}= x
	return(`
	<div id="" class="product">
            <img src="${src}" alt="">
            <div class="detail">
                <h3>${name}</h3>
                <p>Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.</p>
                <div class="price-qty">
                    <h3>$ ${price}</h3>
                    <div class="qty">
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <div id="${id}" class="items">0</div>
                       <i onclick="increment(${id})" class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
	`)
	}).join("");
};
generateShop();
let basket = [];
let increment = (id)=>{
	let selectItem = id;
	let search = basket.find((x)=> x.id === selectItem.id);
	if (search === undefined) {
		basket.push({
			id: selectItem.id,
			item: 1,
		})
	}else{
		search.item += 1;
	}
	update(selectItem.id)
};
let decrement = (id)=>{
	let selectItem = id;
	let search = basket.find((x)=> x.id === selectItem.id);
	if (search.item === 0) return 
	else{
		search.item -= 1
	}
	update(selectItem.id)
};
let update = (id)=>{
	let search = basket.find((x)=> x.id === id)
	document.getElementById(id).innerHTML = search.item;
      calculation();
}; 

let calculation = ()=>{
      let cartAmount = document.getElementById('cartAmount');
      cartAmount.innerHTML = (basket.map((x)=> x.item).reduce((x,y)=> x+y,0));
}
if (cartAmount.innerText >= 1000) {
      cartAmount.innerHTML = "1K+"
}