var stripe = Stripe("pk_test_51MAtMtIqRKkHXjS3P1cczKFPQ3mnUahIneTNoNPsxAil47sNAS5E1LQfOY3gXeSpBqRDip9hIxc5q8Kn4FAeGe5x00oagekLL8");

data = JSON.parse(localStorage.getItem('list'))
item=[];

console.log(data)

Array.from(data).forEach(function callback(element, index) {

console.log(element.prdname+' - ' + element.prdsize)
console.log(index)

  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - XS"){
    items = {price: "price_1MAwKHIqRKkHXjS3WKVfAEHq", quantity: Number(element.prdqnt)}
    `urlencoded.append("line_items[${index}][price]", "price_1MAwKHIqRKkHXjS3WKVfAEHq"); urlencoded.append("line_items[${index}][quantity]", "${Number(element.prdqnt)}");`
    item.push(items)
  }
  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - S"){
    items = {price: "price_1MAz6jIqRKkHXjS3IjnI1KWf", quantity: Number(element.prdqnt)}
    item.push(items)
  }

  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - M"){
    items = {price: "price_1MAz77IqRKkHXjS3rvsCgo3p", quantity: Number(element.prdqnt)}
    item.push(items)
  }

  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - L"){
    items = {price: "price_1MAz7UIqRKkHXjS3ymVbYmsk", quantity: Number(element.prdqnt)}
    item.push(items)
  }

  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - XL"){
    items = {price: "price_1MAz7lIqRKkHXjS3Wyin84nh", quantity: Number(element.prdqnt)}
    item.push(items)
  }


  if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - XS"){
  items = {price: "price_1MAwJtIqRKkHXjS3ijTBqX1J", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - S"){
  items = {price: "price_1MB02VIqRKkHXjS3YensqXhA", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - M"){
  items = {price: "price_1MB03DIqRKkHXjS38RuzJRWi", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - L"){
  items = {price: "price_1MB03TIqRKkHXjS3xvKi7ikm", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - XL"){
  items = {price: "price_1MB03tIqRKkHXjS3lMnT74Uz", quantity: Number(element.prdqnt)}
  item.push(items)
}

if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - XS"){
  items = {price: "price_1MB04PIqRKkHXjS3qqOXDdaX", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - S"){
  items = {price: "price_1MAu1VIqRKkHXjS3IbuGc5cy", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - M"){
  items = {price: "price_1MB05oIqRKkHXjS35PG8Go2U", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - L"){
  items = {price: "price_1MB063IqRKkHXjS3vfw8E8NQ", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - XL"){
  items = {price: "price_1MB06JIqRKkHXjS3sl75bNvk", quantity: Number(element.prdqnt)}
  item.push(items)
}

if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - XS"){
  items = {price: "price_1MB06ZIqRKkHXjS3ICHSt5ct", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - S"){
  items = {price: "price_1MB06sIqRKkHXjS3Z0k1p9vh", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - M"){
  items = {price: "price_1MB076IqRKkHXjS3cQ1y2pCP", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - L"){
  items = {price: "price_1MB07NIqRKkHXjS3mvdlmQYp", quantity: Number(element.prdqnt)}
  item.push(items)
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - XL"){
  items = {price: "price_1MAtQjIqRKkHXjS39vMkP1Pp", quantity: Number(element.prdqnt)}
  item.push(items)
}
});

console.log(item)
/*
 function sas(){

  stripe.redirectToCheckout({
    lineItems:item,
    mode: "payment",
    successUrl: "http://file:///C:/Users/YUNG%20SCREAM/Desktop/KKBO-SHOP/index.html",
    cancelUrl: "http://file:///C:/Users/YUNG%20SCREAM/Desktop/KKBO-SHOP/index.html",
    })

}
*/
function sas(){

  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer sk_test_51MAtMtIqRKkHXjS3KLVYsLWFUnICaf4plUUe7URajzZKkYGzAms3LVSNjskJJxlGDvGEoOoGM4Mv4RzAhpLJajAz00EuGJPNwy");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("payment_method_types[0]", "card");
urlencoded.append("shipping_address_collection[allowed_countries][0]", "US");
urlencoded.append("shipping_address_collection[allowed_countries][1]", "CA");
urlencoded.append("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
urlencoded.append("shipping_options[0][shipping_rate_data][fixed_amount][amount]", "0");
urlencoded.append("shipping_options[0][shipping_rate_data][fixed_amount][currency]", "eur");
urlencoded.append("shipping_options[0][shipping_rate_data][display_name]", "Free shipping");
urlencoded.append("shipping_options[0][shipping_rate_data][delivery_estimate][minimum][unit]", "business_day");
urlencoded.append("shipping_options[0][shipping_rate_data][delivery_estimate][minimum][value]", "5");
urlencoded.append("shipping_options[0][shipping_rate_data][delivery_estimate][maximum][unit]", "business_day");
urlencoded.append("shipping_options[0][shipping_rate_data][delivery_estimate][maximum][value]", "7");
urlencoded.append("line_items[0][price]", "price_1MB063IqRKkHXjS3vfw8E8NQ");
urlencoded.append("line_items[0][quantity]", "2");
urlencoded.append("line_items[1][price]", "price_1MB063IqRKkHXjS3vfw8E8NQ");
urlencoded.append("line_items[1][quantity]", "2");
urlencoded.append("mode", "payment");
urlencoded.append("success_url", "https://example.com/success");
urlencoded.append("cancel_url", "https://example.com/cancel");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://api.stripe.com/v1/checkout/sessions", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}