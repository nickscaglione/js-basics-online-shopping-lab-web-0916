var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  cart.push( { [item]: Math.floor((Math.random() * 100)) } )

  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (getCart().length == 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var cartViewer = []
    for (var i = 0; i < getCart().length; i++) {
      var key = Object.keys(cart[i])[0]
      cartViewer.push(`${key} at $${cart[i][key]}`)
    }
    console.log(`In your cart, you have ${cartViewer.join(", ")}.`)
  }
}

function removeFromCart(item) {
  var unchanged = true
  if (cart.length >= 1) {
    for (var i = 0; i < getCart().length; i++) {
      var key = Object.keys(cart[i])[0]
      if (key === item) {
        cart.splice([i], 1)
        console.log(`Removed ${item} from your cart.`)
        unchanged = false
      }
    }
  }
  if (unchanged) {
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(cardNo) {
  if (cardNo == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNo}.`)
    setCart([])
  }
}


function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
