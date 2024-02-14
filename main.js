let shop = document.getElementById('shop');
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
	<div id="product-${id}" class="product">
	<img src="${src}" alt="">
	<div class="detail">
		<h3>${name}</h3>
		<p>${description}</p>
		<div class="price-qty">
			<h3>$ ${price}</h3>
			<div class="qty">
			<p onclick="decrement(${id})">-</p>
			<input type="text" value="0" name="number" id="${id}" readonly>
			<p onclick="increment(${id})">+</p>
			</div>
		</div>
	</div>
	</div>
	`)
	}).join("");
};
generateShop();
let basket = []
console.log(basket);
let increment = (id)=>{
	let selectItem = id;
      basket.push({
		id:selectItem.id,
		item:1,
	})
	console.log(basket);
};
let decrement = (id)=>{
	let selectItem = id;
	console.log(selectItem.id)
};
let update = ()=>{};


