let shop = document.getElementById('shop');
let input = document.getElementsByClassName('input');
let cartAmount = document.getElementById('cartAmount');

let basket = JSON.parse(localStorage.getItem("data")) || []
let generateShop = ()=>{
	return shop.innerHTML= shopData.map((x)=>{
	let {id,src,name,description,price}= x;
	let search = basket.find((x)=> x.id === id) || []
	return`
	<div id="main-product" class="main-product">
            <img width="100" height="100" src="${src}" alt="">
            <div class="main-detail">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price-qty">
                    <h3>$ ${price}</h3>
                    <div class="main-qty">
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <div id="${id}" class="items">
						${search.item === undefined ? 0 : search.item}
				        </div>
                        <i onclick="increment(${id})" class="bi bi-plus"></i>
                    </div>
                </div>
            </div>
        </div>
	`
	}).join("");
};
generateShop();
      
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
	basket = basket.filter((x)=> x.item !== 0);    // i have to know about "filter"
	update(selectItem.id)
	localStorage.setItem("data", JSON.stringify(basket))
};
let decrement = (id)=>{
	let selectItem = id;
	let search = basket.find((x)=> x.id === selectItem.id);
	if (search === undefined) return;
	if (search.item === 0 || undefined) return;
	else{
		search.item -= 1
	}
	update(selectItem.id)
	basket = basket.filter((x)=> x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket))
};
let update = (id)=>{
	let search = basket.find((x)=> x.id === id)
	document.getElementById(id).innerHTML = search.item;
      calculation();
      localStorage.setItem("data", JSON.stringify(basket))
}; 
let calculation = ()=>{
      let cartAmount = document.getElementById('cartAmount');
      cartAmount.innerHTML = (basket.map((x)=> x.item).reduce((x,y)=> x+y,0));
}
calculation();
if (cartAmount.innerText >= 1000) {
      cartAmount.innerHTML = "1K+"
}

function CheckFirstVisit() {
	let isfirstVisit = localStorage.getItem('isfirstVist');
	
	if (!isfirstVisit) {
		localStorage.clear();
		localStorage.setItem('isfirstVist', true)
	}
}
CheckFirstVisit();