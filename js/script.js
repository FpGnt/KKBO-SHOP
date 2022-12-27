function sas(){
data2={
  "payment_method_types[0]": "card",
  "phone_number_collection[enabled]": "true",
  "shipping_address_collection[allowed_countries][0]": "LV",
  "shipping_address_collection[allowed_countries][1]": "LT",
  "shipping_address_collection[allowed_countries][2]": "EE",
  "shipping_address_collection[allowed_countries][3]": "IT",
  "shipping_options[0][shipping_rate_data][type]": "fixed_amount",
  "shipping_options[0][shipping_rate_data][fixed_amount][amount]": "500",
  "shipping_options[0][shipping_rate_data][fixed_amount][currency]": "eur",
  "shipping_options[0][shipping_rate_data][display_name]": "DPD Parcel Machine Delivery",
  "shipping_options[0][shipping_rate_data][delivery_estimate][minimum][unit]": "business_day",
  "shipping_options[0][shipping_rate_data][delivery_estimate][minimum][value]": "5",
  "shipping_options[0][shipping_rate_data][delivery_estimate][maximum][unit]": "business_day",
  "shipping_options[0][shipping_rate_data][delivery_estimate][maximum][value]": "7",
  "mode": "payment",
  "success_url": "https://shop.kkbo.pro/success.html",
  "cancel_url": "https://shop.kkbo.pro/declined.html"
}



data1 = JSON.parse(localStorage.getItem('list'))


Array.from(data1).forEach(function callback(element, index) {

  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - XS"){
    x='line_items['+index+'][quantity]'
    y='line_items['+index+'][price]'
    data2[y]='price_1MAwKHIqRKkHXjS3WKVfAEHq',
    data2[x]=element.prdqnt
  }
  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - S"){
    x='line_items['+index+'][quantity]'
    y='line_items['+index+'][price]'
    data2[y]='price_1MAz6jIqRKkHXjS3IjnI1KWf',
    data2[x]=element.prdqnt
  }

  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - M"){ 
    x='line_items['+index+'][quantity]'
    y='line_items['+index+'][price]'
    data2[y]='price_1MAz77IqRKkHXjS3rvsCgo3p',
    data2[x]=element.prdqnt
  }

  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - L"){
    x='line_items['+index+'][quantity]'
    y='line_items['+index+'][price]'
    data2[y]='price_1MAz7UIqRKkHXjS3ymVbYmsk',
    data2[x]=element.prdqnt
  }

  if(element.prdname+' - ' + element.prdsize==="KKBØ v1 - XL"){
    x='line_items['+index+'][quantity]'
    y='line_items['+index+'][price]'
    data2[y]='price_1MAz7lIqRKkHXjS3Wyin84nh',
    data2[x]=element.prdqnt
  }


  if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - XS"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MAwJtIqRKkHXjS3ijTBqX1J',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - S"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB02VIqRKkHXjS3YensqXhA',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - M"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB03DIqRKkHXjS38RuzJRWi',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - L"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB03TIqRKkHXjS3xvKi7ikm',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v2 - XL"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB03tIqRKkHXjS3lMnT74Uz',
  data2[x]=element.prdqnt
}

if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - XS"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB04PIqRKkHXjS3qqOXDdaX',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - S"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MAu1VIqRKkHXjS3IbuGc5cy',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - M"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB05oIqRKkHXjS35PG8Go2U',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - L"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB063IqRKkHXjS3vfw8E8NQ',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v3 - XL"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB06JIqRKkHXjS3sl75bNvk',
  data2[x]=element.prdqnt
}

if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - XS"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB06ZIqRKkHXjS3ICHSt5ct',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - S"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB06sIqRKkHXjS3Z0k1p9vh',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - M"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB076IqRKkHXjS3cQ1y2pCP',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - L"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MB07NIqRKkHXjS3mvdlmQYp',
  data2[x]=element.prdqnt
}
if(element.prdname+' - ' + element.prdsize==="KKBØ v4 - XL"){
  x='line_items['+index+'][quantity]'
  y='line_items['+index+'][price]'
  data2[y]='price_1MAtQjIqRKkHXjS39vMkP1Pp',
  data2[x]=element.prdqnt
}
});



  var settings = {
    "url": "https://api.stripe.com/v1/checkout/sessions",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer sk_test_51MAtMtIqRKkHXjS3KLVYsLWFUnICaf4plUUe7URajzZKkYGzAms3LVSNjskJJxlGDvGEoOoGM4Mv4RzAhpLJajAz00EuGJPNwy",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": data2
  };

  $.ajax(settings).done(function (response) {
    window.location.href = response.url;
  });
}