// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(number, index, numbers) {
    if (number % 5 === 0) {
      count++;
    }
  }); return count;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userArray = [];
  _.each(tweets, function(item, index, tweets) {
    if (item.user === user) {
      userArray.push(item);
    }
  }); return userArray;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var singleFruit = _.filter(fruits, function(item) {
    return item === targetFruit;
  }); return singleFruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var pFruits = _.filter(fruits, function(item) {
    if (item[0] === letter) {
      return item;
    }
  }); return pFruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var cookies = _.filter(desserts, function(item) {
    if (item.type === 'cookie') {
      return item;
    }
  }); return cookies;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  var userTweets = _.filter(tweets, function(item) {
    if (item.user === user) {
      return item;
    }
  }); return userTweets;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  _.map(fruits, function(item) {
    item[0].toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var glutenFreeFoods = _.map(desserts, function(item) {
    if (!(item.ingredients).includes('flour') !== undefined) {
      item.glutenFree = true;
      return item;
    }
  }); return glutenFreeFoods;
};
// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  var tweetMessages = _.map(tweets, function(item) {
    return item.message;
  }); return tweetMessages;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

var applyCoupon = function (groceries, coupon) {
  var couponPrices = _.map(groceries, function(item) {
    var removedSign = parseFloat(item.price.replace('$', ''));
    item.salePrice = '$' + (removedSign - (removedSign * coupon)).toFixed(2);
    return item;
  }); return couponPrices;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var prices = _.map(products, function(item) {
    return parseFloat(item.price.replace('$', ''));
  });
  var sum = _.reduce(prices, function(total, item, index, prices) {
    return total + item;
  }); return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  var count = {};
  _.reduce(desserts, function(list, item) {
    count[item.type] = (count[item.type] || 0) + 1;
  }, 0);
  return count;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var count = {};
  _.reduce(tweets, function(list, item) {
    count[item.user] = (count[item.user] || 0) + 1;
  }, 0); return count;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

var ninetiesKid = function (movies) {
  var resultList = [];
  _.reduce(movies, function(list, item) {
    if (item.releaseYear >= 1990 && item.releaseYear <= 2000) {
      resultList.push(item.title);
    }
  }); return resultList;
};


// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  var meetsTime = false;
  _.reduce(movies, function(list, item) {
    if (item.runtime < timeLimit) {
      meetsTime = true;
    }
  }); return meetsTime;
};
