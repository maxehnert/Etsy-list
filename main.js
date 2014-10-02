// 1. SHOW HOW TO FIND THE AVERAGE PRICE OF ALL THE ITEMS
console.log(" ");
console.log("Answer to Question 1");
console.log(" ");

// var w = [];
// items.forEach(function(x){
//   var y = x.price;
//     w.push = (y)
// w.reduce(function)
//     console.log(w/25);
// });
//
// });



//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
console.log(" ");
console.log("Answer to Question 2");
console.log(" ");

items.forEach(function(x){
  if(x.price >14.00 && x.price<18.00){
    console.log(x.title)
  }
}
);


//3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
console.log(" ");
console.log("Answer to Question 3");
console.log(" ");

items.forEach(function(x){
  if(x.currency_code == "GBP"){
    console.log(x.title + " \u00A3" + x.price)
  }
}
);

//4. Show me how to find which items are made of wood. Please console.log the ones you find.
console.log(" ");
console.log("Answer to Question 4");
console.log(" ");

items.forEach(function(x){
  x.materials.forEach(function(m){
    if(m=="wood"){
      console.log(x.title);
      }

  });
});

// 5. how me how to find which items are made of eight or more materials. Please console.log the ones you find.
console.log(" ");
console.log("Answer to Question 5");
console.log(" ");



items.forEach(function(x){
  if(x.materials.length>=8)
    {
    // if(console.log("test"), n >= 8){
       console.log(x.title);
     console.log(x.materials);
}
  //});
});


//6. Show me how to calculate how many items were made by their sellers
console.log(" ");
console.log("Answer to Question 6");
console.log(" ");

var results= items.filter(function(x){
  return(x.who_made == "i_did");
    // console.log( results);

});

console.log(results.length + " were made by their sellers");

console.log(" ");


// var numbers = [1,2,3,4,5,4,3,2,1];
// var filterResult = numbers.filter(function(item, index, array)
// { return (item > 2); });
// alert(filterResult); //[3,4,5,4,3]





//var filterResult = numbers.filter(function(item, index, array){ return (item > 2);



//var someResult = numbers.some(function(item, index, array){
