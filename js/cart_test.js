(function(){
	// Add to Cart Interaction - by CodyHouse.co
	  var cart = document.getElementsByClassName('js-cd-cart');
	  cartBody = cart[0].getElementsByClassName('cd-cart__body')[0]
	  var cartlistreload = document.getElementById('cart_products')
	  cartTotal = cart[0].getElementsByClassName('cd-cart__checkout')[0].getElementsByTagName('span')[0],
	  cartCount = cart[0].getElementsByClassName('cd-cart__count')[0],
	  cartCountItems = cartCount.getElementsByTagName('li'),
	 
	
	  reloaded()
	
	function reloaded(){
		data = JSON.parse(localStorage.getItem('list'))
		quantity = Object.keys(data).length
	
		if (quantity>0){
		Util.removeClass(cart[0], 'cd-cart--empty');
	
	
		Array.from(data).forEach(element => {
				var productAdded = `<div class="cd-cart__image"><a href="#0"><img src="${element.prdimg}" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">${element.prdname} - ${element.prdsize}</a></h3><span class="cd-cart__price">${element.prdprice}</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-KKBØ v1">Qty:${element.prdqnt}</label><span class="cd-cart__select"><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "></polyline></svg></span></div></div></div>`
				cartlistreload.insertAdjacentHTML('beforeend', '<li class="cd-cart__product">'+productAdded+'</li>');
				
				const price = element.prdprice;
				updateCartTotal(price.replace('€','')*element.prdqnt, true)
				updateCartCount(true, +element.prdqnt)
	
		  });
		}
		else{}
	}
	
	
	function updateCartCount(emptyCart, quantity) {
		if( typeof quantity === 'undefined' ) {
			var actual = Number(cartCountItems[0].innerText) + 1;
			var next = actual + 1;
			
			if( emptyCart ) {
				cartCountItems[0].innerText = actual;
				cartCountItems[1].innerText = next;
				animatingQuantity = false;
			} else {
				Util.addClass(cartCount, 'cd-cart__count--update');
	
				setTimeout(function() {
					cartCountItems[0].innerText = actual;
				}, 150);
	
				setTimeout(function() {
					Util.removeClass(cartCount, 'cd-cart__count--update');
				}, 200);
	
				setTimeout(function() {
					cartCountItems[1].innerText = next;
					animatingQuantity = false;
				}, 230);
			}
		} else {
			var actual = Number(cartCountItems[0].innerText) + quantity;
			var next = actual + 1;
			
			cartCountItems[0].innerText = actual;
			cartCountItems[1].innerText = next;
			animatingQuantity = false;
		}
	};
	
	function updateCartTotal(price, bool) {
		cartTotal.innerText = bool ? (Number(cartTotal.innerText) + Number(price)).toFixed(2) : (Number(cartTotal.innerText) - Number(price)).toFixed(2);
	};
	
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  if(cart.length > 0) {
		  var cartAddBtns = document.getElementsByClassName('js-cd-add-to-cart'),
			  cartBody = cart[0].getElementsByClassName('cd-cart__body')[0],
			  cartList = cartBody.getElementsByTagName('ul')[0],
			  cartListItems = cartList.getElementsByClassName('cd-cart__product'),
			  cartTotal = cart[0].getElementsByClassName('cd-cart__checkout')[0].getElementsByTagName('span')[0],
			  cartCount = cart[0].getElementsByClassName('cd-cart__count')[0],
			  cartCountItems = cartCount.getElementsByTagName('li'),
			  cartUndo = cart[0].getElementsByClassName('cd-cart__undo')[0],
			prodname = document.getElementById('prod_name').innerHTML;
			prodprice = document.getElementById('prod_price').innerHTML;
			prodimg = document.getElementById("product_img").src;
			productId = prodname;
			qnt = document.getElementById("quantity").value
			var seize = ''
			var colorr= ''
	
			$('.cable-choose button').click(function(){
				var $this = $(this);
				if (!$this.hasClass('btn-success')) {
					$('.cable-choose button').removeClass('btn-success')
					$this.addClass('btn-success');
					 seize = this.innerHTML
				}
			})
	
			document.addEventListener('click', function () {
				var prd = [];
		
				$('.cd-cart__product').each(function(){
				var	prddata=this.innerHTML
	
					prdname = prddata.match(/<h3 class="truncate"><a href="#0">(.*?) -/i)[1];
					prdsize = prddata.match(/ - (.*?)</i)[1];
					prdqnt = prddata.match(/Qty:(.*?)</i)[1];
					prdprice = prddata.match(/class="cd-cart__price">(.*?)</i)[1];
					prdimg = prddata.match(/src="(.*?)"/i)[1];
					prdid = prdname+prdsize
					prd.push({prdid, prdname, prdsize, prdqnt, prdprice, prdimg})
				})
			
				 
				 localStorage.setItem('list', JSON.stringify(prd))
				 x = JSON.parse(localStorage.getItem('list'))
			
			}, false);
	
	
			  cartTimeoutId = false,
			  animatingQuantity = false;
			initCartEvents();
	
	
	
			function initCartEvents() {
				// add products to cart
				for(var i = 0; i < cartAddBtns.length; i++) {(function(i){
					cartAddBtns[i].addEventListener('click', addToCart);
				})(i);}
	
				// open/close cart
				cart[0].getElementsByClassName('cd-cart__trigger')[0].addEventListener('click', function(event){
					event.preventDefault();
					toggleCart();
				});
				
				cart[0].addEventListener('click', function(event) {
					if(event.target == cart[0]) { // close cart when clicking on bg layer
						toggleCart(true);
					} else if (event.target.closest('.cd-cart__delete-item')) { // remove product from cart
						event.preventDefault();
						removeProduct(event.target.closest('.cd-cart__product'));
					}
				});
	
				// update product quantity inside cart
				cart[0].addEventListener('change', function(event) {
					if(event.target.tagName.toLowerCase() == 'select') quickUpdateCart();
				});
			};
	
			function addToCart(event) {
				event.preventDefault();
				if(animatingQuantity) return;
				var cartIsEmpty = Util.hasClass(cart[0], 'cd-cart--empty');
				//update cart product list
				addProduct(this);
				console.log(event)
				//update number of items 
				updateCartCount(cartIsEmpty, +qnt);
				//update total price
				updateCartTotal(this.getAttribute('data-price')*qnt, true);
				//show cart
				Util.removeClass(cart[0], 'cd-cart--empty');
			};
	
			function toggleCart(bool) { // toggle cart visibility
				var cartIsOpen = ( typeof bool === 'undefined' ) ? Util.hasClass(cart[0], 'cd-cart--open') : bool;
			
				if( cartIsOpen ) {
					Util.removeClass(cart[0], 'cd-cart--open');
					//reset undo
					if(cartTimeoutId) clearInterval(cartTimeoutId);
					Util.removeClass(cartUndo, 'cd-cart__undo--visible');
					removePreviousProduct(); // if a product was deleted, remove it definitively from the cart
	
					setTimeout(function(){
						cartBody.scrollTop = 0;
						//check if cart empty to hide it
						if( Number(cartCountItems[0].innerText) == 0) Util.addClass(cart[0], 'cd-cart--empty');
					}, 500);
				} else {
					Util.addClass(cart[0], 'cd-cart--open');
				}
			};
	
			function addProduct(target) {
				// this is just a product placeholder
				// you should insert an item with the selected product info
				// replace productId, productName, price and url with your real product info
				// you should also check if the product was already in the cart -> if it is, just update the quantity
				qnt = document.getElementById("quantity").value
				target = '<li class="cd-cart__product"><div class="cd-cart__image"><a href="#0"><img src="'+prodimg+'" alt="placeholder"></a></div><div class="cd-cart__details"><h3 class="truncate"><a href="#0">'+prodname+' - ' + seize +'</a></h3><span class="cd-cart__price">'+prodprice+'</span><div class="cd-cart__actions"><a href="#0" class="cd-cart__delete-item">Delete</a><div class="cd-cart__quantity"><label for="cd-product-'+ productId +'">Qty:'+qnt+'</label><span class="cd-cart__select"><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
				var productAdded = target;
				cartList.insertAdjacentHTML('beforeend', productAdded);
			};
	
	
	
	
	
			function removeProduct(product) {
				if(cartTimeoutId) clearInterval(cartTimeoutId);
				removePreviousProduct(); // prduct previously deleted -> definitively remove it from the cart
				
				var topPosition = product.offsetTop,
				def = product.getElementsByClassName('cd-cart__quantity')[0].innerHTML
				res = def.match(/Qty:(.*?)</i)[1];
	
	
					productQuantity = res,
					productTotPrice = Number((product.getElementsByClassName('cd-cart__price')[0].innerText).replace('€', '')) * productQuantity;
	
				product.style.top = topPosition+'px';
				Util.addClass(product, 'cd-cart__product--deleted');
	
				//update items count + total price
				updateCartTotal(productTotPrice, false);
				updateCartCount(true, -productQuantity);
				Util.addClass(cartUndo, 'cd-cart__undo--visible');
	
			};
	
			function removePreviousProduct() { // definitively removed a product from the cart (undo not possible anymore)
				var deletedProduct = cartList.getElementsByClassName('cd-cart__product--deleted');
				if(deletedProduct.length > 0 ) deletedProduct[0].remove();
			};
	
			function updateCartCount(emptyCart, quantity) {
				if( typeof quantity === 'undefined' ) {
					var actual = Number(cartCountItems[0].innerText) + 1;
					var next = actual + 1;
					
					if( emptyCart ) {
						cartCountItems[0].innerText = actual;
						cartCountItems[1].innerText = next;
						animatingQuantity = false;
					} else {
						Util.addClass(cartCount, 'cd-cart__count--update');
	
						setTimeout(function() {
							cartCountItems[0].innerText = actual;
						}, 150);
	
						setTimeout(function() {
							Util.removeClass(cartCount, 'cd-cart__count--update');
						}, 200);
	
						setTimeout(function() {
							cartCountItems[1].innerText = next;
							animatingQuantity = false;
						}, 230);
					}
				} else {
					var actual = Number(cartCountItems[0].innerText) + quantity;
					var next = actual + 1;
					
					cartCountItems[0].innerText = actual;
					cartCountItems[1].innerText = next;
					animatingQuantity = false;
				}
			};
	
			function updateCartTotal(price, bool) {
				cartTotal.innerText = bool ? (Number(cartTotal.innerText) + Number(price)).toFixed(2) : (Number(cartTotal.innerText) - Number(price)).toFixed(2);
			};
	
	
	
			function quickUpdateCart() {
				var quantity = 0;
				var price = 0;
	
				for(var i = 0; i < cartListItems.length; i++) {
					if( !Util.hasClass(cartListItems[i], 'cd-cart__product--deleted') ) {
						var singleQuantity = Number(cartListItems[i].getElementsByTagName('select')[0].value);
						quantity = quantity + singleQuantity;
						price = price + singleQuantity*Number((cartListItems[i].getElementsByClassName('cd-cart__price')[0].innerText).replace('€', ''));
					}
				}
	
				cartTotal.innerText = price.toFixed(2);
				cartCountItems[0].innerText = quantity;
				cartCountItems[1].innerText = quantity+1;
			};
	  }
	})();