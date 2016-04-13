
var products = [
{
	title: "Original",
	description: "Yummy original flavor",
	price: 8.99,
	url: "images/original.jpg"
},

{	title: "Blueberry",
	description: "Yummy blueberry flavor",
	price: 8.99,
	url: "images/blueberrybare.jpg"
},

{	title: "Chocolate",
	description: "Yummy chocolate flavor",
	price: 8.99,
	url: "images/chocolate.jpg"

},

{	title: "Lemon",
	description: "Yummy lemon flavor",
	price: 8.99,
	url: "images/lemon.jpg"
},

{	title: "Orange",
	description: "Yummy orange flavor",
	price: 8.99,
	url: "images/orange.jpg"

},

{	title: "Apple",
	description: "Yummy apple flavor",
	price: 8.99,
	url: "images/apple.jpg"
},

{	title: "Rose",
	description: "Yummy rose flavor",
	price: 8.99,
	url: "images/rose.jpg"
},

{	title: "Strawberry",
	description: "Yummy strawberry flavor",
	price: 8.99,
	url: "images/strawberry.jpg"
}
]

var productElement= document.getElementById("productsContainer");

for (var i = 0; i < products.length; i++ ) {
	var eachProduct =products[i];
	productElement.innerHTML += "<p class='productTitle'>" + eachProduct.title + "</p>" +
	"<p class=''>" + eachProduct.description + "</p>" + 
	"<p>" + eachProduct.price + "</p>" + 
	"<img src='"+eachProduct.url+"' alt=''class='productImages'> ";
	console.log("each product", eachProduct);
	
}







