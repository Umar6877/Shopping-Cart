let label = document.getElementById('label');
let shoppingcart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = ()=>{
      let cartAmount = document.getElementById('cartAmount');
      cartAmount.innerHTML = basket.map((x)=> x.item).reduce((x,y)=> x+y ,0) || 0;
}
calculation();
let generateItems = ()=>{
      if (basket.length !== 0) {
            shoppingcart.innerHTML = basket.map((x)=>{
                  let {id, item}= x;
                  let search = shopData.find((x)=> x.id === id) || []
                        return `
                              <div class="cart-product">
                              <img src="${search.src}">
                              <div class="descrition-box">
                                    <div class="cart-detail">
                                          <h3>${search.name}</h3>
                                          <div class="cart-price">$ ${search.price}</div>
                                          <span class="cross" onclick="removeItem(${id})">X</span>
                                    </div>
                                    <div class="cart-qty">
                                          <i onclick="decrement(${id})" class="bi bi-dash"></i>
                                          <div id="${id}" class="items">
                                          ${item}
                                          </div>
                                          <i onclick="increment(${id})" class="bi bi-plus"></i>
                                    </div>
                                    <h3>$ ${item * search.price}</h3>
                              </div>
                        </div>
                        `
            }).join("")
       
      } 
      else {
            shoppingcart.innerHTML = ``;
            label.innerHTML = `
            <h2>Cart is Empty</h2>
            <a href="index.html">
                  <button class="Homebtn">Back to Home</button>
            </a>
            `
      }

}
generateItems();
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
	basket = basket.filter((x)=> x.item !== 0);    // i have to know about "filter"
      generateItems()
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
      generateItems()
      localStorage.setItem("data", JSON.stringify(basket))
};
let update = (id)=>{
	let search = basket.find((x)=> x.id === id)
	document.getElementById(id).innerHTML = search.item;
      calculation();
      localStorage.setItem("data", JSON.stringify(basket));
      totalAmount();
};

let removeItem = (id)=>{
      let selectitem = id
      basket = basket.filter((x)=> x.id !== selectitem.id)
      generateItems()
      totalAmount()
      calculation()
      localStorage.setItem("data", JSON.stringify(basket))
}

let totalAmount = ()=>{
      if (basket.length !== 0) {
            let amount = basket.map((x)=>{
                  let {id,item} = x
                  let search = shopData.find((x)=> x.id === id) || []
                  return search.price * item
            }).reduce((x,y)=> x+y)
            label.innerHTML = `
            <h2>Total Bill : $ ${amount}</h2>
            <button onclick="checkOut()" id="checkOut" class="checkOut"><i class="bi bi-printer"></i> Print Bill</button>
            <button onclick="clearCart()" id="removeAll" class="removeAll">Clear Cart</button>
            `
      } else return
}
totalAmount();

let clearCart = ()=>{
      basket = [];
      generateItems()
      calculation()
      localStorage.setItem("data", JSON.stringify(basket))
}
function checkOut() {
      let cartBody = document.getElementById('cartBody');
      cartBody.innerHTML = '';
      cartBody.innerHTML = `
      <section>

                  <table>
                        <thead>
                        <tr>
                              <th>DESCRIPTION</th>
                              <th>QUANTITY</th>
                              <th>UNIT PRICE</th>
                              <th>AMOUNT</th>
                        </tr>
                        </thead>
                        <tbody id="inputItems">
                        
                        </tbody>
                        <tfoot>
                        <tr id="subTotal">
                              <td colspan="3" class="total">SUBTOTAL</td>
                              <td>$40.00</td>
                        </tr>
                    </tfoot>
                  </table>

            </section>
            `;
      let inputItems = document.getElementById('inputItems');
      inputItems.innerHTML = basket.map((x)=>{
            let {id,item} = x;
            let search = shopData.find((x)=> x.id === id);
            return `
                  <tr >
                        <td>${search.name}</td>
                        <td>${item}</td>
                        <td>$ ${search.price}</td>
                        <td>$ ${item*search.price}</td>
                  </tr>
            `
      }).join("")
      let subTotal = document.getElementById('subTotal');
      let amount = basket.map((x)=>{
                  let {id,item} = x
                  let search = shopData.find((x)=> x.id === id) || []
                  return search.price * item
            }).reduce((x,y)=> x+y)
      subTotal.innerHTML = `
      <td colspan="3" class="total">Total Due</td>
      <td>$ ${amount}</td>
      `
      window.print();
      localStorage.clear()
      window.location.reload()
      
      
}


