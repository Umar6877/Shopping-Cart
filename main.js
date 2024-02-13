let shop = document.getElementById('shop');
let shopData = [
	{   number: 1,
		src: 'images/img-1.jpg',
		name:'Casual Shirts',
		description:'Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.',
		price:'45',},
	{   number: 2,
		src: 'images/img-2.jpg',
		name:'Office Shirts',
		description:'Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.',
		price:'100',},
	{   number: 3,
		src: 'images/img-3.jpg',
		name:'T Shirts',
		description:'Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.',
		price:'25',},
	{   number: 4,
		src: 'images/img-4.jpg',
		name:'Mens Suit',
		description:'Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.',
		price:'300',},
	]
let generateShop = ()=>{
	return(shop.innerHTML= shopData.map((x)=>{
		return(shop.innerHTML = `
		<div class="product">
		<img src="${x.src}" alt="">
		<div class="detail">
			<h3>Casual Shirts</h3>
			<p>Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit.</p>
			<div class="price-qty">
				<h3>$ 45</h3>
				<div class="qty">
					<p>+</p>
					<input type="text" value="0" name="number" id="number" readonly>
					<p>-</p>
				</div>
			</div>
		</div>
	</div>`)
	}))

};
generateShop()